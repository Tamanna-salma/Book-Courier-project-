import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../components/Hooks/UseAuth";
import UseAxiosSecure from "../../components/Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import Loading from "../../Pages/Loading";

const WishList = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    data: wishLists = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["wishLists", user?.email], 
    enabled: !!user?.email, 
    queryFn: async () => {
      const res = await axiosSecure.get(`/wish-list/${user?.email}`);
      return res.data;
    },
  });

  const handleWishListDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this from wishlist!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/wish-list/${id}`);

        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Book removed from wishlist.", "success");
          refetch();
        }
      } catch (error) {
        Swal.fire("Error!", "Failed to delete item.", "error");
      }
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-5 text-center text-purple-500">
        My Wishlist ({wishLists.length})
      </h2>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="table w-full">
          <thead className="bg-purple-200">
            <tr className="text-gray-700">
              <th>No.</th>
              <th>Image</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Added Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {wishLists.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  Your wishlist is empty!
                </td>
              </tr>
            ) : (
              wishLists.map((item, index) => (
                <tr key={item._id} className="hover:bg-purple-50 border-b">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.bookName}
                      className="w-12 h-16 object-cover rounded shadow-sm"
                    />
                  </td>
                  <td className="font-medium">{item.bookName}</td>
                  <td>{item.authorName}</td>
                  <td>
                    {item.wishList_date
                      ? new Date(item.wishList_date).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleWishListDelete(item._id)}
                      className="py-1 px-3 rounded bg-red-500 hover:bg-red-600 text-white transition-colors"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
import { useEffect, useState } from "react";
import AllbooksCard from "./AllbooksCard";
import Loading from "./Loading";
import match from "../assets/match.jpeg";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(""); // 👈 sort state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);

      const query = search ? `?bookName=${search}` : "";
      const res = await fetch(`http://localhost:3000/Books${query}`);
      let data = await res.json();

      // 💰 Price Sort (frontend)
      if (sort === "low") {
        data.sort((a, b) => a.price - b.price);
      }
      if (sort === "high") {
        data.sort((a, b) => b.price - a.price);
      }

      setBooks(data);
      setLoading(false);
    };

    fetchBooks();
  }, [search, sort]); // 👈 sort dependency added

  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-6">
        All Books
      </h2>

      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by book name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">Sort by price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* Content */}
      {loading ? (
        <Loading />
      ) : books.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img src={match} alt="No data" className="w-48" />
          <p className="text-sm mt-2">
            Try searching with a different book name.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <AllbooksCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;

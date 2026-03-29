import { useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseAuth from "../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const BookRating = ({ book }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", book._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/review/${book._id}`);
      return res.data;
    },
  });

  const handleRating = async () => {
    if (!rating || !reviewText.trim()) {
      Swal.fire({
        title: "Please provide a rating and a review!",
        icon: "warning",
        draggable: true,
      });
      return;
    }

    const ratingData = {
      name: user.displayName,
      email: user.email,
      message: reviewText,
      rating,
      bookId: book?._id,
    };

    const res = await axiosSecure.post("/review", ratingData);
    if (res.data.insertedId) {
      Swal.fire({
        title: "Thank you for your review!",
        icon: "success",
        draggable: true,
      });
      setRating(0);
      setReviewText("");
      refetch();
    } else {
      Swal.fire({
        title: "Something went wrong. Please try again.",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div className="mt-20 max-w-4xl mx-auto p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-2xl transition-colors duration-300">
      <h2 className="text-4xl font-black mb-10 text-center text-gray-800 dark:text-white tracking-tight">Reviews & <span className="text-cyan-600">Ratings</span></h2>

      {/* Submit Review Form */}
      <div className="mb-12 p-8 bg-gray-50 dark:bg-slate-800/50 rounded-[2rem] border border-gray-100 dark:border-slate-800/50 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
        
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <span className="font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest text-sm">Your Rating:</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                className={`text-3xl transition-all hover:scale-125 active:scale-95 ${
                  rating >= star
                    ? "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.4)]"
                    : "text-gray-300 dark:text-slate-700 hover:text-orange-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          <textarea
            className="w-full bg-white dark:bg-slate-900 border-none rounded-2xl p-6 mb-6 text-gray-800 dark:text-white focus:ring-2 focus:ring-cyan-600 transition-all font-bold placeholder:text-gray-400 min-h-[150px] shadow-sm"
            placeholder="Share your thoughts about this book..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button
            onClick={handleRating}
            className="w-full md:w-auto px-10 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-cyan-600/20 active:scale-95 uppercase tracking-widest text-sm"
          >
            Post Review
          </button>
        </div>
      </div>

      {/* Display Reviews */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-100 dark:border-slate-800"></div>
            <span className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Latest Reviews ({reviews.length})</span>
            <div className="h-px flex-1 bg-gray-100 dark:border-slate-800"></div>
        </div>

        {reviews.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-slate-800/30 rounded-[2rem] border-2 border-dashed border-gray-100 dark:border-slate-800">
            <p className="text-gray-400 dark:text-gray-500 font-bold italic">
              Be the first to share your experience with this book!
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, index) => (
            <div
                key={r._id || r.date || index}
                className="bg-gray-50/50 dark:bg-slate-800/30 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-800 hover:border-cyan-600/30 transition-all hover:shadow-xl group"
            >
                <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-600/10 flex items-center justify-center text-cyan-600 font-black text-sm uppercase">
                        {(r.name || r.userName || "U").charAt(0)}
                    </div>
                    <div>
                        <span className="font-black text-gray-800 dark:text-white block group-hover:text-cyan-600 transition-colors">
                            {r.name || r.userName}
                        </span>
                        <small className="text-gray-400 font-bold uppercase tracking-tighter text-[10px]">
                            {new Date(r.date || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </small>
                    </div>
                </div>
                <div className="flex bg-white dark:bg-slate-950 px-3 py-1 rounded-full shadow-sm scale-90">
                    <span className="text-orange-400 text-sm">
                        {"★".repeat(r.rating)}
                    </span>
                    <span className="text-gray-200 dark:text-slate-800 text-sm">
                        {"★".repeat(Math.max(0, 5 - r.rating))}
                    </span>
                </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-semibold leading-relaxed text-sm">
                    "{r.message || r.reviewText}"
                </p>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookRating;
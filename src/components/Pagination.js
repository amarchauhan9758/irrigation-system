import React from "react";

function Pagination({ currentPage, setCurrentPage, pageCount }) {
  console.log(currentPage, "line no 4");
  // Ensure that pageCount is at least 1 to avoid errors
  if (pageCount < 1) return null;

  return (
    <div className="flex justify-end items-center space-x-2 mt-6">
      {/* First Page Button (<<) */}
      <button
        className="px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        <img src="/assets/back.png" alt="First Page" className="w-4 h-4" />
      </button>

      {/* Previous Page Button (<) */}
      <button
        className="px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/assets/left.png" alt="Previous Page" className="w-4 h-4" />
      </button>

      {/* Page Number Buttons */}

      <button
        className="px-3 py-1 rounded-lg text-sm font-medium bg-blue-500 text-white"
        disabled
      >
        {currentPage}/ {pageCount}
      </button>

      {/* Next Page Button (>) */}
      <button
        className="px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        <img src="/assets/next.png" alt="Next Page" className="w-4 h-4" />
      </button>

      {/* Last Page Button (>>) */}
      <button
        className="px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
        onClick={() => setCurrentPage(pageCount)}
        disabled={currentPage === pageCount}
      >
        <img src="/assets/right.png" alt="Last Page" className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Pagination;

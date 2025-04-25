import React, { useState, useEffect } from "react";

function FilterWithSearch({ paginatedData, setFilteredData }) {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const handleFilterChange = () => {
    let filtered = paginatedData;

    if (search) {
      filtered = filtered.filter((item) =>
        item.plot.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by status
    if (status !== "All") {
      filtered = filtered.filter((item) => item.status === status);
    }

    // Update the filtered data in the parent
    setFilteredData(filtered);
  };

  useEffect(() => {
    handleFilterChange();
  }, [search, status, paginatedData]); // Trigger on changes

  return (
    <div className="flex justify-end items-center mb-4 relative">
      {/* Always show the filter icon */}
      <button
        onClick={() => setFilterVisible(!isFilterVisible)}
        className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <img src="/assets/filter.png" alt="Filter" className="w-6 h-6" />
      </button>

      {/* The filter input panel */}
      <div
        className={`absolute right-14  bg-white shadow-md rounded-lg transition-all duration-500 ease-in-out transform ${
          isFilterVisible ? "scale-x-100" : "scale-x-0"
        } origin-right`}
      >
        {/* Filter Inputs in Row */}
        <div className="flex items-center mb-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by plot..."
            className="px-4 py-2 border rounded-lg w-64 mr-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Update search value
          />

          {/* Status Filter */}
          <select
            className="px-4 py-2 border rounded-lg w-40"
            value={status}
            onChange={(e) => setStatus(e.target.value)} // Update status value
          >
            <option value="All">All Status</option>
            <option value="Done">Done</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterWithSearch;

import React, { useState } from "react";
import Pagination from "./Pagination";
import FilterWithSearch from "./FilterWithSearch";
import Dummydata from "./Dummydata";

export default function IrrigationTable() {
  const irrigationData = Dummydata(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(irrigationData); // Store filtered data here
  const itemsPerPage = 10;

  // Paginate filtered data
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen ">
      <div className="bg-white h-[80vh] rounded-3xl shadow-xl shadow-[#b4e0f1] p-6 ">
        <FilterWithSearch
          paginatedData={irrigationData} // Pass the whole data here to filter
          setFilteredData={setFilteredData} // Pass setFilteredData to filter the data
        />

        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className=" text-gray-700 uppercase text-xs border-b-2">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Plot</th>
              <th className="p-3">Start Time</th>
              <th className="p-3">End Time</th>
              <th className="p-3">Run By</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedData.map((item) => (
              <tr key={item.index} className="hover:bg-gray-50">
                <td className="p-3">{item.index}</td>
                <td className="p-3 font-medium text-gray-900">{item.plot}</td>
                <td className="p-3">{item.startTime}</td>
                <td className="p-3">{item.endTime}</td>
                <td className="p-3">{item.RunBy}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      item.status === "Pending"
                        ? "bg-blue-100 text-blue-800"
                        : item.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className=" px-6">
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

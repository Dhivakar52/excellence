import React, { useState } from "react";
import {  Search, ChevronDown, Plus, Menu } from "lucide-react";
import BackToSetting from "../BackToSetting";

interface Cycle {
  id: string;
  cycleName: string;
  duration: string;
  status: "Active" | "Completed";
  nominations: number;
  winners: number;
}

const NominationCycleMaster: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [cycles] = useState<Cycle[]>([
    {
      id: "1",
      cycleName: "SRM Award 2024-25",
      duration: "Aug 2024 - Aug 2025",
      status: "Active",
      nominations: 1240,
      winners: 12,
    },
    {
      id: "2",
      cycleName: "SRM Award 2023-24",
      duration: "Aug 2023 - Aug 2024",
      status: "Completed",
      nominations: 1050,
      winners: 25,
    },
    {
      id: "3",
      cycleName: "SRM Award 2022-23",
      duration: "Aug 2022 - Aug 2023",
      status: "Completed",
      nominations: 1120,
      winners: 17,
    },
    {
      id: "4",
      cycleName: "SRM Award 2021-22",
      duration: "Aug 2021 - Aug 2022",
      status: "Completed",
      nominations: 980,
      winners: 27,
    },
    {
      id: "5",
      cycleName: "SRM Award 2020-21",
      duration: "Aug 2020 - Aug 2021",
      status: "Completed",
      nominations: 410,
      winners: 6,
    },
    {
      id: "6",
      cycleName: "SRM Award 2019-20",
      duration: "Aug 2019 - Aug 2020",
      status: "Completed",
      nominations: 580,
      winners: 14,
    },
  ]);

  const handleAddCycle = () => {
    console.log("Add new cycle");
  };

  const handleViewDetails = (id: string) => {
    console.log("View details for:", id);
  };

  const filteredCycles = cycles.filter((cycle) => {
    const matchesSearch = cycle.cycleName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      cycle.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      <div className="">
        {/* Back Button */}
       <BackToSetting/>

        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Nomination Cycle Master
            </h1>
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48"
                />
              </div>
              {/* Filter */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="all">Filter by Status</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {/* Add Button */}
              <button
                onClick={handleAddCycle}
                className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add New Cycle
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Cycle Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Nominations
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Winners
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCycles.map((cycle) => (
                  <tr key={cycle.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                      {cycle.cycleName}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">
                      {cycle.duration}
                    </td>
                    <td className="px-4 py-4 text-sm">
                      {cycle.status === "Active" ? (
                        <span className="text-green-600 font-medium">
                          Active
                        </span>
                      ) : (
                        <span className="text-blue-600 font-medium">
                          Completed
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {cycle.nominations.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {cycle.winners}
                    </td>
                    <td className="px-4 py-4 text-sm text-right">
                      <button
                        onClick={() => handleViewDetails(cycle.id)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Menu className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NominationCycleMaster;
import React, { useState } from "react";
import { Search, Plus, Menu } from "lucide-react";
import BackToSetting from "../BackToSetting";
interface JuryMapping {
  id: string;
  juryMember: string;
  mappedEntity: string;
  category: string;
}

const JuryRoleMapping: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mappings] = useState<JuryMapping[]>([
    {
      id: "1",
      juryMember: "Dr. Ramesh Kumar",
      mappedEntity: "SRM Hospital",
      category: "Service Excellence",
    },
    {
      id: "2",
      juryMember: "Prof. Anitha Rao",
      mappedEntity: "SRM University",
      category: "Leadership",
    },
    {
      id: "3",
      juryMember: "Mr. S. Venkatesh",
      mappedEntity: "Global Holdings",
      category: "Innovation Awards",
    },
    {
      id: "4",
      juryMember: "Ms. Divya Shankar",
      mappedEntity: "SRM Tech",
      category: "Service Excellence",
    },
    {
      id: "5",
      juryMember: "Dr. Rajiv Menon",
      mappedEntity: "Puthiya Thalaimurai",
      category: "Service Excellence",
    },
    {
      id: "6",
      juryMember: "Mr. Arvind Kumar",
      mappedEntity: "SRM MHS",
      category: "Customer Focus",
    },
  ]);

  const handleAddMapping = () => {
    console.log("Add new mapping");
  };

  const handleViewDetails = (id: string) => {
    console.log("View details for:", id);
  };

  const filteredMappings = mappings.filter(
    (mapping) =>
      mapping.juryMember.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mapping.mappedEntity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mapping.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" p-6">
      <div className="">
        {/* Back Button */}
        <BackToSetting/>

        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Jury Role Mapping
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
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
              {/* Add Button */}
              <button
                onClick={handleAddMapping}
                className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Mapping
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Jury Member
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Mapped Entity
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredMappings.map((mapping) => (
                  <tr key={mapping.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {mapping.juryMember}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">
                      {mapping.mappedEntity}
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
                        {mapping.category}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-right">
                      <button
                        onClick={() => handleViewDetails(mapping.id)}
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

export default JuryRoleMapping;
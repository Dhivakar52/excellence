import React, { useState } from "react";
import {  Search, Plus, Edit2, Trash2 } from "lucide-react";
import BackToSetting from "../BackToSetting";

interface EntityDepartment {
  id: string;
  entity: string;
  departments: string;
}

const EntitiesDepartments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState<EntityDepartment[]>([
    { id: "1", entity: "SRM Tech", departments: "Dev, Support" },
    { id: "2", entity: "SRM Global Holdings", departments: "Strategy, Finance" },
    {
      id: "3",
      entity: "Puthiya Thalaimurai",
      departments: "Editorial, Production",
    },
    { id: "4", entity: "SRM MHS", departments: "Medical, Administration" },
    { id: "5", entity: "Federal", departments: "Research, Legal" },
    { id: "6", entity: "SRM PS", departments: "Teaching, Curriculum" },
  ]);

  const handleEdit = (id: string) => {
    console.log("Edit item:", id);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleAddEntity = () => {
    console.log("Add new entity");
  };

  const handleAddDepartment = () => {
    console.log("Add new department");
  };

  const filteredItems = items.filter(
    (item) =>
      item.entity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.departments.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="">
        {/* Back Button */}
          <BackToSetting/>

        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Entities & Departments Setup
            </h1>
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Entities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
              {/* Add Buttons */}
              <button
                onClick={handleAddEntity}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add New Entity
              </button>
              <button
                onClick={handleAddDepartment}
                className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add New Department
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Entities
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Departments
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {item.entity}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">
                      {item.departments}
                    </td>
                    <td className="px-4 py-4 text-sm text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="text-blue-600 hover:text-blue-700"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-700"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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

export default EntitiesDepartments;
import React, { useState } from "react";
import {  Search, Plus, Edit2, Trash2 } from "lucide-react";
import BackToSetting from "../BackToSetting";

interface Role {
  id: string;
  name: string;
  description: string;
}

const RoleAccessLevels: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roles, setRoles] = useState<Role[]>([
    { id: "1", name: "Super Admin", description: "Full system access" },
    { id: "2", name: "Admin", description: "Administrative access" },
    { id: "3", name: "Manager", description: "Validation authority" },
    { id: "4", name: "Jury Member", description: "Evaluation access" },
    { id: "5", name: "Employee", description: "Can nominate only" },
  ]);

  const handleEdit = (id: string) => {
    console.log("Edit role:", id);
  };

  const handleDelete = (id: string) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleAddRole = () => {
    console.log("Add new role");
  };

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase())
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
              Role List & Access Levels
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
                onClick={handleAddRole}
                className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Role
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Existing Roles
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredRoles.map((role) => (
                  <tr key={role.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                      {role.name}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">
                      {role.description}
                    </td>
                    <td className="px-4 py-4 text-sm text-right">
                      <div className="flex items-center justify-end gap-4">
                        <button
                          onClick={() => handleEdit(role.id)}
                          className="text-blue-600 hover:text-blue-700 flex items-center gap-1.5 text-sm font-medium"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(role.id)}
                          className="text-red-600 hover:text-red-700 flex items-center gap-1.5 text-sm font-medium"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
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

export default RoleAccessLevels;
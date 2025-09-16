import React , {useState} from 'react';
import { Menu } from 'lucide-react';
import  type Nomination  from '../../dataTypes/nomination';
import { Outlet } from "react-router-dom";
import NominationDetailsModal from './NominationDetailsModal ';


// Table Component
interface TableProps {
  nominations: Nomination[];
}

const NominationTable: React.FC<TableProps> = ({ nominations }) => {

  const [modalOpen, setModalOpen] = React.useState(false);
  const data = {
  nominationId: 'SELF-0851',
  nominee: 'Ravi Kumar',
  entity: 'SRMAP',
  category: 'Business Excellence',
  nominatedBy: 'Sathish Kumar',
  submissionDate: '07/20/2025',
  contestType: 'Other Nomination',
  status: 'Pending',
  managerEmail: 'manager@gmail.com',
  referrals: ['sathish28@gmail.com', 'kumar12@gmail.com'],
  description: 'Implemented auto-scheduling system that improved efficiency by 40%',
};
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'text-[14px] font-medium px-2 py-1 rounded-md bg-orange-100 text-orange-700';
      case 'Approved':
        return 'text-[14px] font-medium px-2 py-1 rounded-md bg-[#EEFFF3] text-[#16A34A] ';
      case 'Rejected':
        return 'text-[14px] font-medium px-2 py-1 rounded-md bg-red-100 text-red-700';
      case 'Under Review':
        return 'text-[14px] font-medium px-2 py-1 rounded-md bg-yellow-100 text-yellow-700';
      default:
        return 'text-[14px] font-medium px-2 py-1 rounded-md bg-gray-100 text-gray-700';
    }

  };
     const getProgressColor = (progress: string) => {
      switch (progress) {
        case 'Stage 1':
          return 'text-[14px] font-medium px-2 py-1 rounded-md bg-[#FFF7ED] text-[#C2410C]';
        case 'Stage 2':
          return 'text-[14px] font-medium px-2 py-1 rounded-md bg-yellow-100 text-yellow-700';
        case 'Stage 3':
          return 'text-[14px] font-medium px-2 py-1 rounded-md bg-green-100 text-green-700';
        default:
          return 'text-[14px] font-medium px-2 py-1 rounded-md bg-gray-100 text-gray-700';
      }
    };

  return (
    <>
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nomination ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nominee
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Entity
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {nominations.map((nomination, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {nomination.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {nomination.nominee}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {nomination.entity}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {nomination.category}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(nomination.status)}`}>
                    {nomination.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium  ${getProgressColor(nomination.progress)} rounded-md`}>
                    {nomination.progress}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"  onClick={() => setModalOpen(true)}>
                    <Menu size={16} className="text-gray-600" />
                  </button>
                   <NominationDetailsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={data}
      />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden">
        {nominations.map((nomination, index) => (
          <div key={index} className="p-4 border-b border-gray-100 last:border-b-0">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-medium text-gray-900 text-sm">{nomination.id}</div>
                <div className="text-gray-600 text-sm">{nomination.nominee}</div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Menu size={16} className="text-gray-600" />
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Entity:</span>
                <span className="text-gray-900">{nomination.entity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Category:</span>
                <span className="text-gray-900">{nomination.category}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Status:</span>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(nomination.status)}`}>
                  {nomination.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Progress:</span>
                <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-md">
                  {nomination.progress}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <Outlet />

    </>
  );
};

export default NominationTable;
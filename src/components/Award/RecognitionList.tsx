import React, { useState } from "react";
import { Search, Filter, Download, Mail } from "lucide-react";

interface Recognition {
  id: string;
  awardName: string;
  winner: string;
  certificateIssued: boolean;
}

const RecognitionList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recognitions] = useState<Recognition[]>([
    {
      id: "1",
      awardName: "Best Research Faculty",
      winner: "Dr. R. Shankar",
      certificateIssued: true,
    },
    {
      id: "2",
      awardName: "Academic Excellence Award",
      winner: "Ms. Priya Rajan",
      certificateIssued: true,
    },
    {
      id: "3",
      awardName: "Best Mentor – IT Dept.",
      winner: "Mr. S. Karthikeyan",
      certificateIssued: true,
    },
    {
      id: "4",
      awardName: "Young Achiever – Student",
      winner: "Anjali Krishnan",
      certificateIssued: false,
    },
    {
      id: "5",
      awardName: "Innovation in Teaching",
      winner: "Dr. N. Selvam",
      certificateIssued: true,
    },
    {
      id: "6",
      awardName: "Best Department Coordinator",
      winner: "Mrs. Keerthi R",
      certificateIssued: true,
    },
    {
      id: "7",
      awardName: "Rising Star – ECE Dept.",
      winner: "Rahul Suresh",
      certificateIssued: false,
    },
  ]);

  const handleDownloadCertificate = (id: string) => {
    console.log("Download certificate for:", id);
  };

  const handleSendEmail = (id: string) => {
    console.log("Send email for:", id);
  };

  const filteredRecognitions = recognitions.filter(
    (recognition) =>
      recognition.awardName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recognition.winner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-6">
      <div className=" bg-white shadow-sm rounded-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Recognition List
            </h2>
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {/* Filter Button */}
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Award Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Winner
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Certificate Issued
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Download
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRecognitions.map((recognition) => (
                <tr key={recognition.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {recognition.awardName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {recognition.winner}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {recognition.certificateIssued ? (
                      <span className="text-green-600 font-medium">Yes</span>
                    ) : (
                      <span className="text-red-600 font-medium">No</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {recognition.certificateIssued ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleDownloadCertificate(recognition.id)
                          }
                          className="px-3 py-1.5 border border-orange-500 text-orange-500 rounded text-xs font-medium hover:bg-orange-50 transition-colors flex items-center gap-1.5"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Certificates
                        </button>
                        <button
                          onClick={() => handleSendEmail(recognition.id)}
                          className="px-3 py-1.5 border border-blue-500 text-blue-500 rounded text-xs font-medium hover:bg-blue-50 transition-colors flex items-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          Email
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-xs">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecognitionList;
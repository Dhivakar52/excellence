import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Filter, Search, Bell, ChevronDown, MoreHorizontal, Home, Users, BarChart3, MessageSquare, User } from 'lucide-react';
import logo from '../assets/images/layout_logo.png'
interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    isRecommended?: boolean;
    isFollowing?: boolean;
    badges?: string[];
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  views: string;
  timeAgo: string;
  isHighlighted?: boolean;
}

const Layout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Posts' | 'My Lists'>('Posts');
  
  const posts: Post[] = [
    {
      id: '1',
      author: {
        name: 'Akhilesh Kumar',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        isRecommended: true,
        badges: ['Interested']
      },
      content: 'Looking forward to the Samsung team visit! I provided them with cooking instructions, resources, and recipe recommendations. These nutrition significantly influence different age groups and help in building different scenarios.',
      likes: 25,
      comments: 10,
      views: '159 Views',
      timeAgo: '2h',
      isHighlighted: true
    },
    {
      id: '2',
      author: {
        name: 'Manik Krishna',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        isRecommended: true,
        badges: ['Interested']
      },
      content: 'Looking to understand new business development concepts that from Academy. The assignment which are facing and important and understanding business development.',
      likes: 45,
      comments: 25,
      views: '234 Views',
      timeAgo: '4h'
    },
    {
      id: '3',
      author: {
        name: 'Vijay Panav',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        isRecommended: true,
        isFollowing: true
      },
      content: 'Proud to share that our Startup Guidance solution has been approved for implementation in our new product development continues to set new standards in business delivery.',
      likes: 67,
      comments: 18,
      views: '312 Views',
      timeAgo: '6h'
    },
    {
      id: '4',
      author: {
        name: 'Rakitha Kumar',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
        isRecommended: true,
        badges: ['Collaborative']
      },
      content: 'Just completed a judgment not talent technology of SuperCritical to automate few interactive processes and enhanced productivity across all departments. Grateful for the incredible team effort!',
      likes: 89,
      comments: 32,
      views: '456 Views',
      timeAgo: '8h'
    },
    {
      id: '5',
      author: {
        name: 'Vandana',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
        isRecommended: true,
        badges: ['Writing Excellence']
      },
      content: 'Thrilled to announce that our team has delivered advanced innovative automation in sustainable technology. This tremendous improvement towards creating of reduction and manufacturing.',
      likes: 34,
      comments: 15,
      views: '187 Views',
      timeAgo: '10h'
    },
    {
      id: '6',
      author: {
        name: 'Mahendran',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face',
        isRecommended: true,
        badges: ['Leadership']
      },
      content: 'Excited to announce that our Business Excellence consultants team from Academy. This achievement reflects our team excellence in innovative and understanding business development.',
      likes: 56,
      comments: 28,
      views: '298 Views',
      timeAgo: '12h'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-3">
              <div className="w-[107px] h-[39px] ">
                <img src={logo} alt="" />
              </div>
            
            </div>
            
            <div className="flex-1 max-w-sm mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">1</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User" className="w-7 h-7 rounded-full" />
                <span className="text-sm text-gray-700">Ravi Kumar</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-4">
            <div className="bg-white rounded-lg shadow-sm">
              <nav className="p-4 space-y-1">
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-50 rounded-md p-2">
                  <div className="w-4 h-4 bg-teal-600 rounded-sm flex items-center justify-center">
                    <Home className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-sm">Home</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-50 rounded-md p-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                    <Users className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-sm">Network</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-50 rounded-md p-2">
                  <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                    <BarChart3 className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-sm">Self Performance</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-white bg-teal-600 rounded-md p-2">
                  <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                    <MessageSquare className="w-2.5 h-2.5 text-teal-600" />
                  </div>
                  <span className="text-sm font-medium">My Interactions</span>
                </a>
              </nav>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium text-gray-900 mb-3 text-sm">Navigation Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">All Thoughts</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">HR Interactions</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pending Posts</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Approved</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex space-x-6">
                    <button
                      onClick={() => setActiveTab('Posts')}
                      className={`pb-2 text-sm font-medium border-b-2 ${
                        activeTab === 'Posts'
                          ? 'text-teal-600 border-teal-600'
                          : 'text-gray-500 border-transparent hover:text-gray-700'
                      }`}
                    >
                      Posts
                    </button>
                    <button
                      onClick={() => setActiveTab('My Lists')}
                      className={`pb-2 text-sm font-medium border-b-2 ${
                        activeTab === 'My Lists'
                          ? 'text-teal-600 border-teal-600'
                          : 'text-gray-500 border-transparent hover:text-gray-700'
                      }`}
                    >
                      My Lists
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-400 cursor-pointer" />
                    <span className="text-sm text-gray-400">Filter</span>
                  </div>
                </div>
              </div>

              {/* Posts */}
              <div className="divide-y divide-gray-100">
                {posts.map((post, index) => (
                  <div key={post.id} className="p-4">
                    {post.isHighlighted && (
                      <div className="border-2 border-dashed border-purple-300 rounded-lg p-4 mb-4 bg-purple-50">
                        <div className="flex space-x-3">
                          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <h3 className="font-medium text-gray-900 text-sm">{post.author.name}</h3>
                                {post.author.isRecommended && (
                                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">✓ Recommended</span>
                                )}
                                {post.author.badges?.map((badge, badgeIndex) => (
                                  <span key={badgeIndex} className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">☆ {badge}</span>
                                ))}
                              </div>
                              <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
                            </div>
                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">{post.content}</p>
                            
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                                  <Heart className="w-4 h-4" />
                                  <span className="text-xs">{post.likes} Likes</span>
                                </button>
                                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                                  <MessageCircle className="w-4 h-4" />
                                  <span className="text-xs">{post.comments} Comments</span>
                                </button>
                                <button className="text-gray-500 hover:text-gray-700">
                                  <Share className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="text-xs text-gray-500">
                                ⏱ {post.views}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {!post.isHighlighted && (
                      <div className="flex space-x-3">
                        <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-medium text-gray-900 text-sm">{post.author.name}</h3>
                              {post.author.isRecommended && (
                                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">✓ Recommended</span>
                              )}
                              {post.author.isFollowing && (
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">✓ Follow</span>
                              )}
                              {post.author.badges?.map((badge, badgeIndex) => (
                                <span key={badgeIndex} className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">☆ {badge}</span>
                              ))}
                            </div>
                            <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
                          </div>
                          <p className="text-gray-700 mt-2 text-sm leading-relaxed">{post.content}</p>
                          
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-4">
                              <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                                <Heart className="w-4 h-4" />
                                <span className="text-xs">{post.likes} Likes</span>
                              </button>
                              <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                                <MessageCircle className="w-4 h-4" />
                                <span className="text-xs">{post.comments} Comments</span>
                              </button>
                              <button className="text-gray-500 hover:text-gray-700">
                                <Share className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="text-xs text-gray-500">
                              ⏱ {post.views}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-4">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" alt="Profile" className="w-16 h-16 rounded-full mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 text-sm">S. Ravi Kumar</h3>
                <p className="text-xs text-gray-600">Chennai</p>
                <p className="text-xs text-gray-600">India</p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Category:</span>
                      <span className="text-gray-900">Innovation</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Interactions:</span>
                      <span className="text-gray-900">342</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Posts:</span>
                      <span className="text-gray-900">23 • 5 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 3 Performers */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium text-gray-900 mb-3 text-sm">Top 3 Performers in Each Category</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 text-xs mb-2">Customer Focus</h4>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-blue-600">Akhil</span>
                      <span className="text-gray-500">120 likes</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-blue-600">Shiva</span>
                      <span className="text-gray-500">98 likes</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-blue-600">Accounts</span>
                      <span className="text-gray-500">78 likes</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 text-xs mb-2">Business</h4>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-600">Accounts</span>
                    <span className="text-gray-500">78 likes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
import React from 'react';
import { Search } from 'lucide-react';

interface SearchComponentProps {
  search: string;
  setSearch: (value: string) => void;
  placeholder?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ search, setSearch, placeholder = "Search" }) => {
  return (
    <div className="relative w-full">
      <Search className="w-5 h-5 absolute left-2 top-[15px] -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-8 pr-3 py-1 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchComponent;

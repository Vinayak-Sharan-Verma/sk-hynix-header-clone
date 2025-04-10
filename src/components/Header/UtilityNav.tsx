
import { Search, Globe } from "lucide-react";
import { useState } from "react";

const UtilityNav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* Language selector */}
      <div className="relative mr-4">
        <button
          className="flex items-center text-sm text-gray-600 hover:text-[#e60012]"
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          <Globe size={18} className="mr-1" />
          <span className="hidden md:inline-block">KOR</span>
        </button>
        
        {isLangOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden z-10">
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-[#e60012] font-medium">
              KOR
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              ENG
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              CHN
            </button>
          </div>
        )}
      </div>

      {/* Search button */}
      <div className="relative">
        <button
          className="flex items-center text-gray-600 hover:text-[#e60012]"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <Search size={20} />
        </button>
        
        {isSearchOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md p-4 z-10 w-72">
            <div className="flex items-center border-b border-gray-300 pb-2">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-full outline-none text-sm"
                autoFocus
              />
              <Search size={18} className="text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UtilityNav;

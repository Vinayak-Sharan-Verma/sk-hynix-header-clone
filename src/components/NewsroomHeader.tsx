
import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export const NewsroomHeader = () => {
  const [language, setLanguage] = useState("KR");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white relative">
      <div
        className="absolute inset-0 overflow-hidden z-0"
        style={{
          background: "linear-gradient(to bottom, #000 0%, #0a0a20 100%)",
          opacity: 0.9,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top bar with logo, search and language selector */}
        <div className="flex items-center justify-center py-6 relative">
          {/* Logo */}
          <a href="/" className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
              SK HYNIX NEWSR
              <span className="inline-flex">
                <span className="h-2 w-2 bg-white rounded-full mx-[1px] mt-[14px]"></span>
                <span className="h-2 w-2 bg-white rounded-full mx-[1px] mt-[14px]"></span>
              </span>
              M
            </h1>
          </a>

          {/* Right side controls */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <button className="text-white hover:bg-white/10 p-2 rounded-full">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>

            <div 
              className="relative flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <span className="font-medium">{language}</span>
              <ChevronDown className="h-4 w-4" />
              
              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white text-black rounded shadow-lg">
                  {["KR", "ENG", "CHN"].map((lang) => (
                    <div 
                      key={lang} 
                      className="px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setLanguage(lang);
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center border-t border-white/20 py-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 text-sm">
            {[
              "TECH &", 
              "AI &", 
              "CULTURE &", 
              "SUSTAINABILITY &", 
              "PRESS", 
              "MEDIA LIBRARY", 
              "HERITAGE OF TECHNOLOGY"
            ].map((item, index) => (
              <li 
                key={item} 
                className={`py-2 ${
                  index === 4 || index === 6 ? "border-l border-white/30 pl-8" : ""
                }`}
              >
                <a href="#" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

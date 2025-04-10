
import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuItems = [
    {
      id: "news",
      label: "뉴스룸",
      subItems: ["전체", "보도자료", "스토리", "공지사항"],
    },
    {
      id: "about",
      label: "SK하이닉스",
      subItems: ["기업개요", "연혁", "리더십", "글로벌 네트워크"],
    },
    {
      id: "products",
      label: "제품",
      subItems: ["DRAM", "NAND Flash", "CIS"],
    },
    {
      id: "esg",
      label: "ESG",
      subItems: ["ESG 경영", "사회공헌", "윤리경영"],
    },
    {
      id: "careers",
      label: "인재/채용",
      subItems: [],
    },
    {
      id: "ir",
      label: "투자정보",
      subItems: ["재무정보", "주가정보", "공시정보"],
    },
  ];

  const toggleSubmenu = (id: string) => {
    if (activeSubmenu === id) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(id);
    }
  };

  return (
    <div className="lg:hidden">
      <button 
        className="text-gray-700 p-2"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="font-bold text-xl">
                <span className="text-black">SK</span>
                <span className="text-[#e60012]">hynix</span>
              </div>
              <button 
                className="text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-4">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.id} className="border-b border-gray-200">
                    <div 
                      className="flex justify-between items-center py-3 cursor-pointer"
                      onClick={() => item.subItems.length > 0 && toggleSubmenu(item.id)}
                    >
                      <span className="font-medium">{item.label}</span>
                      {item.subItems.length > 0 && (
                        <ChevronRight 
                          size={18} 
                          className={`transition-transform ${activeSubmenu === item.id ? 'rotate-90' : ''}`}
                        />
                      )}
                    </div>
                    
                    {activeSubmenu === item.id && item.subItems.length > 0 && (
                      <ul className="pl-4 pb-2">
                        {item.subItems.map((subItem, idx) => (
                          <li key={idx}>
                            <Link 
                              to="#" 
                              className="block py-2 text-gray-600 hover:text-[#e60012]"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 flex justify-between">
                <button className="py-2 px-4 text-sm border border-gray-300 rounded">
                  KOR
                </button>
                <button className="py-2 px-4 text-sm border border-gray-300 rounded">
                  ENG
                </button>
                <button className="py-2 px-4 text-sm border border-gray-300 rounded">
                  CHN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

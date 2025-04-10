
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

type SubMenuItem = {
  id: string;
  label: string;
  link: string;
};

type MenuItem = {
  id: string;
  label: string;
  link: string;
  subItems?: SubMenuItem[];
};

const menuItems: MenuItem[] = [
  {
    id: "news",
    label: "뉴스룸",
    link: "/news",
    subItems: [
      { id: "news-all", label: "전체", link: "/news/all" },
      { id: "news-press", label: "보도자료", link: "/news/press" },
      { id: "news-stories", label: "스토리", link: "/news/stories" },
      { id: "news-notices", label: "공지사항", link: "/news/notices" },
    ],
  },
  {
    id: "about",
    label: "SK하이닉스",
    link: "/about",
    subItems: [
      { id: "about-overview", label: "기업개요", link: "/about/overview" },
      { id: "about-history", label: "연혁", link: "/about/history" },
      { id: "about-leadership", label: "리더십", link: "/about/leadership" },
      { id: "about-global", label: "글로벌 네트워크", link: "/about/global" },
    ],
  },
  {
    id: "products",
    label: "제품",
    link: "/products",
    subItems: [
      { id: "products-dram", label: "DRAM", link: "/products/dram" },
      { id: "products-nand", label: "NAND Flash", link: "/products/nand" },
      { id: "products-cis", label: "CIS", link: "/products/cis" },
    ],
  },
  {
    id: "esg",
    label: "ESG",
    link: "/esg",
    subItems: [
      { id: "esg-overview", label: "ESG 경영", link: "/esg/overview" },
      { id: "esg-social", label: "사회공헌", link: "/esg/social" },
      { id: "esg-ethics", label: "윤리경영", link: "/esg/ethics" },
    ],
  },
  {
    id: "careers",
    label: "인재/채용",
    link: "/careers",
  },
  {
    id: "ir",
    label: "투자정보",
    link: "/ir",
    subItems: [
      { id: "ir-financial", label: "재무정보", link: "/ir/financial" },
      { id: "ir-stock", label: "주가정보", link: "/ir/stock" },
      { id: "ir-disclosure", label: "공시정보", link: "/ir/disclosure" },
    ],
  },
];

const MainNav = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menuId: string) => {
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center space-x-2 text-base font-medium">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={item.link}
              className="flex items-center px-3 py-2 text-gray-700 hover:text-[#e60012] transition-colors duration-200"
            >
              {item.label}
              {item.subItems && (
                <ChevronDown size={16} className="ml-1 mt-0.5" />
              )}
            </Link>

            {item.subItems && activeMenu === item.id && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-48 py-2 z-10">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.id}
                    to={subItem.link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#e60012]"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;

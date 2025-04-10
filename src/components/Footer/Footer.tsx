
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Home, Instagram, Youtube, Radio, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-12 md:py-16">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Left Links */}
          <div className="space-y-4">
            <div className="font-bold">TECH &</div>
            <div className="font-bold">AI &</div>
            <div className="font-bold">CULTURE &</div>
            <div className="font-bold">SUSTAINABILITY &</div>
            <div className="font-bold">PRESS</div>
            <div className="font-bold">MEDIA LIBRARY</div>
            <div className="font-bold">HERITAGE OF TECHNOLOGY</div>
          </div>

          {/* Middle Links */}
          <div className="space-y-4">
            <div className="font-bold">문의하기</div>
            <div className="text-blue-400">개인정보처리방침</div>
            <div className="font-bold">뉴스룸 운영정책</div>
            <div className="font-bold">뉴스룸 이용안내</div>
          </div>

          {/* Right Newsletter */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center mb-4">
              <div className="bg-white p-2 rounded">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M3 7.5C3 6.67157 3.67157 6 4.5 6H19.5C20.3284 6 21 6.67157 21 7.5V16.5C21 17.3284 20.3284 18 19.5 18H4.5C3.67157 18 3 17.3284 3 16.5V7.5Z" 
                    stroke="black" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M3 9L10.5 13.5C11.3284 14.0594 12.6716 14.0594 13.5 13.5L21 9" 
                    stroke="black" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-3 font-bold text-lg">SK하이닉스 뉴스레터</div>
            </div>
            <div>
              <button className="rounded-full bg-white text-black px-6 py-2 font-bold">
                구독하기
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Separator className="bg-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
              SK HYNIX NEWSROOM
            </h1>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link to="/" className="p-1 hover:opacity-70 transition-opacity">
              <Home className="w-6 h-6" />
            </Link>
            <Link to="/" className="p-1 hover:opacity-70 transition-opacity">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link to="/" className="p-1 hover:opacity-70 transition-opacity">
              <Youtube className="w-6 h-6" />
            </Link>
            <Link to="/" className="p-1 hover:opacity-70 transition-opacity">
              <Radio className="w-6 h-6" />
            </Link>
            <Link to="/" className="p-1 hover:opacity-70 transition-opacity">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link to="/" className="p-1 hover:opacity-70 transition-opacity">
              <div className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full text-xs font-bold">
                Ch
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

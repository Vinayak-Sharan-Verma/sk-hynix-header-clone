
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const MatchingInterface = () => {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);

  const profiles = [
    { id: 1, name: "박정호", location: "시청롯데씨 강남구", type: "매칭완료", count: "2.8 회" },
    { id: 2, name: "슬마실 지오미", location: "시청롯데씨 강남구", type: "매칭가능", count: "미 2" },
    { id: 3, name: "박정호", location: "시청롯데씨 강남구", type: "매칭완료", count: "2.8 회" },
    { id: 4, name: "전수민", location: "시청롯데씨 을로구", type: "매칭가능", count: "2.5 회" },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 flex items-center relative">
        <ChevronLeft className="w-6 h-6" />
        <h1 className="text-lg font-medium absolute left-1/2 transform -translate-x-1/2">매치현황</h1>
      </header>

      {/* Sub header */}
      <div className="bg-white p-4 flex items-center">
        <h2 className="text-red-500 font-semibold flex items-center">
          매치 신청 2
          <span className="inline-block ml-1 text-red-500">↗</span>
        </h2>
      </div>

      {/* Profile Grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {profiles.map((profile) => (
          <div 
            key={profile.id}
            className="bg-gradient-to-b from-purple-200 to-purple-700 rounded-xl overflow-hidden border-2 border-red-500 flex flex-col"
            onClick={() => setShowSuccessDialog(true)}
          >
            {/* Profile header */}
            <div className="bg-red-500 text-white text-xs px-2 py-1 self-start rounded-br-md">
              최근 접속
            </div>
            
            {/* Profile status badges */}
            <div className="flex gap-1 p-2">
              <span className={`text-xs px-2 py-1 rounded-full text-white ${profile.type === "매칭완료" ? "bg-red-500" : "bg-gray-500"}`}>
                {profile.type === "매칭완료" ? "매칭완료" : "매칭가능"}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full text-white ${profile.type === "매칭완료" ? "bg-gray-500" : "bg-red-500"}`}>
                {profile.type === "매칭완료" ? "매칭가능" : "매칭가능"}
              </span>
            </div>
            
            {/* Profile body - empty space */}
            <div className="flex-grow"></div>
            
            {/* Profile footer */}
            <div className="p-3 text-white">
              <div className="text-xs opacity-70">{profile.location}</div>
              <div className="font-bold flex items-center">
                {profile.name}
                {profile.type === "매칭완료" && (
                  <span className="ml-1 text-red-300">•</span>
                )}
                {profile.type === "매칭가능" && (
                  <span className="ml-1 text-green-300">•</span>
                )}
              </div>
              <div className="text-xs">{profile.count}</div>
            </div>
          </div>
        ))}
      </div>

      {/* My Matches section */}
      <div className="px-4 pb-2">
        <h3 className="font-medium mb-2">나의 매치 47</h3>
        {/* Additional profile grid could go here */}
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto border-t border-gray-200 bg-white flex justify-between">
        <button className="flex flex-col items-center justify-center py-2 flex-1">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-gray-500">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">HOME</span>
        </button>
        <button className="flex flex-col items-center justify-center py-2 flex-1">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-gray-500">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">매칭하기</span>
        </button>
        <button className="flex flex-col items-center justify-center py-2 flex-1">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-gray-500">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">이벤트</span>
        </button>
        <button className="flex flex-col items-center justify-center py-2 flex-1">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-red-500">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <span className="text-xs mt-1 text-red-500">매칭현황</span>
        </button>
        <button className="flex flex-col items-center justify-center py-2 flex-1">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-gray-500">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">내 프로필</span>
        </button>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="p-0 rounded-xl border-none max-w-sm mx-auto">
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-sm text-red-500 mb-1">매칭된 인간께 소중한 시간을 보내보세요 :)</div>
            <h3 className="text-xl font-bold mb-4">매칭승인 됐!</h3>
            <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">D</span>
            </div>
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md"
              onClick={() => setShowSuccessDialog(false)}
            >
              3초 후 팝업이 자동으로 닫혀요!
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Info Dialog */}
      <Dialog open={showInfoDialog} onOpenChange={setShowInfoDialog}>
        <DialogContent className="p-0 rounded-xl border-none max-w-sm mx-auto">
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-sm text-blue-500 mb-1">더 좋은 인연이 있겠죠 :)</div>
            <h3 className="text-xl font-bold mb-4">매칭거부</h3>
            <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">D</span>
            </div>
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md"
              onClick={() => setShowInfoDialog(false)}
            >
              3초 후 팝업이 자동으로 닫혀요!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MatchingInterface;

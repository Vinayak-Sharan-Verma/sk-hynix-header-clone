
import React, { useState } from "react";
import { ChevronLeft, Edit2, CheckCircle, PlusCircle, User, Home, MessageCircle, Image, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

const ProfileInterface = () => {
  const [profile, setProfile] = useState({
    name: "부담말고, 친하게눈인사",
    coin: 50000,
    introduction: "안녕하세요? 반갑습니다! 👋",
    mbti: "ENFP",
    location: "서울특별시 강남구",
    id: "sudjkfgsd121",
  });

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white p-4 flex items-center relative">
        <ChevronLeft className="w-6 h-6" />
        <h1 className="text-lg font-medium absolute left-1/2 transform -translate-x-1/2">내 프로필</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="text-center">
          <h2 className="font-bold text-red-500">{profile.name} <span className="text-red-500">가까워져요!</span></h2>
          <p className="text-sm text-gray-500">프로필 이미지와 대화시 기본 프로필로 등록됩니다.</p>
        </div>

        {/* Profile Image Section */}
        <div className="relative mx-auto w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
          <Avatar className="w-full h-full">
            <AvatarImage src="" />
            <AvatarFallback className="bg-gray-200">
              <User className="w-10 h-10 text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <Button size="sm" variant="destructive" className="absolute bottom-2 right-2 h-6 rounded-full p-1">
            <PlusCircle className="w-4 h-4" />
            <span className="text-xs ml-1">사진</span>
          </Button>
        </div>

        {/* Additional Photos Grid */}
        <div className="grid grid-cols-3 gap-2 mt-6">
          <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
            <PlusCircle className="w-6 h-6 text-gray-400" />
          </div>
          <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
            <PlusCircle className="w-6 h-6 text-gray-400" />
          </div>
          <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
            <PlusCircle className="w-6 h-6 text-gray-400" />
          </div>
          <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
            <Button size="sm" variant="destructive" className="h-6 rounded-full px-2 py-1">
              <PlusCircle className="w-3 h-3" />
              <span className="text-xs ml-1">사진</span>
            </Button>
          </div>
          <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
            <Button size="sm" variant="destructive" className="h-6 rounded-full px-2 py-1">
              <PlusCircle className="w-3 h-3" />
              <span className="text-xs ml-1">사진</span>
            </Button>
          </div>
          <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
            <Button size="sm" variant="destructive" className="h-6 rounded-full px-2 py-1">
              <PlusCircle className="w-3 h-3" />
              <span className="text-xs ml-1">사진</span>
            </Button>
          </div>
        </div>

        {/* Coin Information */}
        <div className="flex items-center justify-between">
          <p className="font-medium">내 코인 {profile.coin.toLocaleString()} C</p>
        </div>

        {/* Profile Fields */}
        <Card className="p-4 space-y-4">
          <div className="space-y-1">
            <label className="text-sm text-gray-500">이름</label>
            <p>{profile.name}</p>
          </div>
          
          <div className="space-y-1">
            <label className="text-sm text-gray-500">홍길동</label>
            <p>{profile.name}</p>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gray-500">연락처</label>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">연락처를 탭하여 공유할 연락처를 선택하세요.</p>
              <ChevronLeft className="w-4 h-4 transform rotate-180" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gray-500">간단 자기소개</label>
            <p>{profile.introduction}</p>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gray-500">MBTI</label>
            <div className="flex justify-between items-center">
              <p>{profile.mbti}</p>
              <ChevronLeft className="w-4 h-4 transform rotate-180" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gray-500">나의 거주지</label>
            <div className="flex justify-between items-center">
              <p>{profile.location}</p>
              <ChevronLeft className="w-4 h-4 transform rotate-180" />
            </div>
          </div>
        </Card>

        {/* Profile Actions */}
        <div className="space-y-4">
          <Button variant="outline" className="w-full border-gray-300">기타 버튼</Button>
          <Button className="w-full bg-red-500 hover:bg-red-600">프로필 편집하기</Button>
        </div>

        {/* ID Section */}
        <div className="space-y-1 mt-4">
          <label className="text-sm text-gray-500">아이디 및 번호</label>
          <p className="text-sm">{profile.id}</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-200 bg-white flex justify-between">
        <button className="flex flex-col items-center justify-center py-2 flex-1">
          <Home className="w-6 h-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">HOME</span>
        </button>
        <button className="flex flex-col items-center justify-center py-2 flex-1">
          <MessageCircle className="w-6 h-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">채팅방</span>
        </button>
        <button className="flex flex-col items-center justify-center py-2 flex-1">
          <Image className="w-6 h-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">소개</span>
        </button>
        <button className="flex flex-col items-center justify-center py-2 flex-1">
          <Menu className="w-6 h-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">매칭현황</span>
        </button>
        <button className="flex flex-col items-center justify-center py-2 flex-1">
          <User className="w-6 h-6 text-red-500" />
          <span className="text-xs mt-1 text-red-500">내 프로필</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileInterface;

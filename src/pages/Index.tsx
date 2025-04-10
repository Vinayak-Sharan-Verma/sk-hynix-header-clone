
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="pt-24 md:pt-28 flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">SK hynix 뉴스룸</h1>
            <p className="text-xl text-gray-600">헤더 및 푸터 클론 구현</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">사용 방법</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>상단의 메뉴에 마우스를 올려 드롭다운 메뉴를 확인하세요</li>
              <li>화면 크기를 줄여 모바일 메뉴를 테스트하세요</li>
              <li>언어 선택 버튼과 검색 버튼을 클릭해보세요</li>
              <li>스크롤을 내려 헤더의 변화를 확인하세요</li>
              <li>푸터 영역에서 링크와 소셜 미디어 아이콘을 확인하세요</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

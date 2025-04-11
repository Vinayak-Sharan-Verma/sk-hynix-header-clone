
import ProfileInterface from "../components/ProfileInterface";
import MatchingInterface from "../components/MatchingInterface";
import { useState } from "react";

const Index = () => {
  const [currentView, setCurrentView] = useState<"profile" | "matching">("profile");
  
  return (
    <div className="flex min-h-screen flex-col">
      {currentView === "profile" ? <ProfileInterface /> : <MatchingInterface />}
    </div>
  );
};

export default Index;

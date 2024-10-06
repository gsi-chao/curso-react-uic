import { useState } from "react";
import "./home-tabs.css";

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState("For you");

  const tabs = ["For you", "Following", "Frontendland", "Build in Public"];

  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
      <div
        className="underline"
        style={{ left: `${tabs.indexOf(activeTab) * 25}%` }}
      />
    </div>
  );
};

export default HomeTabs;

import "./relevant-info.css";

import SearchInput from "@/core/components/inputs/search/Search";
import WhatsHappening from "./WhatsHappening/WhatsHappening";

const RelevantInfo = () => {
  return (
    <div className="relevant-info">
      <SearchInput />
      <WhatsHappening />
    </div>
  );
};

export default RelevantInfo;

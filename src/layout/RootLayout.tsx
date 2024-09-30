import "./layout.css";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-header">
        <Sidebar />
      </div>

      <div className="layout-content">{children}</div>
    </div>
  );
};

export default RootLayout;

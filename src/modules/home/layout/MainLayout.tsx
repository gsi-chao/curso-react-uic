import './layout.css';

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children, sidebar }) => {
  return (
    <div className="main-layout">
      <div className="main-layout-content">{children}</div>
      <div className="main-layout-sidebar">{sidebar}</div>
    </div>
  );
};

export default MainLayout;

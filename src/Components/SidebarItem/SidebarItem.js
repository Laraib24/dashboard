import "./styles.css";
const SidebarItem = (props) => {
  return (
    <>
      <div className="sidebar-item">
        {" "}
        <div className="sidebar-icon">{props.icon}</div>
        <div className="menu-item">{props.heading}</div>
      </div>
    </>
  );
};
export default SidebarItem;

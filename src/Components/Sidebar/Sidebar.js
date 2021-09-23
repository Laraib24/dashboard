import "./styles.css";
import SidebarItem from "../SidebarItem/SidebarItem";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import DnsOutlinedIcon from "@material-ui/icons/DnsOutlined";
import ViewQuiltOutlinedIcon from "@material-ui/icons/ViewQuiltOutlined";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";

const Sidebar = (props) => {
  return (
    <>
      <div className="sidebar">
        <h3 className="title">Dashboard</h3>
        <SidebarItem icon={<HomeOutlinedIcon />} heading={"Home"}></SidebarItem>
        <SidebarItem
          icon={<PeopleOutlineIcon />}
          heading={"Employees"}
        ></SidebarItem>
        <SidebarItem
          icon={<DnsOutlinedIcon />}
          heading={"Categories"}
        ></SidebarItem>
        <SidebarItem
          icon={<ViewQuiltOutlinedIcon />}
          heading={"Lisences"}
        ></SidebarItem>
        <SidebarItem
          icon={<GamesOutlinedIcon />}
          heading={"Collapse menu"}
        ></SidebarItem>
        <SidebarItem
          icon={<QuestionAnswerOutlinedIcon />}
          heading={"Dispute center"}
        ></SidebarItem>
      </div>
    </>
  );
};
export default Sidebar;

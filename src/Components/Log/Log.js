import "./styles.css";
import LogCard from "../LogCard/LogCard";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import MeetingRoomOutlinedIcon from "@material-ui/icons/MeetingRoomOutlined";
const Log = (props) => {
  return (
    <>
      <div className="log">
        <div className="log-head">
          <MeetingRoomOutlinedIcon style={{ color: "blue" }} />
          <h3 className="log-heading">Log</h3>
        </div>

        <LogCard
          icon={<AssignmentOutlinedIcon />}
          time={"3hr"}
          name={"paula"}
          task={"finished Task"}
          title={"Task finished"}
          link={"Submit Expense Report"}
        ></LogCard>
        <LogCard
          icon={<ChatBubbleOutlineOutlinedIcon />}
          time={"3hr"}
          name={"George"}
          task={"Comment on Task"}
          title={"New comment"}
          link={"Submit Expense Report"}
        ></LogCard>
        <LogCard
          icon={<AssignmentOutlinedIcon />}
          time={"3hr"}
          name={"paula"}
          task={"finished Task"}
          title={"Task finished"}
          link={"Submit Expense Report"}
        ></LogCard>
        <LogCard
          icon={<ChatBubbleOutlineOutlinedIcon />}
          time={"3hr"}
          name={"George"}
          task={"Comment on Task"}
          title={"New comment"}
          link={"Submit Expense Report"}
        ></LogCard>
      </div>
    </>
  );
};
export default Log;

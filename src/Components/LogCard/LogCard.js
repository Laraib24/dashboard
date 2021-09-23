import "./styles.css";
import { Col } from "react-bootstrap";
const LogCard = (props) => {
  return (
    <>
      <div className="log-container">
        <Col>
          <div className="log-headings">
            <div className="log-icon">{props.icon}</div>
            <div className="log-title">{props.title}</div>
            <div className="log-time">{props.time}</div>
          </div>
          <div className="log-content">
            <div className="log-name">{props.name}</div>
            <div className="log-task">{props.task}</div>
          </div>
          <div className="log-link">{props.link}</div>
        </Col>
      </div>
    </>
  );
};
export default LogCard;

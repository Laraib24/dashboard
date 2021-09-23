import HearingOutlinedIcon from "@material-ui/icons/HearingOutlined";
import "./styles.css";
import { Row, Col } from "react-bootstrap";
const Announcements = () => {
  return (
    <>
      <div>
        <div className="latest">
          <h3 className="latest-heading">Latest Announcements</h3>
        </div>
        <Row style={{ marginLeft: "-60px" }}>
          <>
            <input className="ann-input" placeholder="New Jobs Coming" />
          </>
          <>
            <input
              className="ann-input"
              placeholder="Your SIA lisence expired in 2 days, Makesure to update it"
            />
          </>
        </Row>
        <Row style={{ marginLeft: "-60px" }}>
          <>
            <input className="ann-input" placeholder="Jobs Closed" />
          </>
          <>
            <input className="ann-input" placeholder="on vacation" />
          </>
        </Row>
      </div>
    </>
  );
};
export default Announcements;

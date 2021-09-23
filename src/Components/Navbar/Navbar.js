import "./styles.css";
import { Row, Col } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ForumIcon from "@material-ui/icons/Forum";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div>
          <img
            className="logo"
            src="http://wesentinel.com/images/logo.png"
            alt="Logo"
          />
        </div>
        <Col className="search">
          <MenuIcon />

          <div className="search-bar">
            <SearchIcon
              style={{ fontSize: 20, marginLeft: 20, marginTop: 7 }}
            />
            <input
              className="input"
              placeholder="Security Security Companies"
            />
          </div>
        </Col>
        <div className="right-menu">
          <Button
            style={{ height: 30, width: 120 }}
            variant="contained"
            color="primary"
          >
            Jobs
          </Button>
          <NotificationsIcon
            style={{ fontSize: 20, padding: "0 5px", margin: "10px 10px" }}
          />
          <ForumIcon
            style={{ fontSize: 20, padding: "0 5px", marginTop: 10 }}
          />
          <img
            className="profile"
            src="https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png"
            alt="Logo"
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;

import "./styles.css";
import { Row, Col } from "react-bootstrap";
const AccountingCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-img">{props.img}</div>
        <Col>
          <h3 className="number">{props.number}</h3>
          <h3 className="card-text">{props.text}</h3>
        </Col>
      </div>
    </>
  );
};
export default AccountingCard;

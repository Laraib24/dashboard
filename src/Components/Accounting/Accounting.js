import "./styles.css";
import AccountingCard from "../AccountingCard/AccountingCard";
import MoneyIcon from "@material-ui/icons/Money";
import { Row, Col } from "react-bootstrap";
const Accounting = () => {
  return (
    <Row>
      <h3 className="accounting">Accounting</h3>

      <div className="acc" style={{ display: "flex" }}>
        <AccountingCard
          img={<MoneyIcon />}
          number={"$70542.00"}
          text={"Income"}
        />
        <AccountingCard
          img={<MoneyIcon />}
          number={"$400310.00"}
          text={"Expense"}
        />{" "}
        <AccountingCard
          img={<MoneyIcon />}
          number={"$300786.0"}
          text={"Reserve"}
        />
      </div>
    </Row>
  );
};
export default Accounting;

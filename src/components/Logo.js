import Card from "./Card";
import "./Logo.css";
import etilogo from "../media/ETI_Logo.png";

function Logo() {
  return (
    <Card>
      <div>
        <img src={etilogo} alt="ETI Logo" width="200" height="100" />
        <h1>Environmental Technologies, Inc.</h1>
      </div>
    </Card>
  );
}

export default Logo;

import { useState } from "react";
import "./App.css";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  const handleNameChange = (e) => {
    setCardholderName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleMonthChange = (e) => {
    setExpMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setExpYear(e.target.value);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
  };

  return (
    <div className="wrapper">
      <div className="cards-section">
        <div className="card-front">
          <h3>{cardNumber || "0000 0000 0000 0000"}</h3>
          <div className="card-info">
            <span>{cardholderName || "JANE APPLESEED"}</span>
            <span>
              {expMonth || "00"}/{expYear || "00"}
            </span>
          </div>
        </div>
        <div className="card-back">
          <span>{cvc || "000"}</span>
        </div>
      </div>
      <div className="form-section">
        <div>
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            className="input"
            placeholder="e.g. Jane Appleseed"
            value={cardholderName}
            onChange={handleNameChange}
            maxLength={40}
          />
        </div>
        <div>
          <label>CARD NUMBER</label>
          <input
            type="text"
            className="input"
            placeholder="e.g. 0000 0000 0000 0000"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength={12}
          />
        </div>
        <div className="form-footer">
          <div>
            <label>EXP-DATE (MM/YY)</label>
            <div className="exp-date">
              <input
                type="text"
                className="input"
                placeholder="MM"
                value={expMonth}
                onChange={handleMonthChange}
                maxLength={2}
              />
              <input
                type="text"
                className="input"
                placeholder="YY"
                value={expYear}
                onChange={handleYearChange}
                maxLength={2}
              />
            </div>
          </div>
          <div>
            <label>CVC</label>
            <input
              type="text"
              className="input"
              placeholder="e.g. 000"
              value={cvc}
              onChange={handleCvcChange}
              maxLength={3}
            />
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </div>
  );
}

export default App;

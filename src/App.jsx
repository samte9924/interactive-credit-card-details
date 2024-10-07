import { useState } from "react";
import "./App.css";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;

    const formattedValue = value.replace(/[^a-zA-Z\s]/g, ""); // only chars and spaces
    setCardholderName(formattedValue);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;

    let numericValue = value.replace(/[^0-9]/g, ""); // only numbers
    if (numericValue.length > 16) return;

    if (numericValue.length > 12) {
      numericValue =
        numericValue.slice(0, 4) +
        " " +
        numericValue.slice(4, 8) +
        " " +
        numericValue.slice(8, 12) +
        " " +
        numericValue.slice(12);
    } else if (numericValue.length > 8) {
      numericValue =
        numericValue.slice(0, 4) +
        " " +
        numericValue.slice(4, 8) +
        " " +
        numericValue.slice(8);
    } else if (numericValue.length > 4) {
      numericValue = numericValue.slice(0, 4) + " " + numericValue.slice(4);
    }

    setCardNumber(numericValue);
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;

    let formattedValue = value.replace(/[^0-9]/g, ""); // only numbers
    setExpMonth(formattedValue);
  };

  const handleYearChange = (e) => {
    const value = e.target.value;

    const formattedValue = value.replace(/[^0-9]/g, ""); // only numbers
    setExpYear(formattedValue);
  };

  const handleCvcChange = (e) => {
    const value = e.target.value;

    const formattedValue = value.replace(/[^0-9]/g, ""); // only numbers
    setCvc(formattedValue);
  };

  const handleSubmit = () => {
    setSuccess(true);
  };

  return (
    <>
      <div className="cards-section">
        <div className="card-front">
          <h3>{cardNumber || "0000 0000 0000 0000"}</h3>
          <div className="card-info">
            <span>{cardholderName || "JANE APPLESEED"}</span>
            <span>
              {(expMonth && Number(expMonth) < 10
                ? "0" + expMonth
                : expMonth) || "00"}
              /
              {(expYear && Number(expYear) < 10 ? "0" + expYear : expYear) ||
                "00"}
            </span>
          </div>
        </div>
        <div className="card-back">
          <span>{cvc || "000"}</span>
        </div>
      </div>
      <div className="box">
        {success ? (
          <div className="success-section">
            <img src="/icon-complete.svg" alt="icon-complete" />
            <h2>THANK YOU</h2>
            <p>We&apos;ve added your credit card details.</p>
            <button onClick={() => setSuccess((prevSuccess) => !prevSuccess)}>
              Continue
            </button>
          </div>
        ) : (
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
                spellCheck={false}
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
            <button onClick={handleSubmit}>Confirm</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

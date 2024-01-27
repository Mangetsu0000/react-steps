import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  //useState calls are ony allowed at the top level of the component (not allowed in a if else block or another fucntion or a loop)
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(true);

  const handleShow = () => {
    //when we want to update the state based on the current state value, use cb function
    setShow((_cShow) => !_cShow);
  };
  const handlePrevious = () => {
    // can't do stuff like step++ because step is const do math operations on instead
    if (step > 1) setStep((_cStep) => _cStep - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((_cStep) => _cStep + 1);
  };
  if (show === false)
    return (
      <>
        <p>we're closed</p>
        <button
          className="close"
          onClick={() => {
            setShow((_cShow) => !_cShow);
          }}
        >
          X
        </button>
      </>
    );
  return (
    <>
      <button className="close" onClick={handleShow}>
        &times;
      </button>
      {show && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 && "active"}>1</div>
            <div className={step === 2 && "active"}>2</div>
            <div className={step === 3 && "active"}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              //this is not a function call, but a fnction so this doesn't work (the function gets fired right away)
              // onClick={alert("previous button has been clicked")}
              //we pass the function value {handlePrevious}, we DO NOT call the function {handlePrevious()}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

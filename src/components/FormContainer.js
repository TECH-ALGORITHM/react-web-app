import React, { useState } from "react";
import SenderForm from "./SenderForm";
import ReceiverForm from "./ReceiverForm";
import ShipmentForm from "./ShipmentForm";

function FormContainer() {
  const [currentForm, setCurrentForm] = useState("sender");

  const handleNext = () => {
    switch (currentForm) {
      case "sender":
        setCurrentForm("receiver");
        break;
      case "receiver":
        setCurrentForm("shipment");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {currentForm === "sender" && <SenderForm onNext={handleNext} />}
      {currentForm === "receiver" && <ReceiverForm onNext={handleNext} />}
      {currentForm === "shipment" && <ShipmentForm />}
    </div>
  );
}

export default FormContainer;

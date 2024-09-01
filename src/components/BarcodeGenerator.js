import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import "./BarcodeGenerator.css";

function BarcodeGenerator() {
  const barcodeRef = useRef(null);
  const location = useLocation();

  const { sender, receiver, shipment, trackId } = location.state || {};

  useEffect(() => {
    if (trackId && barcodeRef.current) {
      // Shorten the encoded data
      const barcodeData = `S:${sender},R:${receiver},Sh:${shipment},T:${trackId}`;

      JsBarcode(barcodeRef.current, barcodeData, {
        format: "CODE128",
        displayValue: true,
        fontSize: 18,
        width: 2, // Adjust width for compactness
        height: 50, // Adjust height for compactness
        margin: 0,
      });
    }
  }, [sender, receiver, shipment, trackId]);

  const handleDownloadPNG = async () => {
    const canvas = await html2canvas(
      document.querySelector(".barcode-container")
    );
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${trackId}-barcode.png`;
    link.click();
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    html2canvas(document.querySelector(".barcode-container")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save(`${trackId}-barcode.pdf`);
    });
  };

  if (!trackId) {
    return (
      <div className="error">
        Track ID is missing. Please submit the form first.
      </div>
    );
  }

  return (
    <div className="barcode-container">
      <h3>Shipment Barcode</h3>
      <div className="details">
        <p>
          <strong>Sender:</strong> {sender}
        </p>
        <p>
          <strong>Receiver:</strong> {receiver}
        </p>
        <p>
          <strong>Shipment:</strong> {shipment}
        </p>
        <p>
          <strong>Track ID:</strong> {trackId}
        </p>
      </div>
      <svg ref={barcodeRef}></svg>
      <div className="buttons">
        <button onClick={handleDownloadPNG}>Download as PNG</button>
        <button onClick={handleDownloadPDF}>Download as PDF</button>
      </div>
    </div>
  );
}

export default BarcodeGenerator;

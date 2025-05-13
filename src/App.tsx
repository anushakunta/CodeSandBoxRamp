import { useEffect, useState } from "react";
import "./styles.css";
import GetFlag from "./components/getflag.component";

export default function App() {
  return (
    <div className="App">
      <GetFlag />
    </div>
  );
}

// code to decode the text

// function decodeBase64(encoded) {
//   return Buffer.from(encoded, 'base64').toString('utf-8');
// }

// const encodedText = "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==";
// const decodedText = decodeBase64(encodedText);
// console.log(decodedText);

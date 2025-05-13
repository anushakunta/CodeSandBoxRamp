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
// Step two URL
// const axios = require('axios');
// const cheerio = require('cheerio');


// async function readUrl(urlLink){
//  let hiddenUrl = []
//  if(urlLink.length === 0){
//    return null;
//  }
//  try{
//    const response = await axios.get(urlLink);
//    const html = response.data;
//    const $ = cheerio.load(html);

//    $('b').each((_i,el)=>{
//       const classTag = $(el).attr('class');
//       if(!classTag.includes('ref0') && classTag.includes('ref')){
//         const htmlTag = $(el).attr('value');
//         if(htmlTag){
//           hiddenUrl.push(htmlTag);
//         }
//       }
//    })
//    let newUrl = hiddenUrl.join("");
//    console.log(newUrl)
//    return newUrl;
//  }catch(error){
//    console.log(`Error crawling ${urlLink}:`,error);
//  }
// }
// module.exports = {
//     readUrl : readUrl
// }

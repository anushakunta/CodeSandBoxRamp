import { useEffect, useState } from "react";
import TypeWriterEffect from "./typewritereffect.component";

const GetFlag = () => {
  const [word, setWord] = useState();
  const flag = "";

  useEffect(() => {
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/72656a"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        console.log("Response text:", text);
        setWord(text);
        // Process the text data
      });
  });

  return <TypeWriterEffect word={word} />;
};

export default GetFlag;

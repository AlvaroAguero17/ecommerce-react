import { Message, OffersContainer } from "../../styles/theme/offers";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Slide } from "@mui/material";

const messages = [
  "For purchases over $20, free shipping",
  "Summer sale is active now",
];

export default function Offers() {
  const [messageIndex, setMessageIndex] = useState(0);

  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <OffersContainer>
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 300,
          exit: 100,
        }}
      >
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Message>{messages[messageIndex]}</Message>
        </Box>
      </Slide>
    </OffersContainer>
  );
}

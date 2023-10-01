import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Quotes from "./Quotes";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }} className="pb-3">
            Hi, I am <span className="purple">Jaiprakash </span>
            from <span className="purple"> Raipur, Chhatisghar, India.</span>
            <br />I completed my <span className="purple">Masters in Computer Application </span>from RITEE, Raipur.
            <br />
            <br />My interest in Blockchain technology has drive me to secure verified certificates from renowned organizations, enhancing my understanding and enabling me to explore practical, scalable use cases.
            <br />I'm passionate about discussing topics like Blockchain, NFTs, IoT, web development, and the fascinating ways Web3 integrates them. 
            <br /> 
            <br />My ultimate aspiration is to work in Japan, a dream destination that I would eagerly seize any opportunity to pursue.
          </p>          
          <h4 className="purple text-center">Quote -
            <p style={{ color: "rgb(155 126 172)" }} className="text-center h5">
              {/* "Fight for your dreams, People's dreams have no end"{" "} */}
              <Quotes/>
            </p>
            <p className="text-end h6" style={{ color: "rgb(155 126 172)" }}>- Marshall D. Teach</p>
          </h4>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

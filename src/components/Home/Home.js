import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

import desk from "../../Assets/desk.svg"
import test from "../../Assets/test.svg"
import test1 from "../../Assets/test1.svg"
import test2 from "../../Assets/test2.svg"
import bitcoinLogo from "../../Assets/bitcoin-svg.svg"
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello Forks!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> T Jaiprakash</strong>
                <h4>
                  <Type />
                </h4>
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                // src={homeLogo}
                // src={desk}
                // src={test}
                // src={test1}
                src={test2}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWeb3Dotjs,
} from "react-icons/si";

import {
  DiReact,
} from "react-icons/di";

function Libraries() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeb3Dotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
    </Row>
  );
}

export default Libraries;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import crowdfunding from "../../Assets/Projects/crowdfunding.jpg";
import marketplace from "../../Assets/Projects/nft-marketplace.jpg";
import yogapose from "../../Assets/Projects/yogapose.jpg";
import survay from "../../Assets/Projects/survay.jpg";
import adtech from "../../Assets/Projects/ad-tech.jpg";
import pig from "../../Assets/Projects/pig-game.png";
import contracts from "../../Assets/Projects/contracts.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={crowdfunding}
              isBlog={false}
              title="Blockchain based Crowdfunding Web application"
              description="The Crowdfunding platform in block-chain makes different possibilities for the startups by raising the funds to create their own digital currency and it is peer-to-peer fund raising model some of the famous crowdfunding cryptocurrencies are coinspace, swarm, judobaby etc. Crowdfunding has offers for creators and other consumers."
              ghLink="https://github.com/TJAKON/CrowdFunding-Application"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={adtech}
              isBlog={false}
              title="Blockchain based AD-Tech"
              description="Our ad-tech solution employs blockchain for secure and transparent 3D billboard video analytics. This ensures data integrity and accountability while fostering trust in the advertising ecosystem. Advertisers benefit from reliable insights for optimizing their campaigns"
              //ghLink="https://github.com/amanbora856/ERC20"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={marketplace}
              isBlog={false}
              title="NFT MarketPlace"
              description="I've developed a blockchain-based NFT marketplace that offers four distinct minting options: images, videos, documents, and GIFs. This versatile platform empowers creators to tokenize a wide range of digital content, enhancing their ability to monetize unique creations in the NFT space. It opens up exciting opportunities for artists and content creators across various mediums."
              //ghLink="https://github.com/amanbora856/ERC20"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={contracts}
              isBlog={false}
              title="Mock Smart Contracts"
              description="I've created innovative mock smart contracts that address multiple real-life human challenges. These contracts leverage blockchain technology to automate and streamline processes, tackling issues like trust in transactions, identity verification, and contract enforcement. By providing efficient solutions, they have the potential to revolutionize how we handle everyday tasks and interactions."
              ghLink="https://github.com/TJAKON/SmartContracts"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={survay}
              isBlog={false}
              title="Impressario (IM-KARMA)"
              description="I've spearheaded the development of Impresario IM-Karma, a client-centric survey project. Leveraging HTML, CSS, Bootstrap, and React.js, we've crafted an interactive and visually appealing platform for conducting surveys, empowering businesses to gather valuable insights and enhance their decision-making processes. It's a seamless blend of modern web technologies to drive data-driven success for our clients."
              ghLink="https://impresario-global.com/imkarma/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={pig}
              isBlog={false}
              title="A Pig Game"
              description="I've developed an engaging pig-themed game using JavaScript, HTML, and CSS. Players can enjoy a fun and interactive gaming experience as they roll the dice and strategize to accumulate points, all while avoiding the infamous pig out. It's a delightful blend of coding and entertainment for enthusiasts of all ages."
              //ghLink="https://github.com/amanbora856/ERC20"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={yogapose}
              isBlog={false}
              title="Yoga Pose Recognisation"
              description="I've developed a Yoga Pose Recognition system using Python, GCP platform, Jupyter notebook, and Vertex AI. This innovative solution utilizes machine learning to accurately identify and analyze yoga poses, assisting practitioners in improving their form and alignment. It's a fusion of cutting-edge technology and fitness, enhancing the yoga experience."
              //ghLink="https://github.com/amanbora856/ERC20"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

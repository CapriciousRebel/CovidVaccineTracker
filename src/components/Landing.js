import { Container, Col, Row, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { openInNewTab } from "../utils/utils";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { Menu } from "./Menu";
import { Input } from "./Input";
import { Centers } from "./Centers";
import { Footer } from "./Footer";

const Landing = () => {
  const [fetchedCenters, setFetchedCenters] = useState([]);
  const [availableSessions, setAvailableSessions] = useState([]);
  const [submitOnce, setSubmitOnce] = useState(false);
  const [filterType, setFilterType] = useState({
    Covishield: true,
    Covaxin: true,
    Free: true,
    Paid: true,
    "18+": true,
    "45+": true,
  });

  useEffect(() => {
    console.log("fetchedCenters: ", fetchedCenters);
  }, [fetchedCenters]);

  useEffect(() => {
    console.log("availableSessions: ", availableSessions);
  }, [availableSessions]);

  return (
    <Container fluid>
      <Menu filterType={filterType} setFilterType={setFilterType} />
      <Input
        fetchedCenters={fetchedCenters}
        setFetchedCenters={setFetchedCenters}
        submitOnce={submitOnce}
        setSubmitOnce={setSubmitOnce}
      />
      {submitOnce ? (
        <Centers
          fetchedCenters={fetchedCenters}
          filterType={filterType}
          availableSessions={availableSessions}
          setAvailableSessions={setAvailableSessions}
        />
      ) : null}
      <Footer>
        <Row>
          <Col className="d-flex justify-content-center">
            Made with ❤️ by <pre> </pre>
            <span
              onClick={() => {
                openInNewTab("https://github.com/CapriciousRebel");
              }}
              className="mr-5"
            >
              CapriciousRebel
            </span>
          </Col>
        </Row>
      </Footer>
    </Container>
  );
};

export default Landing;

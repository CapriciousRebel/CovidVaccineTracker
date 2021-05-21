import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { FilterMenu } from "./FilterMenu";
import { Input } from "./Input";
import { Centers } from "./Centers";
import { Footer } from "./Footer";

const Landing = () => {
  const [availableSessions, setAvailableSessions] = useState([]); // list of all available sessions
  const [submitOnce, setSubmitOnce] = useState(false); // is the submit button clicked once?
  const [filterType, setFilterType] = useState({
    Covishield: true,
    Covaxin: true,
    Free: true,
    Paid: true,
    "18+": true,
    "45+": true,
  }); // Filters

  return (
    <Container fluid>
      <FilterMenu filterType={filterType} setFilterType={setFilterType} />
      <Input
        availableSessions={availableSessions}
        setAvailableSessions={setAvailableSessions}
        filterType={filterType}
        submitOnce={submitOnce}
        setSubmitOnce={setSubmitOnce}
      />
      {submitOnce ? (
        <Centers
          filterType={filterType}
          availableSessions={availableSessions}
          setAvailableSessions={setAvailableSessions}
        />
      ) : null}
      <Footer />
    </Container>
  );
};

export default Landing;

import { Container, Col, Row, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Filters } from "./Filters.js";

export const Menu = () => {
  const [showFilters, setShowFilters] = useState(false);

  const [type, setType] = useState({
    Covishield: false,
    Covaxin: false,
    Free: false,
    Paid: false,
    "18+": false,
    "45+": false,
  });

  const switchMenu = () => {
    setShowFilters(!showFilters);
  };
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center border-bottom"
        onClick={switchMenu}
      >
        <h5 className="m-0">Filters</h5>
        {showFilters ? (
          <ExpandLessIcon fontSize="large" />
        ) : (
          <ExpandMoreIcon fontSize="large" />
        )}
      </Container>
      {showFilters ? <Filters type={type} setType={setType} /> : null}
    </>
  );
};

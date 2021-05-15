import { Container, Col, Row, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Filters } from "./Filters.js";

export const Menu = (props) => {
  const [showFilters, setShowFilters] = useState(false);
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
      {showFilters ? (
        <Filters type={props.filterType} setType={props.setFilterType} />
      ) : null}
    </>
  );
};

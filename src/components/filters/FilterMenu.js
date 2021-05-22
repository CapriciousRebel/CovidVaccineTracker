import { Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { TypeFilter } from "./TypeFilter.js";

export const FilterMenu = (props) => {
  const [showFilters, setShowFilters] = useState(false); // show filters list?

  /**
   * Switches between showing and hiding the filter list
   */
  const switchMenu = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <Container
        className={
          showFilters
            ? "d-flex align-items-center justify-content-center"
            : "d-flex align-items-center justify-content-center border-bottom"
        }
        onClick={switchMenu}
      >
        <h5 className="m-0"> Filters </h5>{" "}
        {showFilters ? (
          <ExpandLessIcon fontSize="large" />
        ) : (
          <ExpandMoreIcon fontSize="large" />
        )}{" "}
      </Container>{" "}
      {showFilters ? (
        <Container fluid>
          <Row className="border-bottom border-top mx-3">
            {" "}
            {Object.keys(props.filterType).map((filter, index) => (
              <TypeFilter
                key={index}
                filterType={props.filterType}
                setFilterType={props.setFilterType}
                name={filter}
              />
            ))}{" "}
          </Row>{" "}
        </Container>
      ) : null}{" "}
    </>
  );
};

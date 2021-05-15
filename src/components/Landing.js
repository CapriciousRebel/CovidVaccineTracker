import { Container, Col, Row, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { delay } from "../utils/utils.js";
import Switch from "@material-ui/core/Switch";

import { Menu } from "./Menu.js";
import { Input } from "./Input";

const Landing = () => {
  return (
    <Container fluid>
      <Menu />
      <Input />
    </Container>
  );
};

export default Landing;

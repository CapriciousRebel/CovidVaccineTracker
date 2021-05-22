import { Col } from "react-bootstrap";
import Switch from "@material-ui/core/Switch";

export const TypeFilter = (props) => {
  const handleSwitch = (e) => {
    let newtype = { ...props.filterType };
    newtype[e.target.name] = e.target.checked;
    props.setFilterType(newtype);
  };
  return (
    <Col className="w-10rem p-3 m-0 d-flex flex-column align-items-center ">
      <Switch
        checked={props.filterType[props.name]}
        onChange={handleSwitch}
        name={props.name}
        color="primary"
        size="medium"
      />
      <p className="w-10rem p-0 m-0 text-center font-weight-bold">
        {props.name}
      </p>
    </Col>
  );
};

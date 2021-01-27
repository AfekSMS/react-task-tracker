import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

// ****instead of using props  and prop.TheNameOfTheProperty you can destructure with curly braces like shown
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd === true ? "red" : "green"}
          text={showAdd === true ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

/*This is how you can make your code more robust 
and you can define the type of your propertie 
and if they are required or not */
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS (inline) - In order to use headingStyle you write "style={headingStyle}" as an inline attrubute in the html element you want to have this style. <h1 style={headingStyle}></h1>
/*
const headingStyle = {
    color: 'red',
    bacgroundColor: 'blue',
} 
*/

export default Header;

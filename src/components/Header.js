import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({title = 'To-do List'}) => {
  

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add"  />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

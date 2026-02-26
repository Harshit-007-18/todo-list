import PropTypes from 'prop-types'
const Button = ({ text = 'Click Me' }) => {
  const onclick = () => {
    console.log("Click from Add Button");
  };
  return <button onClick={onclick} className='btn'>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button
const Button = ({ classStyles, btnName, handleClick }) => (
  <button
    type="button"
    className={`text-white ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;

const Button = ({ classStyles, btnName, handleClick }) => (
  <button
    type="button"
    className={`h-12 rounded-md  px-6 py-2 text-sm font-semibold text-white ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;

const Button = ({ textContent, onClick }) => {
  return (
    <button
      className="cursor-pointer rounded-xs bg-gray-500 px-3 py-1 font-medium text-white"
      onClick={onClick}
    >
      {textContent}
    </button>
  );
};

export default Button;

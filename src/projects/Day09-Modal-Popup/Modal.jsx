const Modal = ({ header, body, footer, onClose }) => {
  return (
    <div className="transition-all duration-1000 fixed inset-0 z-50 flex items-center justify-center bg-gray-200 ">
      <div className="relative flex w-full max-w-md flex-col rounded-lg bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center  justify-between border-b px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800">
            {header ? header : "Modal Header"}
          </h2>
          <button
            onClick={onClose}
            className="text-3xl cursor-pointer font-bold  hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4">
          <p className="text-gray-700">
            {body ? body : "Modal body content goes here."}
          </p>
        </div>

        {/* Footer */}
        <div className="border-t px-6 py-4">
          <p className="text-sm text-gray-600">
            {footer ? footer : "Modal footer"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Modal;

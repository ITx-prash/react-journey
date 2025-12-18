import { useState } from "react";
import Modal from "./Modal";

const ModalPopup = () => {
  const [showModalPopup, setshowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setshowModalPopup((curr) => !curr);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <button
        onClick={handleToggleModalPopup}
        className="cursor-pointer rounded-lg bg-white px-6 py-3 text-lg font-medium hover:bg-gray-200"
      >
        Open Modal Popup
      </button>
      {showModalPopup && (
        <Modal
          header="Header!"
          body="This is body section!"
          footer="I am footer!"
          onClose={handleToggleModalPopup}
        />
      )}
    </div>
  );
};
export default ModalPopup;

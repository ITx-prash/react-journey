import { useState } from "react";
import QRCode from "react-qr-code";

const QR = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleQrCode = () => {
    setQrCode(input);
    setInput("");
  };

  const removeQrCode = () => {
    setQrCode("");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-around gap-5 rounded-xl bg-white p-5 shadow-md">
        <div className="flex items-start">
          <h1 className="text-xl font-bold text-gray-800">
            QR Code Generator:
          </h1>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <label htmlFor="input-text">
            <input
              type="text"
              id="input-text"
              name="qr-code"
              value={input}
              placeholder="Enter your value here"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="rounded-lg border-2 border-gray-500 px-3 py-2 focus:border-cyan-500 focus:outline-sky-500"
            />
          </label>
          <button
            className={`cursor-pointer rounded-lg bg-gray-300 py-2 font-semibold hover:bg-gray-400 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500`}
            onClick={handleQrCode}
            disabled={input.trim() === ""}
          >
            Create
          </button>
        </div>
        {qrCode.trim() !== "" && (
          <div className="relative rounded-lg bg-gray-100 px-6 py-2">
            <QRCode
              id="qr-value"
              value={qrCode}
              size={350}
              bgColor="#fff"
              className="mt-4 duration-900 ease-in-out"
            />
            <button
              className="absolute -top-2 -right-2 flex size-7 items-center justify-center rounded-full bg-red-500 text-white shadow-sm transition-colors hover:bg-red-600"
              onClick={removeQrCode}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QR;

import { useState } from "react";
import Button from "../../components/Button";

const RandomColor = () => {
  const [activeColor, setActiveColor] = useState("RGB");
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [hex, setHex] = useState("000000");
  const randomColorGenerator = () => {
    //RGB Implementation
    if (activeColor === "RGB") {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setRed(r);
      setGreen(g);
      setBlue(b);
      return;
    }

    //Hex Implementation
    const totalCombination = Math.floor(Math.random() * 256 * 256 * 256 + 1);
    let hexNum = totalCombination.toString(16);

    // can use padStart inbuilt method
    hexNum = hexNum.padStart(6, "0");
    setHex(hexNum);
  };
  return (
    <>
      <div
        className="flex h-screen w-full flex-col items-center pt-4"
        style={{
          backgroundColor:
            activeColor === "RGB"
              ? `rgb(${red}, ${green}, ${blue})`
              : `#${hex}`,
        }}
      >
        <div className="flex h-fit gap-3">
          <Button
            textContent="Create HEX Color"
            onClick={() => setActiveColor("HEX")}
          />
          <Button
            textContent="Create RGB Color"
            onClick={() => setActiveColor("RGB")}
          />
          <Button
            textContent="Generate Random Color"
            onClick={() => randomColorGenerator()}
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-around text-5xl font-extrabold text-white">
          <p>{`${activeColor} Color`}</p>
          {activeColor === "RGB" ? (
            <p>{`rgb(${red},${green},${blue})`}</p>
          ) : (
            <p>{`#${hex}`}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RandomColor;

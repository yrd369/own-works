import { useState } from "react";

function App() {
  const [color, setColor] = useState("#fff");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div className="bg-gray-300 mx-auto max-w-xl rounded p-5 mt-10 text-center space-y-3">
        <h1 className="font-semibold text-3xl text-center">Color Picker</h1>
        <p>Selected Color: {color}</p>
        <div>
          <label className="block">Pick your color</label>
          <input
            type="color"
            className="cursor-pointer"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;

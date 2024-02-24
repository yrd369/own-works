import { useState } from "react";

function App() {
  const [bike, Setbike] = useState({
    name: "Royal Enfield",
    model: "classic 350",
  });
  const handleName = (e) => {
   Setbike(b=>({...b,name: e.target.value}))
  };
  const handleModel = (e) => {
    Setbike((b) => ({...b,model: e.target.value }));
  };
  return (
    <div
      className="text-center space-y-5 mt-10 bg-black text-white max-w-xl rounded p-5 mx-auto
    "
    >
      <p>
        Your bike is {bike.name}
      </p>
      <p>
      {bike.model}
      </p>
      <div>
        <label className="block mb-2">Bike name</label>
        <input
          className="bg-gray-200 rounded text-black px-4 py-1 outline-none"
          onChange={handleName}
        />
      </div>
      <div>
        <label className="block mb-2">Bike model</label>
        <input
          className="bg-gray-200 rounded text-black px-4 py-1 outline-none"
          onChange={handleModel}
        />
      </div>
    </div>
  );
}

export default App;

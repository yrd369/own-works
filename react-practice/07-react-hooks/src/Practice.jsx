import { useEffect, useState } from "react";

const Practice = () => {
    useEffect(()=>{
        document.getElementById("id").textContent = name
    })

// useEffect(function,) - function have to execute while every render
// useEffect(function,[]) - function have to execute on time render
// useEffect(function,[name]) - function have to execute on time render



  const [name, setName] = useState();
  const handle = (e) => {
    e.preventDefault();
    console.log(e);
    setName(e.target[0].value);
  };
  return (
    <>
      <div className="text-center mt-5">
        <p>{name}</p>
        <form onSubmit={handle}>
          <input className="px-4 py-1 bg-gray-200 rounded" />
          <button>Click</button>
        </form>
      </div>
    </>
  );
};
export default Practice;

import Stocks from "./Stocks";
function App() {
  const interns = [
    {
      id: 1,
      name: "Yogha Raj Dhayal",
      img: "https://avatars.githubusercontent.com/u/136661914?v=4",
    },
    {
      id: 2,
      name: "Shajid",
      img: "https://avatars.githubusercontent.com/u/70450142?v=4",
    },
    {
      id: 3,
      name: "Akalya",
      img: "https://avatars.githubusercontent.com/u/144777411?s=100&v=4",
    },
    {
      id: 4,
      name: "Abi",
      img: "https://avatars.githubusercontent.com/u/144673816?s=100&v=4",
    },
  ];
  return <Stocks internsName={interns} />;
}

export default App;

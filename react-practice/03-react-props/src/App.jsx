import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <Card name="akalya" text="vanakam" isAlive={true} />
      <Card name="yrd" text="hello" isAlive={false} />
    </>
  );
}

export default App;

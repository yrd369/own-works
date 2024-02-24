import { useForm } from "react-hook-form";
import FormInput from "./components/FormInput";
import { db } from "./components/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
function App() {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState([]);
  const [data, setData] = useState([]);

  const sendData = async (data) => {
    const doc = await addDoc(collection(db, "userData"), data);
    alert("form submitted");
  };

  // reading datas from database
  useEffect(() => {
    async function info() {
      const data = await getDocs(collection(db, "userData"));
      setValue(data.docs);
    }
    info();
  }, []);
  return (
    <>
      <form
        onSubmit={handleSubmit(sendData)}
        className="space-y-5 bg-gray-100 text-center p-5"
      >
        <FormInput
          label="fullName"
          name="fullName"
          register={register("fullName")}
        />
        <FormInput label="age" name="age" register={register("age")} />
        <button className="bg-green-400 px-4 py-1">Submit</button>
      </form>
      <div className="max-w-xl mx-auto mt-3 p-5 rounded">
        {value.map((val) => {
          return (
            <div
              className="bg-gray-300 max-w-xl mx-auto mt-3 p-5 rounded"
              key={val.data().fullName}
            >
              <h1 key={val.data().fullName}>{val.data().fullName}</h1>
              <button className="bg-red-500 px-4 py-1 rounded">delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

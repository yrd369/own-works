import { useForm } from "react-hook-form";
import FormInput from "./components/FormInput";
import Result from "./components/Result";

const App = () => {
  const { register, handleSubmit } = useForm();
  const sendInfo = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="bg-[#D7E4C0] max-w-xl mx-auto mt-5 p-10 rounded space-y-3">
        <form onSubmit={handleSubmit(sendInfo)}>
          <FormInput label="name" name="fullName" register={register("name")} />
          <FormInput label="Email" name="email" register={register("email")} />
          <FormInput
            label="Mobile no"
            name="mobile-no"
            register={register("mobile-no")}
          />
          <button className="bg-blue-600 px-3 py-1 rounded w-full mt-5">
            Submit
          </button>
        </form>
      </div>
      <Result />
    </>
  );
};
export default App;

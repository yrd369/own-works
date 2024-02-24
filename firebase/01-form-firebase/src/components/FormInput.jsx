const FormInput = ({ label,register }) => {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input className="px-2 py-1 bg-[#FFE4C9] outline-none rounded w-full" {...register}/>
    </div>
  );
};
export default FormInput;

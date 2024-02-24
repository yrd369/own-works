const FormInput = ({ label, name, register }) => {
  return (
    <div>
      <label className="block">{label}</label>
      <input className="bg-gray-200" name={name} {...register} />
    </div>
  );
};
export default FormInput;

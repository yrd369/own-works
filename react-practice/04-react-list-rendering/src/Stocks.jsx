import propsType from "prop-types";
const Stocks = ({ internsName }) => {
  const data = internsName.map((intern) => {
    return (
      <li
        className="font-semibold font-arial bg-blue-400 p-10 rounded text-white"
        key={intern.id}
      ><img src={intern.img} className="w-40 rounded-full mb-3"/>
        {intern.name}
      </li>
    );
  });
  return (
    <div className="p-5">
      <h1 className="text-center text-xl font-semibold py-3">Our Team</h1>
      <ul className="grid grid-cols-2 gap-3 w-fit text-center">{data}</ul>
    </div>
  );
};
Stocks.propsType = {
  internsName: propsType.string,
};
Stocks.default = {
  internsName: "hello",
};
export default Stocks;

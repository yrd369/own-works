const Card = ({name,text,isAlive}) => {
  return (
    <>
      <p>{name}</p>
      <h1>{text}</h1>
      <p>{isAlive ? "yes" : "no"}</p>
    </>
  );
};

export default Card;

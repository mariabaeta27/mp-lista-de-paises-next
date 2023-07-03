const Card = ({ contrie }: any) => {
  console.log(contrie);
  return (
    <div className="w-60 h-56 bg-white rounded-lg pt-3 flex flex-col justify-center items-center">
      <div className="w-52 h-32  bg-black rounded-lg" />
      <h1 className="text-black">{contrie.name}</h1>
    </div>
  );
};
export default Card;

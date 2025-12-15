
const Card = ({ title, image }) => {
  return (
    <div className="flex h-72 w-56 grow flex-col items-center justify-around gap-4 rounded-xl border-2 px-3">
      <img src={image} alt="sth" className="size-35" />
      <button className="rounded-xl bg-gray-500 px-3 py-2 text-white">
        {title}
      </button>
    </div>
  );
};

export default Card;

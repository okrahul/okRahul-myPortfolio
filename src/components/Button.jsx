export const Button = (props) => {
  return (
    <button
      className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500 rounded-lg"
      onClick={props.onClick}
    >
      <div className="flex flex-row justify-center items-center gap-x-1">
        {props.children}
        {props.icon}
      </div>
    </button>
  );
};

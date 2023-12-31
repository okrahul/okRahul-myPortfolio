export const Button = (props) => {
  return (
    <button className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500">
      {props.children}
    </button>
  );
};

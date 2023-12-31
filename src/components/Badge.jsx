import { colors } from "./../utils/constants";
export const Badge = ({ text }) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <span
      className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ${randomColor}`}
    >
      {text}
    </span>
  );
};

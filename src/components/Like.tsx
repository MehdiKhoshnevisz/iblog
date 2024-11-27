import heart from "@/assets/icons/heart.svg";
import heartFill from "@/assets/icons/heart-fill.svg";

const Like = (props: {
  withBg?: boolean;
  isFill: boolean;
  onClick: (e: React.MouseEvent<EventTarget>) => void;
}) => {
  const { withBg = true, isFill = false, onClick = () => {} } = props;

  return (
    <span
      className={`${
        isFill ? "text-red-500" : "text-slate-900"
      } cursor-pointer rounded-full ${
        withBg ? "bg-gray-100" : ""
      } w-9 h-9 flex justify-center items-center pt-0.5`}
      onClick={onClick}
    >
      <img src={isFill ? heartFill : heart} width={20} height={20} />
    </span>
  );
};

export default Like;

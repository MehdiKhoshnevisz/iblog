import { useState } from "react";

const useLike = () => {
  const [isLiked, setIsLiked] = useState(false);

  const onLike = (e: React.MouseEvent<EventTarget>) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return {
    isLiked,
    onLike,
  };
};

export default useLike;

import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

import addReactionMutation from "@/graphql/addReactionMutation.gql";
import removeReactionMutation from "@/graphql/removeReactionMutation.gql";

const useReaction = ({ hasReactionBefore = false } = {}) => {
  const [hasReaction, setHasReaction] = useState(hasReactionBefore);

  const [
    addReaction,
    {
      data: addReactionData,
      loading: addReactionLoading,
      error: addReactionError,
    },
  ] = useMutation(addReactionMutation);

  const [
    removeReaction,
    {
      data: removeReactionData,
      loading: removeReactionLoading,
      error: removeReactionError,
    },
  ] = useMutation(removeReactionMutation);

  const onReaction = (e: React.MouseEvent<EventTarget>, id: string) => {
    e.preventDefault();

    setHasReaction(!hasReaction);

    if (hasReaction) {
      removeReactionRequest(id);
    } else {
      addReactionRequest(id);
    }
  };

  const addReactionRequest = async (id: string) => {
    if (addReactionLoading) return;

    try {
      const response = await addReaction({
        variables: {
          input: { reaction: "heart" },
          postId: id,
        },
      });

      setHasReaction(true);
      console.log("Reaction added:", response.data.addReaction.status);
    } catch (err) {
      setHasReaction(false);
      console.error("Error adding reaction:", err);
    }
  };

  const removeReactionRequest = async (id: string) => {
    if (removeReactionLoading) return;

    try {
      const response = await removeReaction({
        variables: {
          reaction: "heart",
          postId: id,
        },
      });

      setHasReaction(false);
      console.log("Reaction removed:", response.data.removeReaction.status);
    } catch (err) {
      console.error("Error removing reaction:", err);
    }
  };

  useEffect(() => {
    if (hasReactionBefore) {
      setHasReaction(true);
    }
  }, [hasReactionBefore]);

  return {
    onReaction,
    hasReaction,
    addReactionData,
    addReactionError,
    addReactionLoading,
    removeReactionData,
    removeReactionError,
    removeReactionLoading,
  };
};

export default useReaction;

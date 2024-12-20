import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

import type {
  RemoveReactionResponse,
  RemoveReactionVariables,
} from "@/graphql/mutations/remove-reaction/types";
import { REACTION, STATUS_RESPONSE } from "@/types/enums";
import addReactionMutation from "@/graphql/mutations/add-reaction/index.gql";
import removeReactionMutation from "@/graphql/mutations/remove-reaction/index.gql";

interface useReactionProps {
  hasReactionBefore: boolean;
}

const useReaction = (props: useReactionProps) => {
  const { hasReactionBefore } = props;
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
  ] = useMutation<RemoveReactionResponse, RemoveReactionVariables>(
    removeReactionMutation
  );

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
          input: { reaction: REACTION.HEART },
          postId: id,
        },
      });

      if (response.data?.removeReaction?.status === STATUS_RESPONSE.SUCCESS) {
        setHasReaction(true);
      }
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
          reaction: REACTION.HEART,
          postId: id,
        },
      });

      if (response.data?.removeReaction.status === STATUS_RESPONSE.SUCCESS) {
        setHasReaction(false);
      }
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

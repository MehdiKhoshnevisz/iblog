import { useEffect, useState } from "react";
import { useMutation, useApolloClient } from "@apollo/client";

import type {
  RemoveReactionResponse,
  RemoveReactionVariables,
} from "@/graphql/mutations/remove-reaction/types";
import { REACTION, STATUS_RESPONSE } from "@/types/enums";
import addReactionMutation from "@/graphql/mutations/add-reaction/index.gql";
import removeReactionMutation from "@/graphql/mutations/remove-reaction/index.gql";
import getPostQuery from "@/graphql/queries/get-post/index.gql";
import getPostsQuery from "@/graphql/queries/get-posts/index.gql";

interface useReactionProps {
  hasReactionBefore: boolean;
}

const useReaction = (props: useReactionProps) => {
  const { hasReactionBefore } = props;
  const client = useApolloClient();
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

  const updateQueries = () => {
    client.refetchQueries({
      include: [getPostQuery, getPostsQuery],
    });
  };

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
        updateQueries();
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
        updateQueries();
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

import type { REACTION, STATUS_RESPONSE } from "@/types/enums";

export interface RemoveReactionVariables {
  reaction: REACTION;
  postId: string;
}

export interface RemoveReactionResponse {
  removeReaction: {
    status: STATUS_RESPONSE;
  };
}

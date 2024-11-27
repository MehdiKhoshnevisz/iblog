import type { REACTION, STATUS_RESPONSE } from "@/types/enums";

export interface addReactionVariables {
  reaction: REACTION;
  postId: string;
}

export interface addReactionResponse {
  addReaction: {
    status: STATUS_RESPONSE;
  };
}

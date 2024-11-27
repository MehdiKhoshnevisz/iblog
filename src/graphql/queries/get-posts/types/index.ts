interface ImageThumbnail {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface PostNode {
  id: string;
  url: string;
  title: string;
  createdAt: string;
  reactionsCount: number;
  customSeoDetail?: {
    thumbnail?: ImageThumbnail;
  };
}

export interface GetPostsVariables {
  limit: number;
  offset?: number;
  postTypeIds?: string[];
  reverse?: boolean;
  spaceIds?: string[];
}

export interface GetPostsResponse {
  posts: {
    nodes: PostNode[];
    pageInfo: PageInfo;
    totalCount: number;
  };
}

interface PostFields {
  id: string;
  title: string;
  createdAt: string;
  reactionsCount: number;
}

interface MediaFields {
  id: string;
  url: string;
  name: string;
  width: number;
  height: number;
}

interface MemberFields {
  id: string;
  name: string;
  email: string;
  displayName: string;
  profilePicture: MediaFields;
}

interface RelationEntities {
  members?: MemberFields[];
  posts?: PostFields[];
}

interface CustomSeoDetail {
  thumbnail?: ImageThumbnail;
}

interface ImageThumbnail {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PostField {
  key: string;
  value: string;
  relationEntities: RelationEntities[];
}

export interface GetPostVariables {
  id: string;
}

export interface Post {
  id: string;
  title: string;
  fields: PostField[];
  createdAt: string;
  reactionsCount: number;
  customSeoDetail?: CustomSeoDetail;
}

export interface GetPostResponse {
  post: Post;
}

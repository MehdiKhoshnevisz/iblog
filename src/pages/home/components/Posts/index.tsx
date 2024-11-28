import { motion } from "motion/react";
import { gql, useQuery, NetworkStatus } from "@apollo/client";

import type {
  PostNode,
  GetPostsResponse,
  GetPostsVariables,
} from "@/graphql/queries/get-posts/types";
import getPostsQuery from "@/graphql/queries/get-posts/index.gql";

import Post from "@/components/Post";
import PostsSkeleton from "./Skeleton";
import Button from "@/components/Button";
import Container from "@/components/Container";

import spinner from "@/assets/icons/spinner.svg";
import { useLocation } from "react-router";
import { useEffect } from "react";

const Posts = () => {
  const { pathname } = useLocation();

  const variables = {
    limit: 6,
    offset: 0,
    reverse: true,
    spaceIds: ["4WOBQpXZdRCe"],
    postTypeIds: ["SATuB1RkXCVBoOz"],
  };

  const {
    data,
    fetchMore,
    loading: isLoading,
    networkStatus,
    refetch,
  } = useQuery<GetPostsResponse, GetPostsVariables>(
    gql`
      ${getPostsQuery}
    `,
    {
      variables,
      notifyOnNetworkStatusChange: true,
    }
  );

  const handleLoadMore = () => {
    fetchMore({
      updateQuery(previousData, { fetchMoreResult }) {
        return { ...previousData, ...fetchMoreResult };
      },
      variables: {
        ...variables,
        limit: 6 + (data?.posts?.nodes?.length || 0),
      },
    });
  };

  const posts = data?.posts?.nodes || [];
  const postsHasNextPage = data?.posts?.pageInfo?.hasNextPage;
  const isInitialLoading = networkStatus === NetworkStatus.loading;

  useEffect(() => {
    refetch();
  }, [pathname]);

  return (
    <Container>
      <h2 className="text-center text-2xl md:text-4xl text-slate-950 font-black mb-10">
        What's going on?
      </h2>
      <div className="grid grid-cols-12 sm:gap-2">
        {isInitialLoading ? (
          <PostsSkeleton />
        ) : posts && posts?.length ? (
          posts.map((post: PostNode) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="col-span-12 sm:col-span-6 lg:col-span-4 mb-4 sm:mb-0"
            >
              <Post
                key={+new Date()}
                id={post.id}
                href={`/post/${post.id}`}
                image={post?.customSeoDetail?.thumbnail?.url}
                title={post.title}
                date={post.createdAt}
                isLiked={!!post.reactionsCount}
              />
            </motion.div>
          ))
        ) : (
          ""
        )}
      </div>
      <div className="text-center my-6 sm:my-12">
        {postsHasNextPage &&
          (isLoading ? (
            <img src={spinner} width={36} height={36} className="mx-auto" />
          ) : (
            <Button onClick={handleLoadMore}>I Want More...</Button>
          ))}
      </div>
    </Container>
  );
};

export default Posts;

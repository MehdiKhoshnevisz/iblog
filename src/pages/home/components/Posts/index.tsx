import { useMemo } from "react";
import { motion } from "motion/react";
import { gql, useQuery, NetworkStatus } from "@apollo/client";

import Post from "@/components/Post";
import PostsSkeleton from "./Skeleton";
import Container from "@/components/Container";
import getPostsQuery from "@/graphql/getPostsQuery.gql";

import spinner from "@/assets/icons/spinner.svg";

const Posts = () => {
  const variables = {
    before: null,
    limit: 6,
    offset: 0,
    reverse: false,
    postTypeIds: ["SATuB1RkXCVBoOz"],
    spaceIds: ["4WOBQpXZdRCe"],
  };

  const {
    data,
    fetchMore,
    loading: isLoading,
    networkStatus,
  } = useQuery(
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
        limit: 6 + data.posts.nodes.length,
      },
    });
  };

  const posts = data?.posts?.nodes || [];
  const postsTotalCount = data?.posts?.totalCount;
  const isInitialLoading = useMemo(
    () => networkStatus === NetworkStatus.loading,
    [networkStatus]
  );

  return (
    <Container>
      <h2 className="text-center text-2xl md:text-4xl text-slate-950 font-black mb-10">
        What's going on?
      </h2>
      <div className="grid grid-cols-12 sm:gap-2">
        {isInitialLoading ? (
          <PostsSkeleton />
        ) : posts && posts?.length ? (
          posts.map((post: any) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="col-span-12 sm:col-span-6 lg:col-span-4 mb-2 sm:mb-0"
            >
              <Post
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
        {posts?.length < postsTotalCount &&
          (isLoading ? (
            <img src={spinner} width={36} height={36} className="mx-auto" />
          ) : (
            <button
              className="min-h-9 text-center px-4 py-2 text-slate-950 font-black bg-slate-100 hover:bg-slate-950 hover:text-slate-50 transition-all duration-300"
              onClick={handleLoadMore}
            >
              I Want More...
            </button>
          ))}
      </div>
    </Container>
  );
};

export default Posts;

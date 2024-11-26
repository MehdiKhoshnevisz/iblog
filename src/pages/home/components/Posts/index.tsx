import { gql, useQuery } from "@apollo/client";

import Container from "@/components/Container";
import Post from "@/components/Post";
import GetPosts from "./posts.gql";

const Posts = () => {
  const variables = {
    before: null,
    limit: 6,
    offset: 0,
    reverse: false,
    postTypeIds: ["SATuB1RkXCVBoOz"],
    spaceIds: ["4WOBQpXZdRCe"],
  };

  const { data, fetchMore } = useQuery(
    gql`
      ${GetPosts}
    `,
    {
      variables,
    }
  );

  const handleLoadMore = () => {
    fetchMore({
      updateQuery(previousData, { fetchMoreResult }) {
        return fetchMoreResult;
      },
      variables: {
        ...variables,
        limit: 6 + data.posts.nodes.length,
      },
    });
  };

  const posts = data?.posts?.nodes || [];
  const postsTotalCount = data?.posts?.totalCount;

  return (
    <Container>
      <h2 className="text-center text-2xl md:text-4xl text-slate-950 font-black mb-10">
        What's going on?
      </h2>
      <div className="grid grid-cols-12 sm:gap-2">
        {posts && posts?.length
          ? posts.map((post: any) => (
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 mb-6 sm:mb-0">
                <Post
                  key={post.id}
                  href={`/post/${post.id}`}
                  image={post?.customSeoDetail?.thumbnail?.url}
                  title={post.title}
                  date={post.createdAt}
                />
              </div>
            ))
          : ""}
      </div>
      <div className="text-center my-8">
        {posts?.length < postsTotalCount && (
          <button
            className="rounded-lg text-center px-4 py-2 text-slate-950 font-black bg-slate-100 hover:bg-slate-950 hover:text-slate-50 transition-all duration-300"
            onClick={handleLoadMore}
          >
            I want more...
          </button>
        )}
      </div>
    </Container>
  );
};

export default Posts;

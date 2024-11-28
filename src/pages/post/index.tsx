import moment from "moment";
import { useEffect, useMemo } from "react";
import { motion } from "motion/react";
import parse from "html-react-parser";
import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";

import getPostQuery from "@/graphql/queries/get-post/index.gql";
import type {
  GetPostResponse,
  GetPostVariables,
  PostField,
} from "@/graphql/queries/get-post/types";

import Like from "@/components/Like";
import Container from "@/components/Container";
import useReaction from "@/hooks/use-reaction";

import "./post.css";
import TryAgain from "@/components/TryAgain";
import { useLocation } from "react-router";

export default function PostPage() {
  const { id } = useParams();
  const { pathname } = useLocation();

  const { data, loading, refetch } = useQuery<
    GetPostResponse,
    GetPostVariables
  >(
    gql`
      ${getPostQuery}
    `,
    {
      variables: {
        id: id ?? "",
      },
    }
  );

  const post = data?.post || null;
  const isLiked = useMemo(() => !!data?.post?.reactionsCount, [data]);

  const { hasReaction, onReaction } = useReaction({
    hasReactionBefore: isLiked,
  });

  const postContent = useMemo(() => {
    const content = post?.fields?.find(
      (item: PostField) => item.key === "content"
    );
    const sanitizedContent = content?.value?.trim()?.replace(/\\/g, "");
    const cleanedContent =
      sanitizedContent?.startsWith('"') && sanitizedContent?.endsWith('"')
        ? sanitizedContent?.slice(1, -1)
        : sanitizedContent;

    return cleanedContent;
  }, [post]);

  useEffect(() => {
    refetch();
  }, [pathname]);

  if (loading) return <div className="min-h-screen"></div>;

  return (
    <motion.main
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {post ? (
        <Container className="my-20 md:my-40">
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-black">{post?.title}</h1>
            <span className="block mt-2 md:mt-4">
              {moment(post?.createdAt).format("MMMM DD, YYYY")}
            </span>
          </header>

          <div className="mb-6">
            <img
              src={post?.customSeoDetail?.thumbnail?.url}
              height={320}
              className="w-full h-80 object-cover"
            />
          </div>

          <hr className="mb-4" />

          <div className="flex rounded-sm items-center px-4 py-6 mb-6 bg-[url('/public/like-pattern-bw.jpg')] bg-white/85 bg-blend-overlay bg-center">
            <span
              className="text-xl text-slate-600 cursor-pointer"
              onClick={(e) => onReaction(e, post?.id)}
            >
              {hasReaction ? "I like it" : "Do you like it?"}
            </span>
            <Like
              withBg={false}
              isFill={hasReaction}
              onClick={(e) => onReaction(e, post?.id)}
            />
          </div>

          <hr className="mb-4" />

          <article className="post-article text-xl break-all text-slate-900">
            {parse(`${postContent}`)}
          </article>
        </Container>
      ) : (
        <TryAgain onClick={() => refetch()} />
      )}
    </motion.main>
  );
}

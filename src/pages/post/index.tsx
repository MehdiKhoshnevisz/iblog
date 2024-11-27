import moment from "moment";
import { useMemo } from "react";
import { motion } from "motion/react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import Like from "@/components/Like";
import useReaction from "@/hooks/useReaction";
import Container from "@/components/Container";
import getPostQuery from "@/graphql/getPostQuery.gql";

import "./post.css";

export default function PostPage() {
  const { id } = useParams();

  const { data, loading } = useQuery(
    gql`
      ${getPostQuery}
    `,
    {
      variables: {
        id,
      },
    }
  );

  const post = data?.post || null;
  const isLiked = useMemo(() => !!data?.post?.reactionsCount, [data]);

  const { hasReaction, onReaction } = useReaction({
    hasReactionBefore: isLiked,
  });

  const content = post?.fields?.find((item: any) => item.key === "content");
  const sanitizedContent = content?.value?.trim()?.replaceAll("\\", "");
  const cleanedContent =
    sanitizedContent?.startsWith('"') && sanitizedContent?.endsWith('"')
      ? sanitizedContent?.slice(1, -1)
      : sanitizedContent;

  console.log({ post });

  if (loading) return "";

  return (
    <motion.main
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="my-20 md:my-40 min-h-full"
    >
      <Container>
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

        <article className="post-article text-xl text-slate-900">
          {parse(`${cleanedContent}`)}
        </article>
      </Container>
    </motion.main>
  );
}

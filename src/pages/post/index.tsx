import moment from "moment";
import { useMemo } from "react";
import { motion } from "motion/react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import useReaction from "@/hooks/useReaction";
import Container from "@/components/Container";
import getPostQuery from "@/graphql/getPostQuery.gql";

import heart from "@/assets/icons/heart.svg";
import heartFill from "@/assets/icons/heart-fill.svg";

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

        <article className="post-article text-xl text-slate-900">
          {parse(`${cleanedContent}`)}
        </article>

        <hr />

        <div className="sticky rounded-md flex gap-4 bottom-1 mt-6 py-4 px-4 backdrop-blur-sm">
          <span className="text-lg font-bold">Do you like it? </span>
          <span
            className={`${
              isLiked ? "text-red-500" : "text-slate-900"
            } cursor-pointer rounded-full bg-gray-100 w-9 h-9 flex justify-center items-center pt-0.5`}
            onClick={(e) => onReaction(e, post?.id)}
          >
            <img src={hasReaction ? heartFill : heart} width={20} height={20} />
          </span>
        </div>
      </Container>
    </motion.main>
  );
}

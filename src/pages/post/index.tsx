import moment from "moment";
import { motion } from "motion/react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

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

        <div className="py-6">
          <span>Do you like it?</span>
        </div>
      </Container>
    </motion.main>
  );
}

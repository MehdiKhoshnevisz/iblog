const Post = (props: {
  title?: string;
  href?: string;
  date?: string;
  image?: string;
}) => {
  const { title = "", href = "/", date = "", image = "" } = props;

  return (
    <a href={href}>
      <figure className="mb-1">
        <img
          src={image}
          width={320}
          height={240}
          alt="A descriptive image"
          className="rounded-lg bg-slate-100"
        />
        <figcaption className="mt-1">
          <span className="">{date}</span>
          <h3 className="text-lg text-black font-bold leading-snug">{title}</h3>
        </figcaption>
      </figure>
    </a>
  );
};

export default Post;

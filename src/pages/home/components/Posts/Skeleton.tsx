import Post from "@/components/Post";

const Skeleton = (props: any) => {
  const { count = 6 } = props;

  const list = Array.from({ length: count }, (_, index) => index);

  return (
    <>
      {list.map((item: any) => (
        <div
          className={`col-span-12 sm:col-span-${count} lg:col-span-4 mb-6 sm:mb-0`}
        >
          <Post key={item} isSkeleton />
        </div>
      ))}
    </>
  );
};

export default Skeleton;

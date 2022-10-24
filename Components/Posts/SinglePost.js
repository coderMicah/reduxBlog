import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import PostAuthor from "./PostAuthor";
import { ReactionButtons } from "./ReactionButtons";

function SinglePost({ params }) {
  const router = useRouter();
  const id = router.query.id;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article className="max-w-7xl mx-auto">
      <div className="p-4">
        <h3 className="text-3xl font-bold"> {post.title} </h3>
        <PostAuthor />
        <p className="text-2xl pt-4">{post.content}</p>
        <Link href={`/EditPost/${id}`}>Update</Link>
        <ReactionButtons post={post} />
      </div>
    </article>
  );
}

export default SinglePost;

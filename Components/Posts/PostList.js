import { useSelector } from "react-redux";
import Link from "next/link";
import PostAuthor from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

function PostList() {
  const posts = useSelector((state) => state.posts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id} className='my-2 p-4 border shadow sm:rounded-md'>
     <div className="mb-5">
     <div className="flex justify-between">
        <div>
        <h3 className="text-gray-600 text-2xl font-medium">{post.title}</h3>
        <PostAuthor userId={post.userId}/>
        </div>
        <p className="text-gray-800">{post.time} min read</p>
      </div>
      <div className="py-2">
        <p>{post.content.substring(0, 100)}</p>
      </div>
      <div className="text-sm text-blue-400 te">
      <Link  href={`/Posts/${post.id}`}>Read More ..</Link>
      </div>
     </div>


     <div className="flex justify-between">
     <ReactionButtons post={post}/>
      <TimeAgo timestamp={post.date}/>
     </div>
 
  
    </article>
  ));
  return <div className="max-w-7xl mx-auto">{renderedPosts}</div>;
}

export default PostList;

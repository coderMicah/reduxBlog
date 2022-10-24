import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postUpdated } from '../../Features/posts/postsSlice';
import { useRouter } from 'next/router';

function UpdatePostForm() {
  const router = useRouter()
  const { id }= router.query;

  // const posts = useSelector(state => state.posts)
  // const post = posts.find(post => post.id === id)
  const post = useSelector( state => state.posts.find(post => post.id === id))
  console.log(post);
  const [title,setTitle] = useState(post.title);
  const [time,setTime] = useState(post.time);
  const [content,setContent] = useState(post.content);

  const dispatch = useDispatch()

  const onTimeChanged = e => setTime(e.target.value)
  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

 

  const onUpdateClicked = () => {
    if(time && title && content){
        // let payload = { id:post.id,title, time, content }
        // console.log(id,title, time, content );
        dispatch(postUpdated({ id:post.id,title, time, content }))
        //  router.push(`/Posts/${post.id}`)
    }
  }

  return (
  
    <form className="max-w-4xl mx-auto m-5">
    
    <div className="overflow-hidden shadow sm:rounded-md bg-gray-100 px-4 py-5 sm:p-6">
    <h3 className="text-lg font-medium leading-6 text-gray-900"> Form Input </h3>
        <div className=" grid grid-cols-6 gap-6 py-6 ">
          <div className="col-span-6 ">
            <label
              htmlFor="postTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="postTitle"
              id="postTitle"
              value={title}
              onChange={onTitleChanged}
              placeholder="What's on your mind?"
              className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6 ">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Est Time Read
            </label>
            <input
              type="text"
              name="time"
              id="time"
              value={time}
              onChange={onTimeChanged}
              className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6 ">
            <label
              htmlFor="postContent"
              className="block text-sm font-medium text-gray-700"
            >
              Post Content
            </label>
            <textarea
              type="text"
              name="postContent"
              id="postContent"
              placeholder="Share Your Thoughts !!!"
              value={content}
              onChange={onContentChanged}
              className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
    <button
      type="submit"
      onSubmit={onUpdateClicked} 
      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Update Post
    </button>
      </div>
   
  </form>
  )
}

export default UpdatePostForm
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../../Features/posts/postsSlice";

function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onTimeChanged = (e) => setTime(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const posts = useSelector((state) => state.posts);

  const onSavePostClicked = (e) => {
    if (title && time && content) {
      console.log(title, content,time,userId);
      dispatch(postAdded(title, content,time,userId));
      setTitle("");
      setTime("");
      setContent("");
    }
    console.log(posts);
    e.preventDefault()
  };

  const users = useSelector((state) => state.users);
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));


  return (
    <form className="max-w-4xl mx-auto my-5">
      <div className="overflow-hidden shadow sm:rounded-md bg-gray-100 px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {" "}
          Form Input{" "}
        </h3>
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
              className="py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
              type="number"
              name="time"
              id="time"
              value={time}
              onChange={onTimeChanged}
              className="py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
              value={content}
              onChange={onContentChanged}
              className="py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6 ">
            <label
              htmlFor="postContent"
              className="block text-sm font-medium text-gray-700"
            >
              Users
            </label>
            <select
              className="py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="postAuthor"
              value={userId}
              onChange={onAuthorChanged}
            >
              <option value=""></option>
              {userOptions}
            </select>
          </div>
        </div>
        <button
          type="submit"
          onClick={onSavePostClicked}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Post
        </button>
      </div>
    </form>
  );
}

export default AddPostForm;

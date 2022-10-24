import { useSelector } from "react-redux"

function PostAuthor({userId}) {
 
   const author = useSelector(state => state.users.find(user => user.id === userId));
  return (
    <span className="text-gray-500 font-semibold text-xs">by {author ? author.name : 'Unknown author'}</span>
  )
}

export default PostAuthor
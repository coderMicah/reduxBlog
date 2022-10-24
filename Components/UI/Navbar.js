import Link from "next/link";

function Navbar() {
  return <>
    <nav className="bg-gray-500">
      <div className="mx-auto max-w-7xl mb-0 px-4 py-4 sm:px-6 lg:px-8">
        <ul className="flex justify-between">
          <li className="list-none text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> <Link href='/' > Posts</Link>  </li>
          <li className="list-none text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> <Link href='/PostForm'>Add Post</Link> </li>
        </ul>
      </div>
  </nav>
 
  </>;
}

export default Navbar;

import { Link, useMatch } from "@tanstack/react-location";
import { useQuery } from "react-query";

import { successButton } from "~/constants/buttonColor";
import type { IPost } from "~/interfaces/IPost";

export const PostDetail = () => {
  const { postId } = useMatch().params;
  const { data } = useQuery<IPost, Error>(
    ["getPost", { postId }],
    () => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => res.json()),
    { suspense: true },
  );

  if (!data) return null;

  return (
    <main className="bg-slate-500 p-4">
      <div className="flex gap-4 py-4">
        <Link to="/posts" className={successButton}>
          to /posts
        </Link>
      </div>

      <h2>PostPage{postId}</h2>
      <p>postId : {data.id}</p>
      <p>title : {data.title}</p>
      <p>body : {data.body}</p>
      <p>userId : {data.userId}</p>
    </main>
  );
};

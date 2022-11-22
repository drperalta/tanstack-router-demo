import { postListRoute, postPageRoute } from "../router";
import { useEffect } from "react";
import { router } from "../router";

export const PostList = () => {
  const {
    loaderData: { posts },
    Link,
  } = router.useMatch(postListRoute.id);

  return (
    <main>
      <h1 className="text-xl font-bold mb-4">Post List</h1>
      <ul className="flex flex-col gap-2">
        {posts.map(({ title, id }) => (
          <Link
            className="px-2 py-2 bg-slate-100 rounded-lg"
            to={postPageRoute.id}
            params={{
              postId: id.toString(),
            }}
            key={id}
          >
            {title}
          </Link>
        ))}
      </ul>
    </main>
  );
};

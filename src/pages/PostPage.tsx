import { postPageRoute, router } from "../router";

export const PostPage = () => {
  const {
    loaderData: { post },
    Link,
  } = router.useMatch(postPageRoute.id);

  return (
    <main>
      <Link
        className="px-2 py-1 bg-neutral-200 rounded-md text-sm font-bold hover:text-emerald-500"
        to="/posts/list"
      >
        GO BACK
      </Link>
      <h1 className="font-bold text-2xl mt-6">{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
};

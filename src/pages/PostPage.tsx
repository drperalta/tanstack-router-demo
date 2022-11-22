import { postPageRoute, router } from "../router";

export const PostPage = () => {
  const {
    loaderData: { post },
    Link,
  } = router.useMatch(postPageRoute.id);

  return (
    <main className="flex flex-col gap-6">
      <div>
        <Link
          className="px-2 py-1 bg-neutral-200 rounded-md text-sm font-bold hover:text-emerald-500"
          to="/posts/list"
        >
          GO BACK
        </Link>
      </div>

      {/* Thumbnail */}
      <div
        className="h-[260px] rounded-lg bg-cover bg-center bg-slate-100"
        style={{
          backgroundImage: `url(https://picsum.photos/id/${post.id}/1920/1080)`,
        }}
      ></div>

      {/* Post Content */}
      <div>
        <h1 className="font-bold text-3xl">{post.title}</h1>
        <p className="text-base">{post.body}</p>
      </div>
    </main>
  );
};

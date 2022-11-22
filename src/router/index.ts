import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { fetchPost, fetchPosts, PostType } from "../api/posts";
import { Home } from "../pages/Home";
import { PostContainer } from "../pages/PostContainer";
import { PostList } from "../pages/PostList";
import { PostPage } from "../pages/PostPage";

const rootConfig = createRouteConfig();

// Home Routes
export const homeRoute = rootConfig.createRoute({
  path: "/",
  component: Home,
});

// Post Routes
export const postRoutes = rootConfig.createRoute({
  path: "posts",
  component: PostContainer,
});
export const postListRoute = postRoutes.createRoute({
  path: "list",
  component: PostList,
  loader: async () => {
    return {
      posts: await fetchPosts(),
    };
  },
});
export const postPageRoute = postRoutes.createRoute({
  path: "page/:postId",
  component: PostPage,
  errorComponent: () => "There's an error",
  loader: async ({ params: { postId } }) => {
    return {
      post: await fetchPost(postId),
    };
  },
});

const routeConfig = createRouteConfig().addChildren([
  homeRoute,
  postRoutes.addChildren([postListRoute, postPageRoute]),
]);

export const router = createReactRouter({
  routeConfig,
});

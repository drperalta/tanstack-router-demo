import { Outlet, useMatch, useRouter } from "@tanstack/react-router";
import { useContext, useEffect } from "react";
import { postListRoute, postRoutes } from "../router";

export const PostContainer = () => {
  const { navigate } = useMatch(postRoutes.id);

  useEffect(() => {
    navigate({
      to: postListRoute.id,
    });
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

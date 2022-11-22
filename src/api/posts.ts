import axios from "axios";

export interface PostType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const fetchPosts = async () => {
  try {
    const response = await axios.get<PostType[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data.slice(0, 20);
  } catch (err) {
    throw err;
  }
};

export const fetchPost = async (id: string) => {
  try {
    const response = await axios.get<PostType>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};

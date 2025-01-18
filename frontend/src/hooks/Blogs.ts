
import axios from "axios";
import { useEffect, useState } from "react";
import { BLOGS_ROUTE } from "../constants";
import { toast } from "sonner";

export type Blog= {
  title: string;
  content: string;
  id: string;
  author: {
    name: string;
  };
}
export const useBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(BLOGS_ROUTE, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setBlogs(res.data.blogs);
        setLoading(false);
      } catch (error) {
        toast.error("Error while fetching the blogs");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  return { loading, blogs };
};

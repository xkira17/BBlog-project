import HomePageComponent from "@/page-components/home-page-component";
import { PostsService } from "@/services/posts.service";
import { fetchAllUsers } from "@/services/users.service";
import { getAllPosts } from "@/store/posts.slice";
import { getAllUsers } from "@/store/user.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = ({ posts, users }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts(posts));
    dispatch(getAllUsers(users));
  }, []);
  console.log(users);
  return (
    <div>
      <HomePageComponent />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const posts = await PostsService.fetchAllPosts();
  const data = await fetchAllUsers();

  return {
    props: {
      posts: posts.posts,
      users: data.authors,
    },
  };
};

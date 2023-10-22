import { fetchAllUsers, getSingleAuthorData } from "@/services/users.service";
import { getAllUsers } from "@/store/user.slice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import PostItem from "@/components/PostItem";

const UserProfile = ({ users, item }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers(users));
  }, []);

  return (
    <div>
      <div className="flex gap-4">
        <img
          className="w-[150px] h-[150px] rounded-full"
          src={item.avatar.url}
        />
        <div>
          <h1 className="font-medium text-2xl mb-2">{item.fullName}</h1>
          <p className="text-sm">{item.bio}</p>
          <Button className="mt-2 w-full" color="primary">
            Following
          </Button>
        </div>
      </div>

      <hr className="my-6 dark:border-gray-700 border-gray-200" />

      {item.posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default UserProfile;

export const getServerSideProps = async ({ params }) => {
  const { authors } = await fetchAllUsers();
  const data = await getSingleAuthorData(params.slug);

  return {
    props: {
      users: authors,
      item: data.authors[0],
    },
  };
};

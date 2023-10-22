import { User } from "@nextui-org/react"
import Link from "next/link"

const PostItem = ({ post }) => {
    return (
        <div className="flex gap-6 xs:flex-col md:flex-row p-3 mb-4 rounded-md border-[1px] dark:border-gray-700 border-gray-100">
            <div className="xs:w-full md:w-[65%]">
                <div className="flex gap-3 items-center">
                    <User
                        avatarProps={{
                            src: post.author.avatar.url,
                        }}
                        name={post.author.fullName} />
                    - <span className="opacity-70 text-sm">7 days ago</span>
                </div>
                <h1 className="text-xl font-medium my-3">
                    <Link className="hover:text-primary transition-all" href={`/post/${post.id}`}>{post.title}</Link>
                </h1>
                <p className="text-sm">{post.excerpt}</p>
            </div>
            <div className="xs:w-full md:w-[35%]">
                <img className="h-[150px] w-full object-cover rounded-lg" src={post.image.url} />
            </div>
        </div>
    )
}

export default PostItem 
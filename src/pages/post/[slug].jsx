import { PostsService } from '@/services/posts.service'
import { fetchAllUsers } from '@/services/users.service'
import { getAllUsers } from '@/store/user.slice'
import { User } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useDispatch } from 'react-redux'

const PostDetails = ({ post, authors }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers(authors))
    }, [])


    return (
        <div>
            <h1 className='text-3xl font-medium'>{post.title}</h1>
            <User
                avatarProps={{
                    src: post.author.avatar.url,
                }}
                name={post.author.fullName}
                description={post.createdAt}
                className='my-4 rounded-none pb-4 border-b-[1px] dark:border-b-gray-700 border-b-gray-100 w-full justify-start'
            />
            <p className='font-bold text-2xl text-gray-500'>{post.excerpt}</p>
            <img className='w-full rounded-lg my-6' src={post.image.url} alt="" />
            <p>{ReactHtmlParser(post.content.html)}</p>

            <div className='w-full p-6 rounded-lg border dark:border-slate-600 slate-200 mt-24 dark:bg-slate-700 bg-slate-200 text-center relative'>
                <div className='absolute w-[100px] h-[100px] rounded-full top-[-50px] left-[50%] transform translate-x-[-50px] p-1 border-2 border-indigo-400'>
                    <img className=' w-full h-full rounded-full' src={post.author.avatar.url} alt="" />
                </div>
                <h2 className='text-2xl font-medium mb-2 mt-12'>
                    <Link className='hover:text-primary transition-all' href={`/user/${post.author.id}`}>{post.author.fullName}</Link>
                </h2>
                <p>
                    {post.author.bio}
                </p>
            </div>

        </div>
    )
}

export default PostDetails

export const getServerSideProps = async ({ params }) => {
    const data = await PostsService.fetchPostDetails(params.slug)
    const { authors } = await fetchAllUsers();


    return {
        props: {
            post: data.posts[0],
            authors,
        },
    }
}
import PostItem from '@/components/PostItem'
import { posts } from '@/config/constants'
import React from 'react'
import { useSelector } from 'react-redux'

const HomePageComponent = () => {
    const { posts } = useSelector(state => state.posts)

    console.log(posts);
    return (
        <div>
            {posts.map((item, index) => (
                <PostItem post={item} key={index} />
            ))}
        </div>
    )
}

export default HomePageComponent
import { users } from '@/config/constants'
import { User, useSelect } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const { users } = useSelector(state => state.users)

    console.log(users);

    return (
        <div className='flex flex-col gap-4 w-full rounded-md border-[1px] dark:border-gray-700 border-gray-100 p-4'>
            {
                users.map((item) => (
                    <User key={item.id}
                        name=<Link href={`/user/${item.id}`} className='hover:text-primary transition-all'>{item.fullName}</Link>
                        description={item.bio.slice(0, 70) + '...'}
                        avatarProps={{
                            src: item.avatar.url,
                            className: 'min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]',
                        }}
                        className='border-b-[1px] dark:border-b-gray-700 border-b-gray-100 pb-2 rounded-none'
                    />

                ))
            }
        </div>
    )
}

export default Sidebar
import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Container from '@/components/Container'

const Layout = ({ children }) => {
    return (
        <div className='min-h-screen w-full'>
            <Header />
            <Container>
                <div className='w-full flex xs:flex-col md:flex-row my-6 gap-6 items-start'>
                    <div className='xs:w-full md:w-[70%]'>{children}</div>
                    <div className='xs:w-full md:w-[30%] sticky top-[100px]'>
                        <Sidebar />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Layout
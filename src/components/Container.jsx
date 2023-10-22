import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='xs:w-[90%] lg:w-[80%] mx-auto'>
            {children}
        </div>
    )
}

export default Container
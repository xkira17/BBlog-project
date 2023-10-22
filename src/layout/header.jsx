import Container from '@/components/Container'
import LangSwitcher from '@/components/LangSwitcher'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Link, Switch } from '@nextui-org/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'


const Header = () => {
    return (
        <div className='w-full border-b-[1px] dark:border-b-gray-700 border-b-gray-100 py-[20px] sticky top-0 dark:bg-black bg-white z-50'>
            <Container>
                <header className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                        <Link href={'/'}>
                            <h1 className='text-3xl font-bold'>
                                <span className='text-primary'>Bawka</span>-blog
                            </h1>
                        </Link>
                        <label>
                            <Input className='xs:hidden lg:flex' placeholder='search...'
                                startContent={<BiSearch />} />
                        </label>
                    </div>

                    <div className='flex items-center gap-4'>
                        <LangSwitcher />
                        <ThemeSwitcher />

                        <Dropdown>
                            <DropdownTrigger>
                                <Avatar isBordered color="primary" src='https://miro.medium.com/v2/resize:fill:40:40/0*hrbt3H71Z4xh--8m' className='cursor-pointer' />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem>
                                    Profile
                                </DropdownItem>
                                <DropdownItem>
                                    Settings
                                </DropdownItem>
                                <DropdownItem>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </header>
            </Container>
        </div>
    )
}

export default Header
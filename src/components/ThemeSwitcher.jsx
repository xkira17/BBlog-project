import React from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@nextui-org/react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div>
            <label className='flex items-center gap-2 cursor-pointer'>
                <Switch defaultSelected={theme === 'dark  '}
                    size='lg' color='primary'
                    thumbIcon={({ isSelected, className }) =>
                        isSelected ? (
                            <BiSolidMoon className={className} />
                        ) : (
                            <BiSolidSun className={className} />
                        )
                    }
                    onChange={e => {
                        if (e.target.checked) {
                            setTheme('dark')
                        } else {
                            setTheme('light')
                        }
                    }}
                >
                    <span className='xs:hidden md:block'>
                        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </span>
                </Switch>
            </label>
        </div>
    )
}

export default ThemeSwitcher
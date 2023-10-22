import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

const LangSwitcher = () => {
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant='bordered' >
                        EN
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>EN</DropdownItem>
                    <DropdownItem>RU</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default LangSwitcher
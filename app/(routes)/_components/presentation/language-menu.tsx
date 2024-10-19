import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu'
import { Languages } from 'lucide-react'

interface LanguageMenuProps {
  onClick: (language: 'en' | 'es') => void
}

const LanguageMenu = ({
  onClick
}: LanguageMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className='w-6 h-6' />
          <span className='sr-only'>Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='bg-white'>
        <DropdownMenuItem className='cursor-pointer' onClick={() => onClick('en')}>English</DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' onClick={() => onClick('es')}>Spanish</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageMenu
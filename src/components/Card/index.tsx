import { useRouter } from '@tanstack/react-router'
import { twMerge } from 'tailwind-merge'
import './style.css'
import { useLocalStorage } from '@/hooks/useLocalStorage'

type Props = {
  showBack?: boolean
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const Card = ({ children, showBack = false, className }: Props) => {
  // const { navigate } = useRouter()
  // const onBack = () => navigate({ to: '/' })
  const { storedValue: storedCharacter } = useLocalStorage('character')

  console.log(storedCharacter);
  

  return <div className={twMerge('card shadow-light', className)}>{children}</div>
}

export default Card

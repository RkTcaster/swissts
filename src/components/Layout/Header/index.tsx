import css from './style.module.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={css.container}>Esto es un header</div>
  )
}

export default Header
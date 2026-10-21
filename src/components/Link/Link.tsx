import { Link as RouterLink } from 'react-router'
import styles from './Link.module.css'

interface LinkProps {
  title: string
  href: string
}

const Link = ({ title, href }: LinkProps) => {
  return (
    <RouterLink className={styles.a} to={href}>{title}</RouterLink>
  )
}

export default Link
export type { LinkProps }

import styles from './Link.module.css'

interface LinkProps {
  title: string;
  href: string;
}

const Link = ({title, href}: LinkProps) => {
  return (
    <a className={styles.a} href={href}>{title}</a>
  )
}

export default Link
export type {LinkProps}

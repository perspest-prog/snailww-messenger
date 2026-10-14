import styles from './Text.module.css'

interface TextProps {
  tag?: keyof JSX.IntrinsicElements;
  variant: string;
  value?: string;
  [key: string]: any;
}

const Text = ({ tag = 'span', variant, value, ...rest}: TextProps) => {
  const CustomTag = tag

  return (
    <CustomTag className={styles[variant]} {...rest}>{value}</CustomTag>
  )
}

export default Text
export type {TextProps}

import type { ComponentPropsWithoutRef, ElementType } from 'react'
import styles from './Text.module.css'

interface TextProps<T extends keyof JSX.IntrinsicElements> {
  tag?: T
  variant: string
  value?: string
}

const Text = <T extends keyof JSX.IntrinsicElements>({ tag, variant, value, ...rest }: TextProps<T> & JSX.IntrinsicElements[T]) => {
  const CustomTag: ElementType<ComponentPropsWithoutRef<T>> = tag ?? 'span'

  return (
    <CustomTag className={styles[variant]} {...rest}>{value}</CustomTag>
  )
}

export default Text
export type { TextProps }

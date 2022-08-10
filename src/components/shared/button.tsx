interface Props {
    title: string
    handler?: () => void
    styles?:string
}
const Button = ({title, handler, styles}: Props) => {
return (
<button
  type='submit'
  className={styles}
  onClick={handler}>

  {title}
</button>
)
}

export default Button
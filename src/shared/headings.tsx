interface Props {
  title: string
}
const Headings = ({ title }: Props) => {
  return <h1 className="text-primary-default text-5xl text-center font-semibold mb-6">{title}</h1>
}

export default Headings



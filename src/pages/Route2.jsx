import { useParams } from "@solidjs/router"

export default function Route2(props) {
  const p = useParams()
  console.log('p', p)
  console.log('p.id', p.id)
  return (
    <>
      <h1>Route2</h1>
    </>
  )
}
export default function Route1(props) {
  console.log('Users.params', props.params)
  console.log('props.params.id', props.params.id)
  console.log('props.params.idx', props.params.idx)
  
  return (
    <>
      <h1>Route1</h1>
    </>
  )
}
import Button from './components/Button'


function App() {

  return (
    <>
      <Button onClick={() => alert('hi')}>
        small
      </Button>
      <Button onClick={() => alert("hi")} size="medium">medium</Button>
      <Button onClick={() => alert("hi")} size="large">Large</Button>
      <Button onClick={() => alert("hi")} size="large" disabled>Click me</Button>
      <Button onClick={() => alert("hi")} size="large" variant="outlined">Click me</Button>
    </>
  )
}

export default App

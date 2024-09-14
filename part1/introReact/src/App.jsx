const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </>
  )
}

const App = () => {
  const friends = [
    {name: "JP", age: 20},
    {name: "Joha", age: 25}
  ]
    
  return (
    <>
      <h1>Greetings</h1>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </>  
  )
}
export default App
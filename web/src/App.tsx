//JSX => JavaScript + XML (HTML)
//Components and props
interface ButtonProps {
  title: String; //Para que a propriedade não seja obrigatória basta colocar uma "?" antes dos ":" de seleção da propriedade
}

function Button(props: ButtonProps) {
  return(
    <button>
      {props.title}
    </button>
  )
}
function App() {
  return(
    <div>
      <Button title="1"/>
      <Button title="2"/>
      <Button title="3"/>
    </div>
  )
}

export default App

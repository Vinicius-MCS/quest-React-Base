import './styles/App.css'
import { Text } from './components/Text/'
import { Button } from './components/Button'

function App() {
  return (
    <>
      <Text textContent={"Esse é o texto do parágrafo"} color={"amber-500"}></Text>
      <Button label={"Baixar CV"}></Button>
    </>
  )
}
export default App

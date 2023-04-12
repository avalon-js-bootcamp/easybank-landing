import { useState } from 'react'
import './App.css'
import Header from './Components/header.jsx'
import Main from './Components/main.jsx'
import Sales from './Components/sales.jsx'
import Articles from './Components/articles.jsx'
import Footer from './Components/footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Header></Header>
<Main></Main>
<Sales></Sales>
<Articles></Articles>
<Footer></Footer>
    </div>
  )
}

export default App

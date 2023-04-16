import './App.css'
import Header from './Components/header'
import Main from './Components/main'
import Sales from './Components/sales'
import Articles from './Components/articles'
import Footer from './Components/footer'


function App() {
  return (
    <div className="App">
      <div className="hide-everything"></div>
<Header></Header>
<Main></Main>
<Sales></Sales>
<Articles></Articles>
<Footer></Footer>
    </div>
  )
}

export default App

import Footer from './components/footer'
import Header from './components/header'
import {useState} from 'react'
import Counter from './components/counter'


function App() {

  const [selectedPage , setSelectedPage] = useState('Home')

  return (
    <>
    <Header page={selectedPage} updateStateOfPage={setSelectedPage}/>

<div style={{paddingTop:'10px' , paddingBottom:'10px'}}>

    <div className="nes-container with-title is-centered">
        <p className="title">Main</p> 
     <h2>Aula 002</h2>

     <h1>Statefull</h1>

 <Counter/> 

     <h1>Stateless</h1>

     </div>
     </div>



     <Footer page={selectedPage} updateStateOfPage={setSelectedPage} />
    </>
  )
}

export default App
import React from "react"
import Header from "./assets/Header"
import Content from "./assets/Content"
import Footer from "./assets/Footer"
import CoinData from "./assets/Coindata"
import { Routes,Route } from "react-router-dom"
function App() {

  return (<>
    <Header/>
  <Routes>
    <Route path="/" element={<Content/>}>
    </Route>
      <Route path=":coinDetails" element={<CoinData/>}/>
    
    </Routes>
    <Footer/>
    
</>
  )
}

export default App

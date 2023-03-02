import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function CoinsTable() {

  const [list, setList] = useState([])
  
const url = `https://api.coingecko.com/api/v3/coins/`

  useEffect(()=>{
  axios.get(url)
  .then(res=> setList(res.data) ).catch((error)=>{console.log(erro
    )})
  


},[])

console.log()
  

  





  return (
    <div>

<table className="table align-middle">
  <thead >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Coin</th>
      <th scope="col">Price</th>
      
      <th scope="col">24h</th>
      <th scope="col">7d</th>
      <th scope="col">1y</th>
      <th scope="col">Mkt Cap</th>
      <th scope="col">Last 7Days</th>
    </tr>
  </thead>
<tbody>
  {list.map((items, index)=>{
    return(
    
      <tr key={items.id}>
      <th scope="row">{index +1}</th>
      <td><Link className='align-middle  text-dark ' to={items.id}>
        <img className='px-1' src={`${items.image.small} `} width="10%"/>
        {items.name} </Link></td>
      <td>$ {items.market_data.current_price.usd}</td> 
      <td>{parseFloat(items.market_data.price_change_percentage_24h).toFixed(2)} %</td>
      <td>{parseFloat(items.market_data.price_change_percentage_7d).toFixed(2)}%</td>
      <td>{parseFloat(items.market_data.price_change_percentage_1y).toFixed(2)}%</td>
      <td>${items.market_data.market_cap.usd}</td>
      <td><img src={`https://coingecko.com/coins/${items.market_data.market_cap_rank}/sparkline`} alt="a"/></td>
      
    </tr>
    
    )
  })}
   
     </tbody>
     </table>

    </div>
  )
}

export default CoinsTable
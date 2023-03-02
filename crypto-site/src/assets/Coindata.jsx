import {RingLoader} from "react-spinners"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Coindata() {
  const [data, setData]=useState({})
  const [loading, setloading]=useState(true)
  const param = useParams()
  
  
  
  useEffect(()=>{
        const url =`https://api.coingecko.com/api/v3/coins/${param.coinDetails}`
        axios.get(url)
        .then((res)=>{
          setData(res.data)
        setloading(false)
        })
        .catch((err)=>{console.log(err)})

},[])
console.log(data)





  return (
    <div className='container'>
      {loading ? 
        
        <RingLoader className="text-center" color="#36d7b7" />
        :
        <div className='d-flex justify-content-center '>
            <div><img src={data.image.large}  width="70%"/></div>
            <div className='align-self-center '>
              <h5>Rank : {data.market_cap_rank}</h5>
                <h3>{data.name} <span>{`(${data.symbol})`}</span></h3>
                <h6>{data.categories}</h6>
                <h6 className='d-flex justify-content-evenly'><h6>Price :</h6>% {data.market_data.current_price.usd} </h6>
            </div>
        </div>


        
         }
        <div className=' w-75 container py-3 '>
        <hr/>
      
        <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >

  </div>
</div>

        <div className='coin-data'>
            <h5 className='text-center '>24h Range</h5>
          <div className='d-flex  justify-content-evenly'>
            <div className='d-flex flex-column gap-2  ' >
            <h6 >Market Cap</h6>
          <h6>24 Hour Trading Vol </h6>
          <h6>Fully Diluted Valuation</h6>
          <h6>Circulating Supply</h6>
          <h6>Total Supply </h6>
          <h6>Max Supply </h6>
          </div>
          <div className='text-end d-flex flex-column gap-2'>
            <h6>Market Cap</h6>
          <h6>24 Hour Trading Vol </h6>
          <h6>Fully Diluted Valuation</h6>
          <h6>Circulating Supply</h6>
          <h6>Total Supply </h6>
          <h6>Max Supply </h6>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Coindata
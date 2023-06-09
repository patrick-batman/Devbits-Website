import React, { useState } from 'react'
import './watchlistcard.css'
import Form from '../../Form/Form'
import { Link } from 'react-router-dom'

const WatchlistCard = ({ element }) => {
  const [trigger, setTrigger] = useState(false)
  // const CompanyData = element["Company Data"];
  // const CompanyName = CompanyData['2. name'];
  // const QuoteData = element['Global Quote'];
  // const ChangePercentage = QuoteData['10. change percent'];
  // const Price = QuoteData['05. price'];
  // const CompanySymbol = QuoteData["01. symbol"]
  const CompanySymbol = element.stock_id;
  return (
    <div className='watchlist-card'>
      <div className='watchlist-card-content'>
        <div className='watchlist-card-company-name'>{CompanySymbol}</div>
      </div>
      <div className='watchlist-card-buttons'>
        <button onClick={() => {setTrigger(true)}} className='watchlist-card-button buy'>BUY</button>
        <button onClick={() => {setTrigger(true)}} className='watchlist-card-button sell'>SELL</button>
        <Link to={`/details/${CompanySymbol}`} className='watchlist-card-button graph'>DETAILS</Link>
      </div>
      <Form trigger={trigger} setTrigger={setTrigger} data={element} />
    </div>
  )
}

export default WatchlistCard
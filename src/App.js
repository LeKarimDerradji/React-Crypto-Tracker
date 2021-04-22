import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Coin from './Coin.js'
import Header from './Header'

const URL_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {

    axios.get(URL_API)
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    })
    .catch(e => console.log(e))

  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }


  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="coin-app">
      <div className="coin-search">

        <h1 className="coin-text">Search a currency</h1>

        <form action="">
        <input type="text" placeholder='Seach' 
        name="" 
        id=""
        className="coin-input" onChange={handleChange} />
        </form>

      </div>
        <Header/>
       {filteredCoins.map(coin => { // Mapping trought the API_Coin Object, Rendering wanted elements. 
        return (<Coin 
          key={coin.id} 
          name={coin.name} 
          symbol={coin.symbol} 
          price={coin.current_price} 
          image={coin.image}
          marketCap={coin.market_cap} 
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}/>)
       })}
    </div>
  );
}

export default App;

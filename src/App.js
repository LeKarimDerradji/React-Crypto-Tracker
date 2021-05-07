import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Coin from './Coin.js'
import Header from './Header'

const URL_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {

  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])
  const [search, setSearch] = useState('')
  let [sorted, setSorted] = useState(false);
  
  const handleChange = e => {
    setSearch(e.target.value)
    setFilteredCoins(coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())))
  }


  useEffect(() => {

    axios.get(URL_API)
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    })
    .catch(e => console.log(e))

  }, [])


console.log(filteredCoins)

const sortBy = (attr) => {
	const wrapper = () => {
		setSorted(!sorted)
		console.log(sorted)
		return sorted ?
			filteredCoins.sort((a,b) => (a[attr] > b[attr]) ? 1 : -1)
			: filteredCoins.sort((a,b) => (a[attr] < b[attr]) ? 1 : -1)
	}
	return wrapper
}



  return (
    <div className="coin-app">
      <div className="coin-search">

        <h1 className="coin-text">Search a currency</h1>

        <form action="">
        <input type="text" placeholder='Search' 
        name="" 
        id=""
        className="coin-input" onChange={handleChange} />
        </form>

      </div>
        <Header sortByPrice={sortBy('current_price')}
        sortByVolume={sortBy('total_volume')}
        sortByMarketCap={sortBy('market_cap')}
        sortByPriceChange={sortBy('price_change_percentage_24h')}/>
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

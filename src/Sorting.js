import App from './App.js'


const Sorting = () => {
    let [sorted, setSorted] = useState(false)

    const sortByPrice = () => {
        setSorted(!sorted)
        console.log(sorted)
        sorted ?
        setCoins(filteredCoins.sort((a, b) => (a.current_price > b.current_price) ? 1 : -1))
        : setCoins(filteredCoins.sort((a, b) => (a.current_price < b.current_price) ? 1 : -1))
    }
    return (
        <App sortByPrice={sortByPrice}/>
    )
}

export default Sorting
import React from 'react'
import './Header.css'

const Header = ({sortByPrice, sortByVolume, sortByMarketCap, sortByPriceChange}) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
              <div className="coin">
                <h1>Name</h1>
                <p className="coin-symbol"></p>
              </div>
                <div className="coin-data">
                    <button className="coin-price" onClick={sortByPrice}>Price</button>
                    <button className="coin-volume" onClick={sortByVolume}>Volume</button>
                    <button className="coin-percent" onClick={sortByPriceChange}>Price Change</button>
                    <button className="coin-marketcap" onClick={sortByMarketCap}>Market-cap</button>        
                </div>
            </div>
        </div>
    )
}

export default Header

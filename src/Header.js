import React from 'react'
import './Header.css'

const Header = ({sortByPrice}) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
              <div className="coin">
                <h1>Name</h1>
                <p className="coin-symbol"></p>
              </div>
                <div className="coin-data">
                    <button className="coin-price" onClick={sortByPrice}>Price</button>
                    <button className="coin-volume">Volume</button>
                     <button className="coin-percent">Price Change</button>
                    <button className="coin-marketcap">Market-cap</button>        
                </div>
            </div>
        </div>
    )
}

export default Header

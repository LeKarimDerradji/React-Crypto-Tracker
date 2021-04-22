import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
              <div className="coin">
                <h1>Name</h1>
                <p className="coin-symbol"></p>
              </div>
                <div className="coin-data">
                    <p className="coin-price">Price</p>
                    <p className="coin-volume">Volume</p>
                     <p className="coin-percent red">Price Change</p>
                    <p className="coin-marketcap">Market-cap</p>        
                </div>
            </div>
        </div>
    )
}

export default Header

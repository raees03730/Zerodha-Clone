import React from 'react'

function Hero () {
    return (
       <div className='container'>
        <div className='row p-5 mt-5 border-bottom text-center'>
            <h1>Pricing</h1>
            <h3 className='text-muted mt-3 fs-5'>
                Free equity investment and flat $20 trady and F&O trades
            </h3>
            <div className='row p-5 mt-5 text-center'>
                <div className='col-4 p-4'>
                    <img src="media/image/pricingEquity.svg"/>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free - $ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/image/intradayTrades.svg"/>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flats rs. $20 or 0.03% (Whichhever is lower) per executed order on intraday trades acros equity currently and commidity trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/image/pricingEquity.svg"/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutley free - $ 0 commission & DP charges.</p>
                </div>
                <div className='col-4 p-5'></div>
                <div className='col-4 p-5'></div>
                
            </div>
        </div>
       </div>
    )
}

export default Hero;
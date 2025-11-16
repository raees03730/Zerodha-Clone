import React from 'react'

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <div className='col-12'>
                    <h1>The Zerodha Universe</h1>
                    <p>
                        Extend your trading and investment experience even further with our partner platforms
                    </p>
                    
                    <div className='row mt-5'>

                        <div className='col-md-4 p-3'>
                            <img src="media/image/smallcaseLogo.png" alt="Smallcase Logo" className='img-fluid' style={{maxHeight: '60px', width: 'auto'}}/>
                            <p className='text-small text-muted mt-2'>Thematic investment platform</p>
                        </div>
                        <div className='col-md-4 p-3'>
                            <img src="media/image/streakLogo.png" alt="Streak Logo" className='img-fluid' style={{maxHeight: '60px', width: 'auto'}}/>
                            <p className='text-small text-muted mt-2'>Algo & strategy platform</p>
                        </div>
                        <div className='col-md-4 p-3'>
                            <img src="media/image/sensibullLogo.svg" alt="Sensibull Logo" className='img-fluid' style={{maxHeight: '60px', width: 'auto'}}/>
                            <p className='text-small text-muted mt-2'>Option trading  platform</p>
                        </div>
                        
                        
                        <div className='col-md-4 p-3'>
                            <img src="media/image/zerodhaFundhouse.png" alt="ZerodhaFundHouse Logo" className='img-fluid' style={{maxHeight: '60px', width: 'auto'}}/>
                            <p className='text-small text-muted mt-2'>Asset management</p>
                        </div>
                        <div className='col-md-4 p-3'>
                            <img src="media/image/goldenpiLogo.png" alt="Goldenpi Logo" className='img-fluid' style={{maxHeight: '60px', width: 'auto'}}/>
                            <p className='text-small text-muted mt-2'>Bonds tranding platform</p>
                        </div>
                        <div className='col-md-4 p-3'>
                            <img src="media/image/dittoLogo.png" alt="Ditto Logo" className='img-fluid' style={{maxHeight: '60px', width: 'auto'}}/>
                            <p className='text-small text-muted mt-2'>Thematic investment platform</p>
                        </div>
                        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Universe;
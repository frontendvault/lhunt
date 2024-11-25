import React from 'react'

const TokenDetails = () => {
  return (
    <div className='token-details  mx-auto flex night-sky-stars-bg'>
      <div className=' lg:w-[1185px] lg:h-[638px] mx-auto flex  justify-between p-20 text-white relative'>
        <div  className='flex flex-col'>
          <h2 className='uppercase'>Token Details</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quasi odio, maxime quibusdam est omnis magni dolores minus accusamus
            aliquam!
          </p>

          <div className='flex '>
            <div>
              <h4 className='text-3xl'>Token Name</h4>
              <p>LUCKYHUNTER</p>
            </div>
            <div>
              <h4 className='text-3xl'>Token Symbol</h4>
              <p>$LHUNT</p>
            </div>
            <div>
              <h4 className='text-3xl'>Token Type</h4> 
              <p>ETH</p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <h4 className='text-3xl'>Contact Token Address</h4>
              <p>e7d74fd9f22b499186aeac2efd686d27</p>
            </div>
            <div>
              <h4 className='text-3xl'>Decimals</h4> 
              <p>18</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col token-details-right absolute lg:right-[-150px] lg:w-[370px] lg:h-[510px] lg:p-16 text-center'>
          <div className='mb-4'>
            <h4 className='text-3xl'>Pre-sale Details</h4>
            <p>The pre-sale is live</p>
          </div>
          <div className='mb-4'>
            <h4 className='text-3xl'>Current $LHUNT Price</h4>
            <p>1 $LHUNT = $0.001</p>
          </div>
          <div className='mb-4'>
            <h4 className='text-3xl'>Exchange Listing Price</h4>
            <p>1 $LHUNT = $0.001</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenDetails

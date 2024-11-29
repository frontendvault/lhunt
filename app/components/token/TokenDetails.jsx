import Image from 'next/image'
import React from 'react'

const TokenDetails = () => {
  return (
    <div className='token-details  mx-auto  night-sky-stars-bg md:mt-48 md:pb-[300px]'>
      <div className=' w-[400px] lg:w-[1185px] h-[330px] lg:h-[638px] mx-auto flex  justify-between p-3 md:p-20 text-white relative mb-[200px]'>
        <div className='flex flex-col w-[95%] md:w-auto mt-6 md:mt-5 mx-auto'> 
          <div>
            <h2 className='text-[20px] md:text-6xl uppercase mb-1 md:mb-3'>Token Details</h2>
            <p className='text-[12px] md:text-xl md:w-[80%] truncate-on-mobile'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              quasi odio, maxime quibusdam est omnis magni dolores minus
              accusamus aliquam!
            </p>
          </div>
          <div className='flex text-[12px] md:text-3xl border-b border-yellow-600 border-dashed lg:w-[80%] mt-2 md:mt-6'>
            <div className='p-1  md:p-5 border-r border-yellow-600 border-dashed'>
              <h4 className='text-[13px] md:text-3xl mb-0 m:mb-4'>Token Name</h4>
              <p>LUCKYHUNTER</p>
            </div>
            <div className='p-1  md:p-5 border-r border-yellow-600 border-dashed'>
              <h4 className='text-[13px] md:text-3xl mb-0 m:mb-4'>Token Symbol</h4>
              <p>$LHUNT</p>
            </div>
            <div className='p-1  md:p-5'>
              <h4 className='text-[13px] md:text-3xl mb-0 m:mb-4'>Token Type</h4>
              <p>ETH</p>
            </div>
          </div>
          <div className='flex text-[12px] md:text-3xl lg:w-[80%] border-b border-yellow-600 border-dashed'>
            <div className='p-1  md:p-5 border-r border-b border-yellow-600 border-dashed'>
              <h4 className='text-[13px] md:text-3xl mb-0 m:mb-4'>
                Contact Token Address
              </h4>
              <p>e7d74fd9f22b499186aeac2efd686d27</p>
            </div>
            <div className='p-1  md:p-5'>
              <div className='mx-auto w-[165px]'>
                <h4 className='text-[13px] md:text-3xl mb-1 m:mb-4'>Decimals</h4>
                <p>18</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-col token-details-right absolute right-0 -bottom-[150px] md:bottom-auto lg:right-[-150px] w-[280px] lg:w-[370px] h-[270px] lg:h-[510px] lg:p-16 text-center '>
          <div>
            <Image
              src='/images/dice.png'
              width={400}
              height={300}
              className='absolute -top-2 md:-top-44 -left-[150px] md:left-0  '
            />
            <div className='mb-2 md:mb-4 mt-8'>
              <h4 className='text-[14px] md:text-3xl mb-0 md:mb-3'>Pre-sale Details</h4>
              <p>The pre-sale is live</p>
            </div>
            <div className='mb-2 md:mb-4'>
              <h4 className='text-[14px] md:text-3xl mb-0 md:mb-3'>Current $LHUNT Price</h4>
              <p>1 $LHUNT = $0.001</p>
            </div>
            <div className='mb-2 md:mb-4'>
              <h4 className='text-[14px] md:text-3xl mb-0 md:mb-3'>Exchange Listing Price</h4>
              <p>1 $LHUNT = $0.001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenDetails

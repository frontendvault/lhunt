import Image from 'next/image'
import React from 'react'

const FeaturedIn = () => {
  return (
    <div>
      <div className='container mx-auto text-center'>
        <div className=''>
          <h4 className='text-[40px] text-yellow-custom uppercase font-bold'>
            As Seen in
          </h4>
        </div>
        <div className='grid grid-cols-4'>
          <div className=''>
            <Image src='/images/brand1.svg' width={237} height={37} alt='' />
          </div>
          <div className=''>
            <Image src='/images/brand2.svg' width={172} height={61} alt='' />
          </div>
          <div className=''>
            <Image src='/images/brand3.svg' width={239} height={51} alt='' />
          </div>
          <div className=''>
            <Image src='/images/brand4.svg' width={212} height={62} alt='' />
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='text-right'>
            <Image src='/images/brand6.svg' width={280} height={64} alt='' />
          </div>

          <div className=' text-center'>
            <Image src='/images/brand5.svg' width={118} height={99} alt='' />
          </div>
          <div className='text-left'>
            <Image src='/images/brand7.svg' width={237} height={37} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedIn

import Image from 'next/image'
import { useState } from 'react'

export default function LuckhunterMetaverse () {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      imgSmall: '/images/lease-casino.png',
      imgBig: '/images/lease-own-big.png',
      title: 'OWN LEASE OR RENT CASINOS (slide 1)',
      description:
        'Nullam semper tempus sapien placerat accumsan. Sed pretium ut arcu vel fringilla. Duis accumsan, augue eget elementum dictum, libero odio lacinia felis.'
    },
    {
      imgSmall: '/images/customise-gaming-assets.png',
      imgBig: '/images/lease-own-big.png',
      title: 'OWN LEASE OR RENT CASINOS (slide 2)',
      description:
        'Nullam semper tempus sapien placerat accumsan. Sed pretium ut arcu vel fringilla. Duis accumsan, augue eget elementum dictum, libero odio lacinia felis.'
    },
    {
      imgSmall: '/images/lhunt-tokens.png',
      imgBig: '/images/lease-own-big.png',
      title: 'OWN LEASE OR RENT CASINOS (slide 3)',
      description:
        'Nullam semper tempus sapien placerat accumsan. Sed pretium ut arcu vel fringilla. Duis accumsan, augue eget elementum dictum, libero odio lacinia felis.'
    },
    {
      imgSmall: '/images/vip-rooms-events.png',
      imgBig: '/images/lease-own-big.png',
      title: 'OWN LEASE OR RENT CASINOS (slide 4)',
      description:
        'Nullam semper tempus sapien placerat accumsan. Sed pretium ut arcu vel fringilla. Duis accumsan, augue eget elementum dictum, libero odio lacinia felis.'
    }
  ]

  return (
    <div className='flex flex-col h-full space-y-6 casino-metaverse '>
      <div className=' lg:w-[1360px] mx-auto '>
        <div className='flex flex-col text-center text-white py-10 lg:w-[80%] lg:mx-auto'>
          <h3>What is LuckHunter Casino Metaverse?</h3>
          <p className='text-lg'>
            LuckHunter brings the top 5 iconic casino capitals of the world to a
            metaverse experience, where you can own, lease, or rent casinos and
            gaming assets using LHUNT tokens.
          </p>
        </div>
        <div className='flex flex-grow  p-6 rounded-lg w-[1320px] h-[810px] relative metaverse-holder lg:-mt-[100px] pt-10'>
          <div className=' flex justify-center mx-auto '>
            <Image
              src={tabs[activeTab].imgBig}
              width={1217}
              height={573}
              alt=''
            />
          </div>
          <div className='flex  text-left absolute p-20 items-end h-full mb-[220px]'>
            <div className='flex justify-between'>
              <h3 className=' font-bold mb-4 md:w-[50%] text-yellow-custom '>
                {tabs[activeTab].title}
              </h3>
              <p className='md:w-[30%] text-white'>
                {tabs[activeTab].description}{' '}
              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center space-x-4 '>
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              // css only: bg-gradient-to-b from-fuchsia-800/50 via-fuchsia-900/20
              className={`metaverse-item relative flex-col flex justify-center rounded-lg text-center text-sm font-medium   ${
                activeTab === index ? ' ' : ''
              }`}
            >
              <div>
                {' '}
                <Image
                  src={tab.imgSmall}
                  width={159}
                  height={185}
                  alt=''
                  className=' mx-auto p-0 m-0 my-auto -mt-0'
                  style={{ width: 'auto', width: 'auto' }}
                />
              </div>
              <p className='px-10 text-2xl text-white -mt-50'>{tab.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

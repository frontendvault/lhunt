import Image from 'next/image'
import { useState } from 'react'

export default function PersonalizeCasino () {
  const [mainTab, setMainTab] = useState(0) // Main tab index
  const [nestedTab, setNestedTab] = useState(0) // Nested tab index

  const mainTabs = ['Skins', 'DECORS', 'THEMES'] // Main tab labels
  const nestedTabs = [
    {
      section: 'Content for Tab 1',
      items: [
        {
          img: '/images/personalise-casino-nested-item4.png',
          content: 'content1'
          //   imgBig: '/images/personalise-casino-nested-item4.png'
        },
        {
          img: '/images/personalise-casino-nested-item4.png',
          content: 'Nested Tab 2 Content for Tab 1'
          //   imgBig: '/images/personalise-casino-nested-item4.png'
        },
        {
          img: '/images/personalise-casino-nested-item4.png',
          content: 'Nested Tab 3 Content for Tab 1'
          //   imgBig: '/images/personalise-casino-nested-item4.png'
        },
        {
          img: '/images/personalise-casino-nested-item4.png',
          content: 'Nested Tab 4 Content for Tab 1'
          //   imgBig: '/images/personalise-casino-nested-item4.png'
        },
        {
          img: '/images/personalise-casino-nested-item4.png',
          content: 'Nested Tab 5 Content for Tab 1'
          //   imgBig: '/images/personalise-casino-nested-item4.png'
        }
      ]
    },
    {
        section: 'Content for Tab 1',
        items: [
          {
            img: '/images/personalise-casino-nested-item4.png',
            content: 'content1'
            //   imgBig: '/images/personalise-casino-nested-item4.png'
          },
          {
            img: '/images/personalise-casino-nested-item4.png',
            content: 'Nested Tab 2 Content for Tab 2'
            //   imgBig: '/images/personalise-casino-nested-item4.png'
          },
          {
            img: '/images/personalise-casino-nested-item4.png',
            content: 'Nested Tab 3 Content for Tab 2'
            //   imgBig: '/images/personalise-casino-nested-item4.png'
          },
          {
            img: '/images/personalise-casino-nested-item4.png',
            content: 'Nested Tab 4 Content for Tab 2'
            //   imgBig: '/images/personalise-casino-nested-item4.png'
          },
          {
            img: '/images/personalise-casino-nested-item4.png',
            content: 'Nested Tab 5 Content for Tab 2'
            //   imgBig: '/images/personalise-casino-nested-item4.png'
          }
        ]
      },
      {
        section: 'Content for Tab 1',
        items: [
          {
            img: '/images/personalise-casino-nested-item4.png',
            content: 'Nested Tab 1 Content for Tab 3'
            //   imgBig: '/images/personalise-casino-nested-item4.png'
          },
          {
            img: '/images/personalise-casino-nested-item4.png',
            content: 'Nested Tab 2 Content for Tab 3'
            //   imgBig: '/images/personalise-casino-nested-item4.png'
          },
          {
            img: '/images/personalise-casino-nested-item4.png',
            content: 'Nested Tab 3 Content for Tab 3'
            //   imgBig: '/images/personalise-casino-nested-item4.png'
          },
          {
            img: '/images/personalise-casino-nested-item4.png',
            content: 'Nested Tab 4 Content for Tab 3'
            //   imgBig: '/images/personalise-casino-nested-item4.png'
          },
          {
            img: '/images/personalise-casino-nested-item4.png',
            content: 'Nested Tab 5 Content for Tab 3'
            //   imgBig: '/images/personalise-casino-nested-item4.png'
          }
        ]
      },
      
  ]

  return (
    <div className='p-4 space-y-6 casino-empire-bg lg:h-[800px]'>
      <div className='container mx-auto'>
        <h2 className=' text-white flex justify-between '>
          <span className='lg:text-[165px]'>Personalize</span>
          <span className='lg:text-[70px]'>Your Casino Empire</span>
        </h2>
        <div className='flex justify-center space-x-2'>
          {mainTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setMainTab(index)
                setNestedTab(0) // Reset nested tab on main tab switch
              }}
              className={` px-5 py-4 rounded-lg md:text-[40px] uppercase font-bold md:w-[420px] text-left tabbed-main-bg md:h-[170px] text-white flex justify-between items-center ${
                mainTab === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {tab}

              <Image src={"/images/yellow-bullet.png"} width={52} height={52}/>
            </button>
          ))}
        </div>

        <div className=' p-6 rounded-lg text-center flex items-center justify-center h-[600px] casino-bg-shade'>
          <Image src={'/images/casino-1.png'} height={403} width={776} />
         <div className="absolute mt-20">
         <h2 className='text-xl font-bold mb-4'>
            {nestedTabs[mainTab].section}
          </h2>
          <p>{nestedTabs[mainTab].items[nestedTab].content}</p>
         </div>
        </div>

        <div className='flex justify-center space-x-4'>
          {nestedTabs[mainTab].items.map((tab, index) => (
            <button
              key={index}
              onClick={() => setNestedTab(index)}
              className={`border-0 relative lg:w-[240px] lg:h-[260px] rounded-full overflow-hidden  nested-tab-item-bg flex items-center ${
                nestedTab === index ? 'border-blue-500' : 'border-gray-300'
              }`}
            >
              <img
                src={tab.img}
                alt={`Nested Tab ${index + 1}`}
                className=' lg:w-[206px] lg:h-[206px] object-cover -mt-3'
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

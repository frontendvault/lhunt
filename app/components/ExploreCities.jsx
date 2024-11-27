import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const ExploreCities = () => {
  const cards = [
    {
      image: '/images/lockhunter-events2.png',
      title: 'Vegas Nova',
      description:
        'A futuristic city of lights where bold neon signs and larger-than-life casinos dominate the skyline. Vegas Nova brings high-energy entertainment, endless excitement, and luxury gaming experiences, making it the ultimate destination for thrill-seekers and high-rollers alike',
      link: '#'
    },
    {
      image: '/images/lockhunter-events2.png',
      title: 'Monarch Isle',
      description:
        'Monarch Isle is a city of elegance and grandeur, ofering a refned atmosphere where the elite gather to play. With its classic European architecture, sophisticated casinos, and exclusive events, this city promises an experience of opulence and high-stakes gaming at its fnest.',
      link: '#'
    },
    {
      image: '/images/lockhunter-events2.png',
      title: 'Macaria',
      description:
        'A luxurious city blending modern elegance with rich cultural heritage, Macaria is the top spot for high-stakes gambling. Known for its extravagant resorts and exclusive VIP rooms, this city caters to those seeking a premium gaming experience with an exotic, cosmopolitan twist.',
      link: '#'
    },
    {
      image: '/images/lockhunter-events2.png',
      title: 'Skyline Sands',
      description:
        'Nam non quam vitae nisi porta gravida sed non velit. Donec eu volutpat justo, in vulputate libero. Aenean dictum interdum nunc, eget accumsan dui eleifend eget. Phasellus quis auctor ipsum. Fusce lacus mauris.',
      link: '#'
    }
  ]


  // Slick slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640, // Adjust for mobile
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <div className='bg-black text-white exclusive-events'>
      <div className=' lg:w-[1600px] mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h2 className=''>Host Exclusive Events</h2>
            <p>
              Create VIP spaces for high-rollers, customize them with luxury
              decor, and host tournaments or private events to attract elite
              players.
            </p>
          </div>
          <div>
            <button className='px-6 py-2 text-white big-button md:h-[100px] md:w-[430px] '>
              EXPLORE THE CITIES
            </button>
          </div>
        </div>

        <Slider {...settings} className='space-x-4'>
          {cards.map((card, index) => (
            <div key={index} className='p-4'>
              <div className='flex  rounded-lg shadow-md overflow-hidden mt-2 ml-5 pr-24 flex-col'>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={296}
                  height={318}
                  className='mr-2'
                />
                <div className=' p-4 flex flex-col'>
                  <h3 className='text-3xl font-semibold mb-2'>{card.title}</h3>
                  <p className='flex-grow text-base leading-6'>
                    {card.description}
                  </p>
                  <a
                    href={card.link}
                    className='mt-4 text-yellow-custom text-base'
                  >
                    PLAY NOW AT LUCKHUNTER CASINO
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ExploreCities;

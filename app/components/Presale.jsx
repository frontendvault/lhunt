import React from 'react'

const Presale = () => {
  const boxes = [
    {
      number: 1,
      heading: 'Connect Your Wallet',
      description: 'Description of box 1, explaining its features and benefits.'
    },
    {
      number: 2,
      heading: 'Choose your payment method',
      description:
        'Curabitur urna libero, malesuada eget nisl vitae, varius posuere.'
    },
    {
      number: 3,
      heading: 'ClaiM you $LHUNT',
      description:
        'Curabitur urna libero, malesuada eget nisl vitae, varius posuere tortor. '
    }
  ]

  return (
    <div className='presale-bg bg-black'>
      <div className='container mx-auto px-6 py-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Left Column */}
          <div className='flex-1 text-white'>
            <h2 className='font-semibold  mb-4 -mt-6'>PRESALE IS LIVE</h2>
            <p className=' mb-6'>
              This is the description section that gives a brief overview of
              what the boxes below are about and how they relate to the main
              heading.
            </p>
            {/* Boxes */}
            <div className='space-y-4'>
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className='shadow-md p-4 bg-gradient-to-b from-fuchsia-900/50 to-neutral-900/90'
                >
                  <span className='text-4xl font-black text-yellow-custom'>
                    0{box.number}
                  </span>
                  <h3 className='text-3xl font-semibold mt-2'>{box.heading}</h3>
                  <p className='text-base  mt-2'>{box.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Empty or for additional content) */}
          <div className='flex-1 presale-form-bg lg:w-[700px] lg:h-[900px] flex items-center justify-center'>
            <form className='p-10 lg:w-[88%]  mx-auto  shadow rounded space-y-6 border border-sky-500 text-white bg-gradient-to-r from-sky-400/20 to-sky-600/30 inner-shadow'>
            <div>
                <div className='flex justify-between'>
                  <span>Presale Stage 1</span>
                  <span>Raised :$40560.36</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                  <div
                    className='bg-fuchsia-700 h-2.5 rounded-full w-[50%]'
                  ></div>
                </div>
                <div className='flex justify-end'>
                  <span>Presale Stage 1</span>
                  <span>Target : $252222</span>
                </div>
              </div>

              <h3 className='text-2xl font-bold text-center text-white'>
                1 LHUNT = $0.001
              </h3>

              {/* Row with 2 Buttons */}
              <div className='flex justify-between space-x-4  '>
                <button
                  type='button'
                  className='flex-grow py-2 text-white font-semibold rounded shadow border border-gray-50'
                >
                  Listing Price $0.001(+400%)
                </button>
                <button
                  type='button'
                  className='flex-grow py-2  text-white font-semibold rounded shadow border border-gray-50'
                >
                  Next Price $0.001(+400%)
                </button>
              </div>

              {/* Row with 5 Buttons */}
              <div className='grid grid-cols-5 gap-4'>
                <button
                  type='button'
                  className='py-2 border border-gray-50 hover:bg-red-500 text-white font-semibold rounded shadow'
                >
                  ETH
                </button>
                <button
                  type='button'
                  className='py-2 border border-gray-50 hover:bg-yellow-500 text-white font-semibold rounded shadow'
                >
                  USDT
                </button>
                <button
                  type='button'
                  className='py-2 border border-gray-50 hover:bg-blue-500 text-white font-semibold rounded shadow'
                >
                  BNB
                </button>
                <button
                  type='button'
                  className='py-2 border border-gray-50 hover:bg-green-500 text-white font-semibold rounded shadow'
                >
                  MATIC
                </button>
                <button
                  type='button'
                  className='py-2 border border-gray-50 hover:bg-purple-500 text-white font-semibold rounded shadow'
                >
                  CARD
                </button>
              </div>

              {/* Row with Label and Input */}
              <div className='space-y-2'>
                <label htmlFor='inputField' className='block font-medium '>
                  <span>You Send</span> <span>Max : 64651.8</span>
                </label>
                <input
                  type='text'
                  id='inputField'
                  placeholder='atleast 0.0001'
                  className='w-full p-2 border rounded shadow focus:ring focus:ring-blue-300'
                />
                <label htmlFor='inputField' className='block font-medium '>
                  <span>You Send</span> <span>Max : 64651.8</span>
                </label>
                <input
                  type='text'
                  id='inputField'
                  placeholder='atleast 0.0001'
                  className='w-full p-2 border rounded shadow focus:ring '
                />
              </div>

              {/* Button at the End */}
              <div className='text-center'>
                <button
                  type='submit'
                  className='w-full py-2  text-white font-bold rounded shadow border border-gray-50'
                >
                  CONNECT WALLET
                </button>
                <p>[0x16977792...5ABF]</p>
                <p>Do not pay directly to this address</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presale

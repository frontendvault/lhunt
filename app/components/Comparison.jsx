import Image from 'next/image'
import React from 'react'

const Comparison = () => {
  const data = [
    
    {
      heading: 'Accepts token',
      columns: [true, true, true, false, true, false]
    },
    {
      heading: 'Own Token',
      columns: [true, false, true, true, false, true]
    },
    {
      heading: 'Affiliate System',
      columns: [true, true, false, true, true, true]
    },
    {
      heading: 'Revenue Sharing',
      columns: [true, false, false, true, true, false]
    },
    {
      heading: 'high Roller Rewards',
      columns: [true, true, true, false, true, true]
    }
  ]

  return (
    <div className='luckhunter-comparison-bg'>
      <div className='container mx-auto px-4 py-8'>
        {/* Comparison Table */}
        <h2 className='text-yellow-custom'>
          WHAT Sets Luckhunter apart form others
        </h2>
        <div className='overflow-x-auto bg-sky-500/[.4]'>
          <table className='min-w-full table-auto'>
            <thead>
              <tr className=''>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-600'>
                  <h6>Comparison</h6>
                </th>
                <th className='px-6 py-3 text-center text-sm font-medium text-gray-600'>
                  <Image
                    src={'/images/comparison-item-1.svg'}
                    width={68}
                    height={64}
                    alt=''
                  />
                </th>
                <th className='px-6 py-3 text-center text-sm font-medium text-gray-600'>
                  <Image
                    src={'/images/comparison-item-1.svg'}
                    width={68}
                    height={64}
                    alt=''
                  />
                </th>
                <th className='px-6 py-3 text-center text-sm font-medium text-gray-600'>
                  <Image
                    src={'/images/comparison-item-2.svg'}
                    width={68}
                    height={64}
                    alt=''
                  />
                </th>
                <th className='px-6 py-3 text-center text-sm font-medium text-gray-600'>
                  <Image
                    src={'/images/comparison-item-3.svg'}
                    width={68}
                    height={64}
                    alt=''
                  />
                </th>
                <th className='px-6 py-3 text-center text-sm font-medium text-gray-600'>
                  <Image
                    src={'/images/comparison-item-4.svg'}
                    width={68}
                    height={64}
                    alt=''
                  />
                </th>
                <th className='px-6 py-3 text-center text-sm font-medium text-gray-600'>
                  <Image
                    src={'/images/comparison-item-5.svg'}
                    width={68}
                    height={64}
                    alt=''
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className='border-t border-gray-300 text-white'>
                  {/* Feature heading column */}
                  <td className='px-6 py-4 text-sm font-medium '>
                    <h6>{row.heading}</h6>
                  </td>
                  {/* Data columns with checkmarks (✓) or crosses (×) */}
                  {row.columns.map((value, index) => (
                    <td key={index} className='px-6 py-4 text-center'>
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-full ${
                          value
                            ? 'bg-yellow-custom text-white'
                            : 'bg-white text-black'
                        }`}
                      >
                        {value ? '✓' : '×'}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Comparison

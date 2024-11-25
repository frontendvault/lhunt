import React from 'react'

const Footer = () => {
  return (
    <footer className=' text-white footer-bg'>
      <div className='container mx-auto px-4 common-blue-bg p-20'>
        {/* First Row: Heading */}
        <div className='text-center mb-6'>
          <h2 className='text-2xl font-bold'>Stay Connected with Us</h2>
        </div>

        {/* Second Row: Columns */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left'>
          {/* First Column */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Our Story</h3>
            <p className='text-gray-400'>
              Integer sagittis magna sapien, ac congue ex faucibus vitae. Duis
              eget sagittis nisi. Mauris viverra purus non turpis fermentum,
              eget dapibus metus blandit. Nunc eu leo lacinia.
            </p>
          </div>

          {/* Second Column: Links */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  Walllet
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  How To Buy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  Visit
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  Casino
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  Audit
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>HELP</h3>
            <p className='text-gray-400'>
              If you have any issues contact us at{' '}
              <a href='#'>help@luckhunter.com</a> our our live chat support
            </p>
          </div>
        </div>

        {/* Third Row: Copyright */}
        <div className='mt-6 text-center border-t border-gray-700 pt-4'>
          <p className='text-gray-400'>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

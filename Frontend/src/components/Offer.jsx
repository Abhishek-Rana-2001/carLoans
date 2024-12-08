import React from 'react'

const Offer = () => {
  return (
    <div className='relative p-20 text-center text-white' style={{backgroundImage : "url(/CarSpeeding.jpg)", backgroundSize:"cover", backgroundPosition:"center"}}>
      <div className='absolute inset-0 backdrop-blur-sm'></div>
        <div className="relative z-10">
          <h1 className='text-3xl font-semibold'>Congrats, You are eligible for a car loan</h1>
          <h2 className='mt-3 text-xl'>Our representative will get in touch with you shortly</h2>
        </div>
    </div>
  )
}

export default Offer

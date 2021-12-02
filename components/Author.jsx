import React from 'react'
import Image from 'next/image'


const Author = ({ author }) => {
  return (
    <div className='text-center mt-12 mb-8 p-6 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-2 right-0 -top-7'>
        <Image unoptimized src={author.photo.url} alt={author.name} height='70px' width='70px' className='align-middle rounded-full' />
      </div>
        <h3 className='text-white my-4 text-xl font-bold'>{ author.name}</h3>
        <p className='text-white text-lg'>{ author.bio }</p>
    </div>
  )
}

export default Author

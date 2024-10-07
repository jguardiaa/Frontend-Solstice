import React from 'react'

const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] bg-[radial-gradient(circle, #ffffff, rgba(255, 255, 255, 0))] shadow-[0px_0px_12px_#8c45ff]"> <div className='absolute inset-0'>
            <div className='border border-white/20 absolute inset-0 rounded-lg '>
            </div>
          </div>
            <span>{props.children}</span></button>
  )
}

export default Button
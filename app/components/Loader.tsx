"use client"
import { SyncLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='h-[70vh] flex flex-col justify-center items-center'>
    <SyncLoader color='#36d7b7' speedMultiplier={1}/>
  </div>
  )
}

export default Loader
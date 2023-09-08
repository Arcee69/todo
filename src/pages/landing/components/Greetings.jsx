import React, { useEffect, useState } from 'react'

import Plus from "../../../assets/icons/plus.svg"
import ModalPop from '../../../components/modal/modalPop'
import NewTask from './NewTask'

const Greetings = () => {
    const [timeOfDay, setTimeOfDay] = useState("")
    const [openModal, setOpenModal] = useState(false)

    const currentTime = new Date().getHours() // 22 
    // console.log(currentTime, "currentTime")
    
    const getTimeOfDay = () => {
        if(currentTime < 12) {
            setTimeOfDay("Morning")
        } else if((currentTime >= 12) && (currentTime <= 16)) {
            setTimeOfDay("Afternoon")
        } else {
            setTimeOfDay("Evening")
        }
    }

    useEffect(() => {
        getTimeOfDay()
    }, [])


  return (
    <div className='w-full mt-12 flex justify-between items-center xs:mx-4 lg:mx-8'>
        <div className='xs:w-6/12  lg:w-4/12 flex flex-col' >
            <p className='text-GRAY-_100 font-semibold xs:text-lg lg:text-3xl'>Good {timeOfDay}! 👋</p>
            <p className='text-sm text-GRAY-_200 ml-1'>You got some task to do.</p>
        </div>
        <div className='xs:w-5/12 md:w-3/12 lg:w-2/12 flex'>
            <button 
                type='button'
                onClick={() => setOpenModal(true)} 
                className='bg-primary lg:w-[166px] outline-none rounded border-[1px] border-solid border-primary h-[30px] flex items-center py-2.5 xs:px-2 md:px-4'
            >
                <img src={Plus} alt='plus' className='w-[16px]' /> 
                <span className='xs:text-xs md:text-sm text-white font-medium'>Create New Task</span>
            </button>
        </div>
        <ModalPop isOpen={openModal}>
            <NewTask handleClose={() => setOpenModal(false)} />
        </ModalPop>

    </div>
  )
}

export default Greetings
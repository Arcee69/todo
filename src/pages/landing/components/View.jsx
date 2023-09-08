import React, { useEffect, useState } from 'react'

import Calender from "../../../assets/icons/calendar.svg"
import Clock from "../../../assets/icons/clock.svg"
import ModalPop from '../../../components/modal/modalPop'

import Edit from './Edit'

const View = ({ handleClose, data }) => {

    const [openEditModal, setOpenEditModal] = useState(false);

    const DeleteTodo = (value) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${value?.id}`, {
            method: 'DELETE',
        })
        .then((res) => {
            // console.log(res, "response")
            alert("Task Deleted");
            if(res?.status === 200) {
                handleClose()
            }
        })
        .catch((err) => {
            // console.log(err, "err");
            alert("An Error Occured")
        })
    }


  return (
    <>
        <div 
            className='flex flex-col bg-white rounded w-8/12 md:w-[394px] xs:h-[250px] md:h-[256px] p-8'
        >
            <div 
                className='text-black cursor-pointer flex text-base font-semibold justify-end' 
                onClick={handleClose}
            >
                X
            </div>
            <div className='flex flex-col gap-5'>
                <p className='font-bold text-lg text-GRAY-_800'>{data?.title}</p>
                <div className='flex gap-2'>
                    <img src={Calender} alt='calender' />
                    <p className='text-base text-GRAY-_800'>20th January 2023</p>
                </div>
                <div className='flex gap-2'>
                    <img src={Clock} alt='clock' />
                    <p className='text-base text-GRAY-_800'>8:00 - 10:00 am</p>
                </div>
            </div>
            <div className='w-full flex xs:mt-4 md:mt-5 lg:mt-5 gap-14'>
                <button 
                    type="submit" 
                    className="w-4/12 bg-white border p-3 text-black text-sm rounded  font-semibold"
                    style={{ width: "150px" }}
                    onClick={() => DeleteTodo(data)}
                >
                    Delete
                </button>
                <button 
                    type="submit" 
                    className="w-4/12 bg-primary border-none p-3 text-white text-sm rounded font-semibold"
                    style={{ width: "150px" }}
                    onClick={() => {setOpenEditModal(true)}}
                >
                    Edit
                </button>
            </div>
        </div>

        <ModalPop isOpen={openEditModal}>
            <Edit handleClose={() => setOpenEditModal(false)} data={data} />
        </ModalPop>
    </>
  )
}

export default View
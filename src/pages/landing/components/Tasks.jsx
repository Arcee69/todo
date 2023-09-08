import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment';
import ReactPaginate from 'react-paginate';

import ModalPop from '../../../components/modal/modalPop';
import View from './View';

const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10)
    const [loading, setLoading] = useState(false);
    const [month, setMonth] = useState("");
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState([]);

    const [itemOffset, setItemOffset] = useState(0);

    const updateMonth = new Date().getMonth();

    const handleCheckbox =() => {
        setCheckboxValue(prevCheck => !prevCheck)
    }

    // console.log(checkboxValue, "checkboxValue")

    const displayMonth = () => {
        if(updateMonth === 0) {
            setMonth("January")
        } else if(updateMonth === 1) {
            setMonth("Feburary")
        } else if(updateMonth === 2) {
            setMonth("March")
        } else if(updateMonth === 3) {
            setMonth("April")
        } else if(updateMonth === 4) {
            setMonth("May")
        } else if (updateMonth === 5) {
            setMonth("June")
        } else if(updateMonth === 6) {
            setMonth("July")
        } else if(updateMonth === 7) {
            setMonth("August")
        } else if(updateMonth === 8) {
            setMonth("September")
        } else if(updateMonth === 9) {
            setMonth("October")
        } else if(updateMonth === 10) {
            setMonth("November")
        } else if(updateMonth === 11) {
            setMonth("December")
        }
    }

    const getYear = new Date().getFullYear();
   

    function getThisWeekDates() {
        let weekDates= []; 
      
        for (var i = 1; i <= 7; i++) {
          weekDates.push(moment().day(i)); 
        }
      
        return weekDates; 
      }
      
      let days = []
      
      let thisWeekDates = getThisWeekDates();
      

        thisWeekDates.map((items) => {
            let date = new Date(items?._d)
            if (date.getDay() === 1){
                return days.push({
                    label: "Mon",
                    value: new Date(items?._d).getDate()
                })
            } 
            if (date.getDay() === 2 ) {
                return days.push({
                    label: "Tue",
                    value: new Date(items?._d).getDate()
                  })
            }
            if (date.getDay() === 3) {
                return days.push({
                    label: "Wed",
                    value: new Date(items?._d).getDate()
                  })
            }
            if (date.getDay() === 4) {
                return days.push({
                    label: "Thurs",
                    value: new Date(items?._d).getDate()
                  })
            }
            if (date.getDay() === 5) {
                return days.push({
                    label: "Fri",
                    value: new Date(items?._d).getDate()
                  })
            }
            if (date.getDay() === 6) {
                return days.push({
                    label: "Sat",
                    value: new Date(items?._d).getDate()
                  })
            }
            if (date.getDay() === 0) {
                return days.push({
                    label: "Sun",
                    value: new Date(items?._d).getDate()
                  })
            }
            
        });


    const getTasks = async () => {
        await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            // console.log(res.data, "gallas")
            setTasks(res.data)
        })
    };

    useEffect(() => {
        getTasks();
        displayMonth()
    }, [])


    //Get Current data
    const endOffset = itemOffset + perPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentData = tasks.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(tasks.length / perPage);


    //Change Page 
    const handlePageClick = (event) => {
        const newOffset = (event.selected * perPage) % tasks.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };

  return (
    <div className=''>
        <div className='flex flex-col mb-5 gap-4'>
            <p className='font-medium text-GRAY-_400 text-base'>{month + " " + getYear}</p>
            <div className=''>
                <ul className='flex xs:gap-3 md:gap-5'>
                    {days.map((item) => (
                        <li 
                            key={item?.label} 
                            className='xs:w-1/12 md:w-[62px] rounded xs:p-1 lg:p-4 border-[1px] hover:bg-primary border-solid flex flex-col items-center border-GRAY-_200'
                        >
                            <p className='xs:text-xs lg:text-sm font-medium text-GRAY-_600 hover:text-white'>{item?.label}</p>
                            <p className='xs:text-xs lg:text-sm font-medium text-GRAY-_600 hover:text-white'>{item?.value}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <p className='font-medium text-GRAY-_400 text-base mb-4'>My Tasks</p>
        <div className='mb-4'>
            <ul className=' grid grid-cols-1 gap-4'>
                {
                    currentData?.length > 0 ? (
                        currentData?.map((items) => (
                            <li 
                                className='bg-GRAY-_300 cursor-pointer lg:w-[842px] h-[72px] rounded flex justify-between items-center py-4 px-6' 
                                key={items?.id}
                                onClick={() => {setOpenModal(true); setData(items)}}
                            >
                                <div className='flex items-center gap-3'>
                                    <input type='checkbox' onChange={handleCheckbox} />
                                    <div className='flex flex-col gap-3'>
                                        <p className="text-GRAY-_400 font-medium text-sm">{items?.title}</p>
                                        <p className='text-GRAY-_500 text-sm'>10:30 am - 11:30 am</p>
                                    </div>
                                </div>
                                <p className='text-GRAY-_500'>Today</p>
                            </li>
                        ))
                    ) : <p className='text-2xl font-semibold'>No Task Available</p>
                }
            </ul>
        </div>

        <div className='mx-auto mb-5'>
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            className='w-full flex justify-between lg:mx-8 '
            pageCount={pageCount}
            previousLabel="< Previous"
            renderOnZeroPageCount={null}
        />

        </div>

        <ModalPop isOpen={openModal}>
            <View handleClose={() => setOpenModal(false)} data={data} />
        </ModalPop>

    </div>
  )
}

export default Tasks
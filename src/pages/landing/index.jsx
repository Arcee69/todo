import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

import Greetings from './components/Greetings'
import Tasks from './components/Tasks'


const Todo = () => {
  return (
    <div className='w-full h-full'>
        <Greetings />
        <div className='w-12/12 flex justify-between xs:mx-4 md:mx-8  overflow-hidden p-1 mt-8'>
            <div className='xs:w-full lg:w-7/12'>
                <Tasks />
            </div>
            <div className='xs:hidden lg:block lg:w-3/12'>
                <Calendar />
            </div>
        </div>
    </div>
  )
}

export default Todo
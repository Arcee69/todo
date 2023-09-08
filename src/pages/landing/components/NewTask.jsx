import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from "yup"

const NewTask = ({ handleClose }) => {
    
  const formValidationSchema = Yup.object().shape({
    task: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    startTime: Yup.string(),
    endTime: Yup.string()
  });

  const submitForm = async(values, actions) => {
 
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title: values?.task,
            completed: false,
            date: values?.date,
            startTime: values?.startTime,
            endTime: values?.endTime
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res) => {
        alert("Task Created");
        // console.log(res, "res")
        actions.resetForm();
    })
    .catch((err) => {
        alert("An Error Occured")
        // console.log(err, "err")
    })
  }

  return (
    <div className='flex flex-col bg-white rounded w-8/12 md:w-[394px] xs:h-[450px] md:h-[400px] p-8 '>
        <div className='flex items-center justify-between' >
            <p className='text-xl text-GRAY-_400 font-medium'>Add Task</p>
            <div className='text-black cursor-pointer flex text-base font-semibold justify-end' onClick={handleClose}>X</div>
        </div>
        <div>
            <Formik
              initialValues={{
                task: "",
                date: "",
                startTime: "",
                endTime: "",
              }}
              validationSchema={formValidationSchema}
              enableReinitialize={true}
              onSubmit={(values, actions) => {
                  window.scrollTo(0, 0);
                  // console.log(values, "ruger");
                  submitForm(values, actions)
              }}
          >
              {({
                  handleSubmit,
                  handleChange,
                  dirty,
                  isValid,
                  setFieldValue,
                  errors,
                  touched,
                  // setFieldTouched,
                  values,
              }) => (
                  <Form onSubmit={handleSubmit} className="mt-2  ">
                      <div className='flex flex-col md:items-center xs:gap-4  lg:gap-8'>

                        <div className='flex flex-col '>
                          <textarea
                            name="task"
                            placeholder=""
                            type="text"
                            rows="5"
                            className="w-[250px] md:w-[340px] rounded h-[150px] bg-GRAY-_700 border mt-1.5 py-2.5 px-1.5 outline-none"                               
                            value={values.task}
                            onChange={handleChange}
                          >
                          </textarea>
                          {errors.task && touched.task ? 
                            <div className='text-RED-_100'>{errors.task}</div> 
                            : null
                          }
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>

                          <div className='flex flex-col '>
                            <input
                              name='date' 
                              type='date'
                              placeholder=''
                              className='w-[100px] h-[40px] rounded mt-1.5 py-1 border  bg-white px-1.5 outline-none'
                              value={values?.date}
                              onChange={handleChange}
                            />
                            {errors.date && touched.date ? 
                              <div className='text-RED-_100'>{errors.date}</div> 
                              : null
                            }
                          </div>

                          <div className='flex flex-col '>
                            <input
                              name='startTime' 
                              type='time'
                              placeholder=''
                              className='w-[100px] h-[40px] rounded mt-1.5 py-1 border  bg-white px-1.5 outline-none'
                              value={values?.startTime}
                              onChange={handleChange}
                            />
                            {errors.startTime && touched.startTime ? 
                              <div className='text-RED-_100'>{errors.startTime}</div> 
                              : null
                            }
                          </div>

                          <div className='flex flex-col '>
                            <input
                              name='endTime' 
                              type='time'
                              placeholder='Your PhoneNumber*'
                              className='w-[100px] h-[40px] rounded mt-1.5 py-1 border  bg-white px-1.5 outline-none'
                              value={values?.endTime}
                              onChange={handleChange}
                            />
                            {errors.endTime && touched.endTime ? 
                              <div className='text-RED-_100'>{errors.endTime}</div> 
                              : null
                            }
                          </div>
                        
                        </div>

                    </div>

                    <div className='w-full flex xs:mt-4 md:mt-5 lg:mt-5 justify-center gap-14'>
                        <button 
                            type="button" 
                            className="w-4/12 bg-white border p-3 text-black text-sm rounded  font-semibold"
                            style={{ width: "150px" }}
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="w-4/12 bg-primary border-none p-3 text-white text-sm rounded font-semibold"
                            style={{ width: "150px" }}
                        >
                            Add
                        </button>
                    </div>
                  </Form>
              )}
            </Formik>

        </div>

    </div>
  )
}

export default NewTask
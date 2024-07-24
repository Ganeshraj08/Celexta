import React, { useState } from 'react'

const Login = () => {
  const [data,SetData] = useState({
    Email:"",
    Password:""
   
  })
  const handleChange = (e)=>
  {
    const { name, value } = e.target;
    SetData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div className='bg-background'>
      <div className='flex  gap-2 justify-center  '>
        <h6 className='text-pink text-xl font-bold mt-9'>log in</h6>
        <h6 className='text-white text-xl font-bold mt-9'> to start your learning journey with us!</h6>
      </div>
      <div className='h-[75vh] flex flex-col items-center justify-center'>
       <div 
       style={{
        borderTopLeftRadius:"50px",
        borderBottomRightRadius:"50px",
       }}
       
       className='bg-doublegradient py-9 px-14'>
            <form>
               
                <label
                htmlFor='Email'
                className='text-sm mb-2 font-bold mt-2 text-white'
                >
                    Enter Email
                </label>
                <input 
                className="block w-full py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer"
                type='email'
                name='Email'
                value={data.Email}
                onChange={handleChange}
                />
                <label
                htmlFor='password'
                className='text-sm mb-2 font-bold mt-2 text-white'
                >
                    Enter Password
                </label>
                <input 
                className="block w-full py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer"
                type='password'
                name='Password'
                value={data.Password}
                onChange={handleChange}
                />
               
                <div className="ml-auto mr-5">
              <div className='flex justify-end mx-1 my-3'>
              <span
              className="text-sm  text-pink cursor-pointer hover:underline"
              >Forgot Password</span>
              </div>
              <div className='flex  justify-center'>
              <button
              type='submit'
              className='text-primary my-2 bg-white px-2 py-1 rounded-sm'
              >
               Submit
              </button>
              </div>
            </div>
            </form>
            
       </div>
       <div className='flex gap-1 mt-2 items-center'>
        <h6 className='text-white'>
            Don't have an account
        </h6>
        <button className='text-white my-2 bg-pink px-2 py-1 rounded-sm'>
            Sign up
        </button>
    </div>

      </div>
    </div>
  )
}

export default Login

import React from 'react'
import Phone from "../assets/icons/Phone.png"
import PlaceMarker from "../assets/icons/PlaceMarker.png"
import Envelope from "../assets/icons/Envelope.png"
const Contact = () => {
  return (
    <div className='h-auto bg-background'>
       <div className="flex items-center gap-0 justify-center mb-10">
        <div className="flex items-end mr-2.5">
            <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[60px]"></div>
            <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[40px]"></div>
            <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[20px]"></div>
          </div>
        <h1 className="my-10 text-[#8b38cd] font-bold text-[60px] font-roboto text-shadow-[0_0_1px_#ffffff]">
          Contact Us
        </h1>
      </div>
      <div className='flex gap-4 mx-4 pb-4'>
        <div className='flex-1'>
              <h3 className='font-weight-400 text-base text-white text-center mb-4 rounded-sm'>
                Reach us out!
              </h3>
              <div className='bg-darkgradient overflow-hidden mx-auto shadow-custom-white rounded-xl '>
                    <div className='w-full h-40'>

                    </div>
                    <h6 className='text-center text-sm text-white mb-4'>
                        live map location
                    </h6>
                    <div className='bg-primary ml-3  mb-4 w-full md:w-11/12 lg:w-1/2 flex flex-col items-center md:flex-row items-center '>
  <div className='flex flex-col flex-1 p-2 '>
    <div className='flex gap-2 items-center'>
      <img src={PlaceMarker} alt="Place Marker" height={30} width={30} />
      <h6 className='text-white text-xs'>24, main road north street</h6>
    </div>
    <h6 className='text-white text-xs'>South Chennai</h6>
    <h6 className='text-white text-xs'>Chennai - 28</h6>
  </div>
  <div className='flex flex-1 flex-col items-center justify-center p-4'>
    <div className='flex gap-2 items-center'>
      <img src={Phone} alt="Phone Icon" height={30} width={30} />
      <h6 className='text-white text-xs'>998877665544</h6>
    </div>
    <div className='flex gap-2 items-center'>
      <img src={Envelope} alt="Envelope Icon" height={30} width={30} />
      <h6 className='text-white text-xs'>clexta@gmail.com</h6>
    </div>
  </div>
</div>

              </div>
        </div>
        <div className='flex-1'>
        <h3 className='font-weight-400 text-base text-white text-center mb-4 rounded-sm'>
               Contact us through this
              </h3>
              <div className=' mx-auto rounded-xl bg-customgradient'>
                    <form className='flex flex-col'>
                        <div className=' my-3 ml-8  w-3/4'>
                            <label
                            htmlFor='Name'
                            className='text-sm text-white mb-4'
                            >
                                Enter Your Name
                            </label>
                        <input
                        className="inp block w-full py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer "
                        type="text"
                        maxLength={50}
                        />
                         <label
                            htmlFor='email'
                            className='text-sm text-white mb-4'
                            >
                                Enter Your Email
                            </label>
                        <input
                        className="inp block w-full py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer "
                        type="email"
                        maxLength={50}
                        />
                         <label
                            htmlFor='email'
                            className='text-sm text-white mb-4'
                            >
                                Enter Your Ph-Number
                            </label>
                        <input
                        className="inp block w-full py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer "
                        type="text"
                        maxLength={50}
                        />
                        <label
                         htmlFor='email'
                            className='text-sm text-white mb-4'
                        >
                            Your Enquiry
                        </label>
                        <textarea type="text"  className="block w-full p-4 text-white border border-transparent rounded-sm bg-whitebg text-sm focus:ring-blue-500 focus:border-none outline-none  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                       <div className='flex justify-end mr-6 mb-4'>
                       <button
                        type='submit'
                        className='bg-pink px-2 py-3 rounded-lg text-white text-sm cursor-pointer '
                        >
                            Submit
                        </button>
                       </div>
                    </form>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

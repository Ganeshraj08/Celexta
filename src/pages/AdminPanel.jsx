import React from 'react'
import Welcome from '../components/Welcome'
import Search from "../assets/icons/Search.png"
const AdminPanel = () => {
  return (
    <div className='flex flex-col w-full'>
      <Welcome />
      <div className='m-3 p-3 min-h-screen flex flex-col gap-5'>
       <div className='grid grid-cols-2 mb-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7'>
            <div className='bg-cardBold pl-4 flex flex-col gap-3 rounded-md py-3'>
                <h5 className='text-white '>Services</h5>
                <h2 className='text-white text-2xl font-bold'>00</h2>
                <h5 className='text-white'>Service Pending</h5>
            </div>
            <div className='bg-cardBold pl-4 flex flex-col gap-3 rounded-md py-3'>
                <h5 className='text-white '>Services</h5>
                <h2 className='text-white text-2xl font-bold'>00</h2>
                <h5 className='text-white'>Service Pending</h5>
            </div>
            <div className='bg-purple pl-4 flex flex-col gap-3 rounded-md py-3'>
                <h5 className='text-white '>Services</h5>
                <h2 className='text-white text-2xl font-bold'>00</h2>
                <h5 className='text-white'>Service Pending</h5>
            </div>
            <div className='bg-purple pl-4 flex flex-col gap-3 rounded-md py-3'>
                <h5 className='text-white '>Services</h5>
                <h2 className='text-white text-2xl font-bold'>00</h2>
                <h5 className='text-white'>Service Pending</h5>
            </div>
       </div>
       <div className='flex justify-center items-center mt-5 mb-10'>
            <div className='flex items-center bg-gray-300 rounded-full w-10/12 max-w-4xl shadow-md'>
            <img src={Search} className='w-5 h-5 ml-2 cursor-pointer' />
            <input
            type="text"
            placeholder="Search Here..."
            className="bg-transparent outline-none flex-grow text-gray-800 p-2"
            />
        </div>
        </div>
        <div className='p-2 mb-4 flex flex-col gap-2 overflow-x-auto shadow-2xl'>
      <h2 className='font-bold text-xl text-cardBold mb-2'>
        New Service Requests
      </h2>
      <div className='relative'>
        <div className='max-h-[300px] overflow-y-scroll scrollbar-custom pr-4'> {/* Add padding-right to create gap */}
          <table className='w-full text-sm text-left text-black'>
            <thead className='bg-lineargradient text-white'>
              <tr>
                <th scope='col' className='py-3 px-6'>Name</th>
                <th scope='col' className='py-3 px-6'>E-mail</th>
                <th scope='col' className='py-3 px-6'>Domain of Request</th>
                <th scope='col' className='py-3 px-6'>Time</th>
                <th scope='col' className='py-3 px-6'>Status</th>
                <th scope='col' className='py-3 px-6'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b border-pink'>
                <td className='px-6 py-4'>xyz</td>
                <td className='px-6 py-4'>xyz@gmail.com</td>
                <td className='px-6 py-4'>Graphic Design</td>
                <td className='px-6 py-4'>11:00 p.m</td>
                <td className='px-6 py-4'>unseen</td>
                <td className='px-6 py-4'>
                  <span className='mr-3 p-2 bg-purple rounded-md text-white cursor-pointer'>view</span>
                  <span className='space-x-2 p-2 bg-black rounded-md text-white cursor-pointer'>Action</span>
                </td>
              </tr>
              <tr className='bg-white border-b border-pink'>
                <td className='px-6 py-4'>xyz</td>
                <td className='px-6 py-4'>xyz@gmail.com</td>
                <td className='px-6 py-4'>Graphic Design</td>
                <td className='px-6 py-4'>11:00 p.m</td>
                <td className='px-6 py-4'>unseen</td>
                <td className='px-6 py-4'>
                  <span className='mr-3 p-2 bg-purple rounded-md text-white cursor-pointer'>view</span>
                  <span className='space-x-2 p-2 bg-black rounded-md text-white cursor-pointer'>Action</span>
                </td>
              </tr>
              <tr className='bg-white border-b border-pink'>
                <td className='px-6 py-4'>xyz</td>
                <td className='px-6 py-4'>xyz@gmail.com</td>
                <td className='px-6 py-4'>Graphic Design</td>
                <td className='px-6 py-4'>11:00 p.m</td>
                <td className='px-6 py-4'>unseen</td>
                <td className='px-6 py-4'>
                  <span className='mr-3 p-2 bg-purple rounded-md text-white cursor-pointer'>view</span>
                  <span className='space-x-2 p-2 bg-black rounded-md text-white cursor-pointer'>Action</span>
                </td>
              </tr>
              <tr className='bg-white border-b border-pink'>
                <td className='px-6 py-4'>xyz</td>
                <td className='px-6 py-4'>xyz@gmail.com</td>
                <td className='px-6 py-4'>Graphic Design</td>
                <td className='px-6 py-4'>11:00 p.m</td>
                <td className='px-6 py-4'>unseen</td>
                <td className='px-6 py-4'>
                  <span className='mr-3 p-2 bg-purple rounded-md text-white cursor-pointer'>view</span>
                  <span className='space-x-2 p-2 bg-black rounded-md text-white cursor-pointer'>Action</span>
                </td>
              </tr>
              <tr className='bg-white border-b border-pink'>
                <td className='px-6 py-4'>xyz</td>
                <td className='px-6 py-4'>xyz@gmail.com</td>
                <td className='px-6 py-4'>Graphic Design</td>
                <td className='px-6 py-4'>11:00 p.m</td>
                <td className='px-6 py-4'>unseen</td>
                <td className='px-6 py-4'>
                  <span className='mr-3 p-2 bg-purple rounded-md text-white cursor-pointer'>view</span>
                  <span className='space-x-2 p-2 bg-black rounded-md text-white cursor-pointer'>Action</span>
                </td>
              </tr>
              <tr className='bg-white border-b border-pink'>
                <td className='px-6 py-4'>xyz</td>
                <td className='px-6 py-4'>xyz@gmail.com</td>
                <td className='px-6 py-4'>Graphic Design</td>
                <td className='px-6 py-4'>11:00 p.m</td>
                <td className='px-6 py-4'>unseen</td>
                <td className='px-6 py-4'>
                  <span className='mr-3 p-2 bg-purple rounded-md text-white cursor-pointer'>view</span>
                  <span className='space-x-2 p-2 bg-black rounded-md text-white cursor-pointer'>Action</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
       <div className='grid grid-cols-1 mb-5 rounded-sm sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        <div className='bg-cardBold p-3'>
            <h2 className='p-4 text-base font-semibold text-center text-white'>Calendar</h2>
            <div className='bg-[#FFFFFF80] h-[300px] rounded-lg'>
                
            </div>
        </div>
        <div className='bg-purple p-3 rounded-md'>
            <h2 className='p-4 text-base font-semibold text-center text-white'>Upcoming Meetings</h2>
            <div className='h-[300px] rounded-lg'>
                    <div className='bg-white rounded-md flex flex-col p-2'>
                            <li className='text-purple text-base'>
                                New Project Meeting
                            </li>
                            <span className='text-purple text-base px-4'>
                            12th July 2024  @ 10:00 a.m.
                            </span>
                    </div>
            </div>
        </div>
        <div className='bg-purple p-3 rounded-md'>
            <h2 className='p-4 text-base font-semibold text-center text-white'>Upcoming Events</h2>
            <div className='h-[300px] rounded-lg'>
                    <div className='bg-white rounded-md flex flex-col p-2'>
                            <li className='text-purple text-base'>
                                Webinar on Graphic Design
                            </li>
                            <span className='text-purple text-base px-4'>
                            12th July 2024  @ 10:00 a.m.
                            </span>
                    </div>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default AdminPanel

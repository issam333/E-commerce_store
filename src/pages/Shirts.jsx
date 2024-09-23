import React from 'react'
import Navbar from '../components/Navbar'
import ShirtCart from '../components/carts/ShirtCart'
import SideBar from '../components/SideBar'

const Shirts = () => {
    return (
        <>
            <Navbar />

            <div className=' flex'>
                <SideBar />
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    <div >
                        <ShirtCart />
                    </div>
                    <div>
                        <ShirtCart />
                    </div>
                    <div>
                        <ShirtCart />
                    </div>
                    <div>
                        <ShirtCart />
                    </div>
                    <div>
                        <ShirtCart />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shirts
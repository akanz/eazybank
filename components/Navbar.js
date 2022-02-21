import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

export const showVariant = {
    hidden: {
        y: -200
    },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            duration: .5
        }
    }
}
const Navbar = () => {
    const navList = [
        { name: 'Home', },
        { name: 'About' },
        { name: 'Contact' },
        { name: 'Blog' },
        { name: 'Careers' }]
    const [showMenu, setshowMenu] = useState(false)

    return (
        <div className='relative'>
            <div className='bg-white shadow-sm border-b border-gray-50'>
                <div className='flex w-4/5 mx-auto items-center py-4 lg:py-0 justify-between'>
                    <Image width='140px' height='25px' src='/images/logo.svg' alt='easybank logo' />
                    <div className='hidden lg:flex py-4 justify-between w-2/3 items-center'>
                        <div className='text-eazyGray mr-8'>
                            {navList.map(list =>
                                <span key={list.name}
                                    className='capitalize mx-4 py-6 transform transition-all duration-200 hover:border-b-2 hover:text-gray-700 border-greenn'>
                                    <Link href={list.name}>
                                        {list.name}
                                    </Link>
                                </span>)}
                        </div>
                        <div>
                            <Button title='Request Invite' />
                        </div>
                    </div>
                    <div onClick={() => setshowMenu(!showMenu)} className='lg:hidden'>
                        <Image width='25px' height='15px' src={showMenu ? '/images/close.svg' : '/images/menu.svg'} alt='menu' />
                    </div>
                </div>
            </div>
            {
                showMenu && <motion.div
                    style={{ left: '5%' }}
                    initial='hidden'
                    animate='visible'
                    variants={showVariant}
                    exit={{ opacity: 0 }}
                    className='grid lg:hidden drop-shadow-2xl absolute shadow border-gray-50 rounded z-50 bg-white top-14 text-gray-700 text-center mt-6 w-11/12 mx-auto'>
                    {navList.map(list =>
                        <span className='p-3 capitalize' key={list.name}>
                            <Link href={list.name}>
                                {list.name}
                            </Link>
                        </span>
                    )}
                </motion.div>
            }

        </div>
    )
}

export default Navbar
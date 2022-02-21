import Image from 'next/image'
import React from 'react'
import Button from './Button'
import ImageComp from './Image'
import { motion } from 'framer-motion'
import { variants } from './Intro'
import Link from 'next/link'

const Footer = () => {
    const info = ['about us', 'careers', 'contact', 'support', 'blog', 'privacy policy']
    return (
        <div className='bg-bluew text-center lg:text-left'>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={variants}
                className='w-4/5 mx-auto lg:flex text-white justify-between text-sm items-center py-8'>
                <div className='lg:flex justify-between lg:w-1/2 items-center'>
                    <div className='grid gap-y-6 mb-5 lg:mb-0 lg:gap-y-12 content-between'>
                        <div className=''>
                            <Image width='140px' height='25px' src='/images/logo1.svg' alt='logo' />
                        </div>
                        <div>
                            <Image width='160px' height='25px' src='/images/socials.svg' alt='socials' />
                        </div>

                    </div>
                    <div className='grid lg:grid-cols-2 gap-3 lg:gap-6'>
                        {info.map((info, i) => <div
                            className='capitalize hover:text-greenn transform-gpu transition duration-300' key={i}>
                            <Link href={info}>
                                {info}
                            </Link>
                        </div>)}
                    </div>
                </div>

                <div>
                    <div className='lg:flex mt-6 lg:mt-0 justify-end'>
                        <Button title='Request Invite' />
                    </div>

                    <h3 className='opacity-60 mt-8'>
                        © Easybank. All Rights Reserved
                    </h3>
                </div>
            </motion.div>
        </div>
    )
}

export default Footer
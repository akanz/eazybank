import Image from 'next/image'
import React from 'react'
import Button from './Button'
import ImageComp from './Image'
import { motion } from "framer-motion"

export const variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: 0.6,
        },
    },
}

const Intro = () => {
    return (
        <div className='grid lg:grid-cols-2 bg-white items-stretch'>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={variants}
                className='lg:w-3/5 w-11/12 text-center lg:text-left mb-12 mx-auto order-last lg:order-first self-center'>
                <h1 className='text-5xl my-3'>
                    Next generation
                    digital banking
                </h1>
                <h3 className='text-eazyGray my-8'>
                    Take your financial life online.
                    Your Easybank account will be a one-stop-shop for spending,
                    saving, budgeting, investing, and much more.
                </h3>
                <Button title='Request Invite' />
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={variants}
                className='z-10'>
                <Image width='100%' height='100%' layout='responsive' src='/images/introPic.svg' alt='phone images' />
            </motion.div>
        </div>
    )
}

export default Intro
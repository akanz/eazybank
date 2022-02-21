import React from 'react'
import ImageComp from './Image'
import { motion } from 'framer-motion'
import { variants } from './Intro'

export const secondVariant = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.5,
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
}

const WhyEazy = () => {
    const reasons = [
        {
            image: '/images/reason1.svg',
            title: 'Online Banking',
            desc: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            image: '/images/reason2.svg',
            title: 'Simple Budgeting',
            desc: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
        },
        {
            image: '/images/reason3.svg',
            title: 'Fast Onboarding',
            desc: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
        },
        {
            image: '/images/reason4.svg',
            title: 'Open API',
            desc: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
        },]
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            variants={variants}
            className='py-12 bg-gray-50 transform lg:-translate-y-24 text-center lg:text-left text-gray-700'>
            <div className='mx-auto w-4/5'>
                <div className='lg:w-3/5'>
                    <h2 className='text-4xl'>
                        Why choose Easybank?
                    </h2>
                    <h4 className='text-eazyGray text-lg my-8'>
                        We leverage Open Banking to turn your bank account into your financial hub.
                        Control your finances like never before.
                    </h4>
                </div>
                <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    variants={secondVariant}
                    viewport={{ once: true }}
                    className='grid lg:grid-cols-4 gap-8 mt-16'>
                    {reasons.map((reason, i) =>
                        <motion.div
                            key={i}
                            variants={secondVariant}
                        >
                            <div>
                                <ImageComp src={reason.image} alt={`reason-${i}`} />
                            </div>
                            <h3 className='text-2xl my-6'>{reason.title}</h3>
                            <h5 className='text-base text-eazyGray mt-6'>{reason.desc}</h5>
                        </motion.div>)}
                </motion.div>
            </div>

        </motion.div>
    )
}

export default WhyEazy
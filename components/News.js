import Image from 'next/image'
import React from 'react'
import ImageComp from './Image'
import { motion } from 'framer-motion'
import { variants } from './Intro'

const News = () => {
    const news = [
        {
            image: '/images/newsImg1.svg',
            author: 'Claire Robinson',
            title: 'Receive money in any currency with no fees',
            desc: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
        },
        {
            image: '/images/newsImg2.svg',
            author: 'Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            desc: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
        },
        {
            image: '/images/newsImg3.svg',
            author: 'Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            desc: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
        },
        {
            image: '/images/newsImg4.svg',
            author: 'Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            desc: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
        },
    ]
    return (
        <motion.div initial='hidden' viewport={{ once: true }} whileInView='visible' variants={variants}>
            <div className='mx-auto w-4/5 py-12 text-center lg:text-left text-gray-700'>
                <h1 className='text-4xl my-5'>
                    Latest Articles
                </h1>
                <div className='grid lg:grid-cols-4 gap-x-8 gap-y-5 mt-8'>
                    {news.map((article, i) =>
                        <motion.div
                            viewport={{ once: true }}
                            variants={variants}
                            className=' shadow-sm border border-gray-50' key={i}>
                            <div>
                                <Image width='100%' height='100%' layout="responsive" src={article.image} alt={`article-${i}`} />
                            </div>
                            <div className='p-6 text-left'>
                                <h6 className='text-xs text-eazyGray'>By {article.author}</h6>
                                <h3 className='my-2 text-lg'>{article.title}</h3>
                                <h4 className='text-sm text-eazyGray'>{article.desc}</h4>
                            </div>
                        </motion.div>)}
                </div>
            </div>
        </motion.div>
    )
}

export default News
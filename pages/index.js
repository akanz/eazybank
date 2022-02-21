import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import News from '../components/News'
import WhyEazy from '../components/WhyEazy'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar />
        <Intro />
        <WhyEazy />
        <News />
        <Footer />
    </div>
  )
}

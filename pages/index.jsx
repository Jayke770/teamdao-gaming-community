import Head from "next/head"
import { Carousel, NavBar, Tournaments } from '../components'
export default function Index() {
  return (
    <>
      <Head>
        <title>TEAMDAO Gaming Community</title>
      </Head>
      <NavBar />
      <Carousel />
      <Tournaments />
    </>
  )
}
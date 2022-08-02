import Head from "next/head"
import { Carousel, InprogressTournaments, NavBar, UpcomingTournaments } from '../components'
export default function Index() {
  return (
    <>
      <Head>
        <title>TEAMDAO Gaming Community</title>
      </Head>
      <NavBar />
      <Carousel />
      <UpcomingTournaments />
      <InprogressTournaments />
    </>
  )
}
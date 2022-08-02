import Head from "next/head"
import { Carousel, Discord, CreateYourOwnTournament, InprogressTournaments, CompletedTournaments, NavBar, UpcomingTournaments, Features, Blog, Sponsors, Community, Footer } from '../components'
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
      <CreateYourOwnTournament />
      <CompletedTournaments />
      <Discord />
      <Features />
      <Blog />
      <Sponsors />
      <Community />
      <Footer />
    </>
  )
}
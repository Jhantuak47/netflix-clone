import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

function Home() {
  return (
    <>
      <Main />
      <Row title={'Poppular'} fetchUrl={requests.requestPopular}/>
      <Row title={'Top Rated'} fetchUrl={requests.requestTopRated}/>
      <Row title={'Trending'} fetchUrl={requests.requestTopTrending}/>
      <Row title={'Upcoming'} fetchUrl={requests.requestUpcoming}/>
      {/* <Row title={'Horror'} fetchUrl={requests.requestHorror}/> */}

    </>
  )
}

export default Home
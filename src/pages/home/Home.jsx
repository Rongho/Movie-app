import React from 'react'
import './style.scss'
import Herbanner from './herbanner/Herbanner.jsx'
import Trending from './trending/Trending.jsx'
import Popular from './popular/Popular.jsx'
import TopRated from './toprated/Toprated.jsx'

const Home = () => {
  return (
    <div className='homepage'>
        <Herbanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
    </div>
  )
}

export default Home
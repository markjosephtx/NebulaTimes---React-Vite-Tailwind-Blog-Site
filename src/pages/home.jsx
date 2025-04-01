import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        {/* <header/> */}
        <Header/>
        {/* <search/> */}
        <Search/>
        {/* <introPost/> */}
        <IntroPost/>
        {/* <blogs/> */}
        <Blogs/>
        {/* <footer/> */}  
        <Footer/> 
    </div>
  )
}

export default Home
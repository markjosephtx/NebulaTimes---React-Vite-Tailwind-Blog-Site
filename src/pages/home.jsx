import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'
import GlobalApi from '../Services/GlobalApi'

function Home() {
  const [post,setPost]=useState([])

  useEffect(()=>{
    getPost();
},[])
const getPost=()=>{
    GlobalApi.getPost.then(response=>{
        const result=response.data.data.map(item=>({
            id:item.id,
            title:item.attributes.title,
            desc:item.attributes.description,
            tag:item.attributes.tag,
            coverImage:item.attributes.coverImage.data.attributes.url,
        }));
        setPost(result)
    })
}

  return (
    <div>
        {/* <header/> */}
        <Header/>
        {/* <search/> */}
        <Search/>
        {/* <introPost/> */}
        {post.length>0? <IntroPost post={post[0]} />:null}
        {/* <blogs/> */}
        <Blogs/>
        {/* <footer/> */}  
        <Footer/> 
    </div>
  )
}

export default Home
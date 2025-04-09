import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi'
import Markdown from 'react-markdown'

function BlogDetail() {
    const {id}=useParams();
    const [post,setPost]=useState([])
    useEffect(()=>{
        console.log("Id",id)
        getBlogById();
    },[])

    const getBlogById=()=>{
        GlobalApi.getPostById(id).then(resp=>{
           
            const item=resp.data.data;
            const result={
                id:item.id,
                title:item.title,
                desc:item.description,
                tag:item.tag,
                cover: item.cover?.formats?.large?.url, // Use large or medium format if available
            };
            setPost(result);
            console.log("Result",result);
        })
    }

    return (
        <div className='px-6 md:px-20 lg:px-56 mt-10'>
            <h3 className='text-red-500 text-[12px]'>{post?.tag}</h3>
            <h3 className='text-[23px] font-bold'>{post?.title}</h3>
            <div className='flex items-center mt-5'>
                <img
                    src=""
                    alt="Author"
                    className='w-[35px] rounded-full'
                />
                <div className='ml-2'>
                    <h3 className='font-bold text-[12px]'>NebulaTimes</h3>
                    <h3 className='text-gray-500 text-[10px]'>7 April 2024</h3>
                </div>
            </div>
            <img src={post?.cover} alt="Cover" className='rounded-2xl mt-5 mb-5 w-full' />
            <Markdown children={post?.desc || ""} escapeHtml={false} className='leading-9' />
        </div>
    )
}

export default BlogDetail
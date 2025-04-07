import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi'
import Markdown from 'react-markdown'

function BlogDetail() {
    const { id } = useParams()
    const [post, setPost] = useState(null) // Changed to null for better initial state handling
    const [loading, setLoading] = useState(true) // Added loading state
    const [error, setError] = useState(null) // Added error state

    useEffect(() => {
        if (id) {
            getBlogById()
        }
    }, [id])

    const getBlogById = async () => {
        try {
            const resp = await GlobalApi.getPostById(id)
            const item = resp.data.data
            const result = {
                id: item.id,
                title: item.attributes.title,
                desc: item.attributes.description,
                tag: item.attributes.tag,
                coverImage: item.attributes.coverImage.data.attributes.url,
            }
            setPost(result)
        } catch (err) {
            console.error("Error fetching blog post:", err)
            setError("Failed to load blog post.")
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>
    }

    if (error) {
        return <div className="text-center mt-10 text-red-500">{error}</div>
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
            <img src={post?.coverImage} alt="Cover" className='rounded-2xl mt-5 mb-5 w-full' />
            <Markdown children={post?.desc || ""} escapeHtml={false} className='leading-9' />
        </div>
    )
}

export default BlogDetail
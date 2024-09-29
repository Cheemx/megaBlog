import React from "react";
import service from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4 h-72 flex flex-col justify-between">
                <div className="w-full h-48  mb-4">
                    <img 
                        src={service.getFilePreview(featuredImage)}     
                        alt={title} 
                        className="rounded-xl w-full h-full object-contain"/>
                </div>
                <h2
                className="text-xl text-black font-bold mt-auto text-center"
                >{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
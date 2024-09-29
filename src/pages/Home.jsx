import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import service from "../appwrite/config";
import { PostCard } from "../components"

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authStatus) {
            service.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            })
        }
    }, [authStatus])

    return authStatus ? (
        <div className="min-h-screen w-full py-8">
            <div className="flex flex-wrap">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div 
                            className="p-2 w-1/4"
                            key={post.$id}
                        >
                            <PostCard {...post} />
                        </div>
                    ))
                ) : (
                    <div className="p-2 w-full text-center">
                        <h2 className="text-2xl font-bold">No Posts Available</h2>
                    </div>
                )}
            </div>
        </div>
    ) : (
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to MegaBlog!</h1>
            <p className="text-lg mb-8">
                MegaBlog is a modern platform where you can create, share, and explore blogs in real-time. 
                With a seamless user interface powered by React and a robust backend supported by Appwrite, 
                you can easily manage and view your content.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Test Account</h2>
                <p className="text-lg mb-2">
                    Use the following credentials to explore the platform:
                </p>
                <p className="text-lg">
                    <strong>Email:</strong> one@gmail.com
                </p>
                <p className="text-lg">
                    <strong>Password:</strong> one@one@123
                </p>
            </div>
            <p className="text-lg">
                Join us and start your blogging journey today!
            </p>
        </div>
    )
}

export default Home
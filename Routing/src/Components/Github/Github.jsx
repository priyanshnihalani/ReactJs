import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const followers = useLoaderData()
    // const [followers, setFollowers] = useState([])
    // useEffect (() => {
    //     fetch("https://api.github.com/users/priyanshnihalani").then(response => response.json())
    //     .then(data => {console.log(data)
    //         setFollowers(data)
    //     })
    // } , [])
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-3xl text-white p-4'>Github Following: {followers.following}
            <img src={followers.avatar_url} alt="Github_Profile" width={300} className='mt-3 flex mx-auto rounded-full' />
            </div>
        </>
    );
}

export default Github;
export const githubinfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/priyanshnihalani')
    return response.json()
}
import React, {useEffect, useState} from 'react';
function Github(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        document.title="Github Followers";
        // fetch('https://api.github.com/users/Abhijit007435/followers')
        // .then((res)=>res.json())
        // .then((data)=>{
        //     console.log(data);
        //     setData(data);
        // })
        async function fetchData(){
            const res=await fetch('https://api.github.com/users/Abhijit007435');
            const data=await res.json();
            console.log(data);
            setData(data);
        }

    })
    return(
        <div className='bg-gray-600 text-white text-3xl p-4 text-center'>Github Followers:{data?.followers}
        <img src={data?.avatar_url} alt="Git picture" width={300} /></div>
    )
}
export default Github;
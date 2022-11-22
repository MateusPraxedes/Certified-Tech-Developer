import { useEffect } from 'react';
import { useState } from 'react'
import axios, { Axios } from 'axios';


const App = () => {

const [posts, setPosts] = useState([])

  const  getDataaByServe = async () => {
  //   try{
  //     const  response  = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const responseJson = await response.json();
  //     setPosts(responseJson)
  //     console.log(responseJson);
  //   }
  //   catch(error){
  //     alert(error);
  //  }

  try{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data)
    console.log(response.data);

  } catch(error){
    alert(error);
  
  
  } }

  const newPost = async () => {

    const post = {
      title: "new post",
      body: "new post body",
      userId: 1
    }


    try{
    const reponse =  await axios.post("https://jsonplaceholder.typicode.com/posts", post);
      alert("new post added");
    }catch(error){ 
      alert(error);
    }

  }

  
 useEffect(() => {
  getDataaByServe();
 }, [])



  return (
    <div>
      { posts.length > 0 ? JSON.stringify(posts) : "Loading..." }
      {/* <button onClick={getDataaByServe}> buscar dados</button> */}
      <button onClick={newPost}> new post</button>


    </div>
  )
}

export default App

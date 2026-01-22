import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [spendTime,setSpendTime] = useState(0)


  const handelBookMarkAsRead = (time,id) =>{
    const newTime = spendTime + time;
    setSpendTime(newTime);
    // remove bookmark
    console.log('remove this one', id);
    const remainigBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainigBookMarks)
  }
  
  const handelBookmarks= (blog) =>{
      const newBookmarks = [...bookmarks,blog]
      setBookmarks(newBookmarks)
  }
  

  return (
   <div className='max-w-7xl m-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handelBookmarks={handelBookmarks} handelBookMarkAsRead={handelBookMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} spendTime ={spendTime}></Bookmarks>
      </div>
   </div>
  )
}

export default App

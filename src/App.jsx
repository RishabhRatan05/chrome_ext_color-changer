import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState()
  const onClick = async()=>{
    let [tab] = await chrome.tabs.query({active:true})

    chrome.scripting.executeScript({
      target:{tabId : tab.id},
      args:[color],
      func:(color)=>{
        document.body.style.backgroundColor = color
      }
    })
  }

  useEffect(()=>{
    onClick()
  },[color])

  return (
    <>
      <h1>Change colour</h1>
      <div className="card">
        <input type='color' onChange={e=>setColor(e.currentTarget.value)}></input>
      </div>
    </>
  )
}

export default App

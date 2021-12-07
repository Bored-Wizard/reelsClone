import { useEffect, useRef, useState } from "react";
import "./App.css";
import useElementOnScreen from "./useElementOnScreen";

const App = () => {
  const [videoList, setvideoList] = useState({
    0: {
      shouldPlay: false,
      link: "/assets/1.mp4"
    },
    1: {
      shouldPlay: false,
      link: "/assets/2.mp4"
    },
    2: {
      shouldPlay: false,
      link: "/assets/3.mp4"
    },
  })

  const targetRef = useRef([]);

  useEffect(() => {
  }, [videoList])

  // const focus = (position) => {
  //   const ele = document.getElementById(String(position))
  //   ele.children[0].play()
  // }

  // const blur = (position) => {
  //   const ele = document.getElementById(String(position))
  //   ele.children[0].pause()
  // }

  const isVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }, targetRef.current[0])

  useEffect(() => {
    // if(isVisible){
    //   const ele = document.getElementById("test")
    //   console.log("ok")
    //   ele.children[0].play()
    // }else{
    //   const ele = document.getElementById("test")
    //   console.log("ok")
    //   ele.children[0].pause()
    // }
    console.log(isVisible)
  }, [isVisible])

  console.log(isVisible)

  useEffect(() => {
    console.log(targetRef)
  }, [targetRef])
  return (
    <div className="Container noScrollbar">
      {
        Object.values(videoList).map((item, index) => {
          return (
            <div 
            ref={el => targetRef.current[index] = el}
            key={index} id={String(index)} className=" bg-blue-900 h-screen w-screen sn "  >
              <video autoPlay={false} height="500px" preload="auto" loop={true} >
                <source src={item.link} type="video/mp4" />
              </video>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;

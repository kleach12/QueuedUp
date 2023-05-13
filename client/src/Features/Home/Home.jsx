import './Home.css'
import { useState } from "react";
import Particle from "../Particle";
import CreateQ from './CreateQ';
import { BsFillEarFill,BsSpeakerFill } from "react-icons/bs";
export default function Home() {
  const [selected, setSelected] = useState(false)

  return (
    <div>
      <Particle />
      <div id="home" className="flex-column">
        <h1 id="app-name"> QueuedUp</h1>
        <div className="flex-normal">
          <div id = "dj-login" onClick ={() => setSelected(false)} className={selected ? "not-selected" : "selected"} ><BsSpeakerFill/></div>
          <div id = "listener-login" onClick ={ () => setSelected(true)} className={selected ? "selected" : "not-selected"}><BsFillEarFill/></div>
        </div>
        <CreateQ/>
        {/* <div id="bg-home">
          <h2> Create a Queue</h2>
          <button> Start </button>
        </div> */}
      </div>
    </div>
  );
}
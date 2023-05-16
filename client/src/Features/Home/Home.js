import "./Home.css";
import { useState } from "react";
import Particle from "../Particle";
import CreateQ from "./CreateQ";
import JoinQ from "./JoinQ";
import { BsFillEarFill, BsSpeakerFill } from "react-icons/bs";
import { MdOutlineQueueMusic } from "react-icons/md";
export default function Home() {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <Particle />
      <div id="home" className="flex-column">
        <div className = "title">
        <MdOutlineQueueMusic id = 'logo'/>
          <h1 id="app-name">
            {" "}
            {/* <MdOutlineQueueMusic id = 'logo'/> */}
            QueuedUp
          </h1>
        </div>
        <div className="flex-normal">
          <div
            id="dj-login"
            onClick={() => setSelected(false)}
            className={selected ? "not-selected" : "selected"}
          >
            <BsSpeakerFill />
          </div>
          <div
            id="listener-login"
            onClick={() => setSelected(true)}
            className={selected ? "selected" : "not-selected"}
          >
            <BsFillEarFill />
          </div>
        </div>
        {selected ? <JoinQ /> : <CreateQ />}
      </div>
    </div>
  );
}

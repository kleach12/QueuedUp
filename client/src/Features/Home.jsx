import "./Home.css";
import { loadFull } from "tsparticles";
import Particle from "./Particle";
export default function Home() {

  return (
    <div>
      <Particle />
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <h1 id = 'app-name'> QueuedUp</h1>
      </div>
    </div>
  );
}

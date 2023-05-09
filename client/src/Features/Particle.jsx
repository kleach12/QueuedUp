import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Particle() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#150578", // change to dark purple
          },
        },
        particles: {
          number: {
            value: 25,
            density: {
              enable: true,
              value_area: 500,
            },
          },
          color: {
            value: "#ffffff", // change to white
          },
          shape: {
            type: "circle", // change to circle
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 100,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 90,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            straight: false,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
      }}
    />
  );
}

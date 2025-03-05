import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";

const Hero = ({ darkMode }) => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });

  return (
    <animated.section id="hero" style={fadeIn} className="d-flex justify-content-center align-items-center">
      <div className="hero-content text-center">
        <h1 className="display-4">Taste the Best Dishes in Town</h1>
        <p className="lead">Experience the finest flavors crafted by our master chefs.</p>
        <Link to="menu" smooth={true} duration={500}>
          <button className="btn btn-danger btn-lg">Explore Menu</button>
        </Link>
      </div>
    </animated.section>
  );
};

export default Hero;
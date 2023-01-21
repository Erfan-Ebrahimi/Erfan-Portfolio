/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./navbar.scss";
import {motion} from 'framer-motion';
import { Link } from "react-scroll";

let easeing = [0.6,-0.05,0.01,0.99];

const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.6,
      staggerDirection:1
    }
  }
}
const star={
  initial:{
    y:60,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};

const Navbar = () => {
  const [click , setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false)

  
  
  
  return (
   <>
   <motion.div initial='initial' animate='animate'>
   <motion.div className="review_container" variants={stagger}>
      <nav>
        <ul>
          <motion.li id="#home" style={{"--clr":"#9ed8f0"}} variants={star}>
            <Link
              to="home" spy={true} smooth={true} offset={-50} duration={500}
              className={click === "" ? "active" : ""} 
              onClick={closeMenu} 
              href="#" 
              data-text="&nbsp;Home"
              >
              &nbsp;Home
            </Link>

          </motion.li>
          <motion.li id="#about"  style={{"--clr":"#ff6493"}} variants={star}>

            <Link 
             to="about" spy={true} smooth={true} offset={-10} duration={500}
              variants={star}  
              className={click === "" ? "active" : ""} 
              onClick={closeMenu} 
              href="#about" 
              data-text="&nbsp;About"
            >
              &nbsp;About
            </Link>

          </motion.li>
          <motion.li id="#skills"  style={{"--clr":"#ffdd1c"}} variants={star}>
            <Link
              to="skills" spy={true} smooth={true} offset={-10} duration={500}
              variants={star}  

              className={click === "" ? "active" : ""} 
              onClick={closeMenu} 
              href="#skills" 
              data-text="&nbsp;Skills"
            >
              &nbsp;Skills
            </Link>
          </motion.li>
          <motion.li id="#projects"  style={{"--clr":"#dc00d4"}}  variants={star}>
            <Link
            to="projects" spy={true} smooth={true} offset={-10} duration={500}
              variants={star}  

              className={click === "" ? "active" : ""} 
              onClick={closeMenu} 
              href="#projects" 
              data-text="&nbsp;Projects"
            >
              &nbsp;Projects
            </Link>
          </motion.li>
        </ul>

      </nav>
      </motion.div>
   </motion.div>

   </>
  )
}

export default Navbar;
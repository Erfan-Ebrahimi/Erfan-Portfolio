/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/ME.png"
import {FaBehance, FaDribbble} from 'react-icons/fa';
import {IoMailOutline} from 'react-icons/io5';
import {IconContext} from "react-icons";
// import Card from './component/Card';
import {motion} from 'framer-motion';

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
  const [activeNav , setActivNav] = useState("#")
  
  
  
  return (
   <>
   <motion.div initial='initial' animate='animate'>
   <motion.div className="review_container" variants={stagger}>
      <nav>
        <ul>
          <li id="#home" style={{"--clr":"#9ed8f0"}} >
            <motion.a
              variants={star}  
              className={activeNav === "#" ? "active" : ""} 
              onClick={() => setActivNav("#")} 
              href="#" 
              data-text="&nbsp;Home"
              >
              &nbsp;Home
            </motion.a>

          </li>
          <li id="#about"  style={{"--clr":"#ff6493"}} >

            <motion.a 
              variants={star}  

              className={activeNav === "#about" ? "active" : ""} 
              onClick={() => setActivNav("#about")} 
              href="#about" 
              data-text="&nbsp;About"
            >
              &nbsp;About
            </motion.a>

          </li>
          <li id="#skills"  style={{"--clr":"#ffdd1c"}} >
            <motion.a
              variants={star}  

              className={activeNav === "#skills" ? "active" : ""} 
              onClick={() => setActivNav("#skills")} 
              href="#skills" 
              data-text="&nbsp;Skills"
            >
              &nbsp;Skills
            </motion.a>
          </li>
          <li id="#projects"  style={{"--clr":"#dc00d4"}} >
            <motion.a 
              variants={star}  

              className={activeNav === "#projects" ? "active" : ""} 
              onClick={() => setActivNav("#projects")} 
              href="#projects" 
              data-text="&nbsp;Projects"
            >
              &nbsp;Projects
            </motion.a>
          </li>
        </ul>

      </nav>
      </motion.div>
   </motion.div>

   </>
  )
}

export default Navbar;
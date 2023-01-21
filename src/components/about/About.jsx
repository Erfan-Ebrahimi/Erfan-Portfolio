import "./about.scss";
import { motion } from "framer-motion";
import ab from "../../assets/img/about.svg"


const container = {
  show:{
      transition:{
          staggerChildren:0.6
      }
  }
};
const item = {
  hidden:{opacity:0,y:-100},
  show:{
      opacity:1,
      y:0,
          transition:{
              ease:'easeInOut',
              duration:1
          }
  },
  whileHover:{
    scale:1.1
      
  },
  whileHover2:{
    scale:1.1,rotate:10
},
  whileTap:{
      scale:.8
  },
  
}



const About = () => {
  return (
    <motion.div className="about"  id="about" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}} >
      
       
        <motion.div className="left" variants={item}>
          <div className="img-a">
            <img src={ab} alt="about" />
          </div>
        </motion.div>
        <motion.div className="right" variants={item}>
          <div className="cont" >
            <h3>About me</h3>
            <p>I started working with Html and CSS in the summer of 1400 and after that I started learning JS and React. &nbsp;I went to the service and now that my service is over, I continue to learn with strength.<br/> I am very interested in programming and I focused on React.js.
            I did several projects, but it's time to deepen my knowledge and gain experience in a real project under the supervision of professors.
            I try my best to do the things that are entrusted to me in the best way.<br/>
            I hope that I can work in your company as a motivated and unassuming intern.<br/>
            I have the possibility to work in person and live in Qom, Isfahan and Tehran.
            </p>
          </div>
        </motion.div>
        <motion.div/>

    </motion.div>
  )
}

export default About;
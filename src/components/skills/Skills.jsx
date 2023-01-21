import "./skills.scss";
import { motion } from "framer-motion";


import {AiOutlineHtml5} from "react-icons/ai";
import {TbBrandCss3} from "react-icons/tb";
import {DiJavascript1} from "react-icons/di";
import {FaReact} from "react-icons/fa";
import {DiSass} from "react-icons/di";
import {BsBootstrap} from "react-icons/bs";
import {AiOutlineApi} from "react-icons/ai";
import {BsGithub} from "react-icons/bs";
import {SiTailwindcss} from "react-icons/si";
import {SiMaterialui} from "react-icons/si"

// import "./projects.scss";
// import {motion} from 'framer-motion';


import {IconContext} from "react-icons";
// import {BsGithub} from "react-icons/bs";
import {MdVisibility} from "react-icons/md";


const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};

const item = {
    hidden:{opacity:0,y:20},
    show:{
        opacity:1,
        y:0,
            // transition:{
            //     ease:'easeInOut',
            //     duration:.2
            // }
    }
}

const hoverEffect = {
    whileHover:{
        scale:1.5,rotate:700,borderRadius:"100%"
    },
    whileTap:{
        scale:.8,rotate:720,borderRadius:"100%"
    },
}









const Skills = () => {
  return (
    <section id='skills' className="skills">
      <div className="t1">
            <motion.span className="t2"
                initial={{y:20, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1.8}}
            >
                <h2>My Skills</h2>
                <h5>What Skills I Have</h5>

            </motion.span>

      </div>
      <motion.div className="container experience__container" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
          <div className="experience__content">
            <motion.a variants={item}  className='experience__details'>
              <AiOutlineHtml5 className="icon"/>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </motion.a >
            <motion.a variants={item} className='experience__details'>
              <TbBrandCss3 className="icon"/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </motion.a >
            <motion.a variants={item} className='experience__details'>
              <DiJavascript1 className="icon"/>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
            </motion.a >
            <motion.a variants={item} className='experience__details'>
              <FaReact className="icon"/>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </motion.a>
            <motion.a variants={item} className='experience__details'>
              <DiSass className="icon"/>
              <h4>Sass</h4>
              <small className='text-light'>Intermediate</small>
            </motion.a>
            <motion.a variants={item} className='experience__details'>
              <BsBootstrap className="icon"/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </motion.a>
            <motion.a variants={item} className='experience__details'>
              <AiOutlineApi className="icon"/>
              <h4>Restful Api</h4>
              <small className='text-light'>Intermediate</small>
            </motion.a>
            <motion.a variants={item} className='experience__details'>
              <BsGithub className="icon"/>
              <h4>Git</h4>
              <small className='text-light'>Intermediate</small>
            </motion.a>
            <motion.a variants={item} className='experience__details'>
              <SiTailwindcss className="icon"/>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
            </motion.a>
            <motion.a variants={item} className='experience__details'>
              <SiMaterialui className="icon"/>
              <h4>MUI</h4>
              <small className='text-light'>Intermediate</small>
            </motion.a>
          </div>
      </motion.div>
    </section>
  )
}

export default Skills;
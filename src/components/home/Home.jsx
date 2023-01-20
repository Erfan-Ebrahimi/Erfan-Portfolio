import './home.scss';
// import {IoStar} from 'react-icons/io5';
import {IconContext} from "react-icons";
import {motion} from 'framer-motion';
import me from "../../assets/erer22.png";
import CV from "../../assets/ECV.pdf";
//ICONS//
import {BsInstagram} from "react-icons/bs";
import {BsTelegram} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";


let easeing = [0.6,-0.05,0.01,0.99];
const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};
const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}
const firstName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}
const lastName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}
const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:1, ...transition}
  }
};
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
const btnGroup={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.6, ease:easeing}
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

function Home() {
  return (
    <motion.div initial='initial' animate='animate' className='ll'>
      
      <motion.div className="content_wrapper" initial={{opacity:0,scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.3, ease:easeing}}>
        
        <div className="left_content_wrapper">
          <motion.h2 >
            <motion.span variants={firstName} initial="initial" animate="animate" className='first'>
                <motion.span variants={letter} className='h22'>I</motion.span>
                <motion.span variants={letter} className='h22'>'</motion.span>
                <motion.span variants={letter} className='h22'>m</motion.span>
            </motion.span>
          </motion.h2>
          <motion.h2>
            <motion.span variants={firstName} initial="initial" animate="animate" className='second'>
                <motion.span variants={letter} className='h22'>E</motion.span>
                <motion.span variants={letter} className='h22'>R</motion.span>
                <motion.span variants={letter} className='h22 bg2'>F</motion.span>
                <motion.span variants={letter} className='h22 bg2'>A</motion.span>
                <motion.span variants={letter} className='h22 bg2'>N</motion.span>
            </motion.span>
          </motion.h2>
          <motion.h2>
            <motion.span variants={lastName} initial="initial" animate="animate" className='last'>
                <motion.span variants={letter} className='h22'>F</motion.span>
                <motion.span variants={letter} className='h22'>r</motion.span>
                <motion.span variants={letter} className='h22'>o</motion.span>
                <motion.span variants={letter} className='h22'>n</motion.span>
                <motion.span variants={letter} className='h22'>t</motion.span>
                <motion.span variants={letter} className='h22'>-</motion.span>
                <motion.span variants={letter} className='h22'>E</motion.span>
                <motion.span variants={letter} className='h22'>n</motion.span>
                <motion.span variants={letter} className='h22'>d</motion.span>
                <motion.span variants={letter} className='h22'>&nbsp;D</motion.span>
                <motion.span variants={letter} className='h22'>e</motion.span>
                <motion.span variants={letter} className='h22'>v</motion.span>
                <motion.span variants={letter} className='h22'>e</motion.span>
                <motion.span variants={letter} className='h22'>l</motion.span>
                <motion.span variants={letter} className='h22'>o</motion.span>
                <motion.span variants={letter} className='h22'>p</motion.span>
                <motion.span variants={letter} className='h22'>e</motion.span>
                <motion.span variants={letter} className='h22'>r</motion.span>
            </motion.span>
          </motion.h2>

          <motion.div className="btn_group" variants={stagger}>
            <motion.a href={CV} download className="btn btn_primary" variants={btnGroup} whileHover={{scale:1.05,backgroundColor:"#fefefe"}} whileTap={{scale:0.95}}>
              Download CV
              {/* <BsGithub/> */}
            </motion.a>
            <motion.a href='#w' className="btn btn_secondary" variants={btnGroup} whileHover={{scale:1.05,backgroundColor:"#fefefe"}} whileTap={{scale:0.95}}>
              Let's Talk
            </motion.a>
          </motion.div>
          
          <motion.div className="review_container" variants={stagger}>
            <IconContext.Provider value={{size:"22px"}}>
                <motion.a className='link-socials' variants={star} whileHover={{scale:1.3,borderRadius:'100%'}}><BsInstagram className='iconss'/></motion.a>
                <motion.a className='link-socials' variants={star} whileHover={{scale:1.3,borderRadius:'100%'}}><BsTelegram className='iconss'/></motion.a>
                <motion.a className='link-socials' variants={star} whileHover={{scale:1.3,borderRadius:'100%'}}><BsGithub className='iconss'/></motion.a>
            </IconContext.Provider>
          </motion.div>
        </div>

        <motion.div className="right_content_wrapper me">          
          <motion.img  src={me} alt="bg" initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}}/>
        </motion.div>

      </motion.div>
    </motion.div>
    
  );
}

export default Home;
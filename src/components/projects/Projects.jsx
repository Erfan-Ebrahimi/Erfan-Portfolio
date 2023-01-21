import "./projects.scss";
import {motion} from 'framer-motion';


import {IconContext} from "react-icons";
import {BsGithub} from "react-icons/bs";
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



const Projects = () => {
  return (
    <div className="gg" id='projects'>
    <motion.div  className="service_container">
        <div className="title_wrapper">
            <motion.span className="service_title"
                initial={{y:20, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1.8}}
            >
                <h2>PROJECTS</h2>
                <h5>My Recent Works</h5>

            </motion.span>

        </div>


        <motion.div className="service_card" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
            
            <motion.a href='https://dashboard-er.vercel.app/' className="card" variants={item} target="_blank" rel="noreferrer">
                <div className="content">
                    <h3>Dashboard-er</h3>
                    <p>It is a mini react project (SPA) admin panel, in which (recharts) is used to display charts and (mui/data-grid) is used for tables. The New User page form was developed with (Formik) and I took help from (yup) to validate it. I also used sass for more optimal styling. In this project, information is taken from fake api and stored in state. I am still developing this project. This project is not yet responsive.</p>
                    <div className='b1'>
                    <motion.a href='https://github.com/Erfan-Ebrahimi/dashboard-er' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"30px"}}>
                            <BsGithub/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a href='https://dashboard-er.vercel.app/' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"25px"}}>
                            <MdVisibility/>
                        </IconContext.Provider>
                    </motion.a>
                    </div>
                </div>
            </motion.a>
            <motion.a href='https://weather-er.vercel.app/' className="card" variants={item} target="_blank" rel="noreferrer">
                 <div className="content">
                    <h3>weather-er</h3>
                    <p>A mini practice project with react that takes the meteorological api from the openweather site and shows it in a simple UI with the axios package.<br/>--- responsive ---</p>
                    <div className='b1'>
                    <motion.a href='https://github.com/Erfan-Ebrahimi/weather-er' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"30px"}}>
                            <BsGithub/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a href='https://weather-er.vercel.app/' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"25px"}}>
                            <MdVisibility/>
                        </IconContext.Provider>
                    </motion.a>
                    </div>
                </div>
            </motion.a>
            <motion.a href='https://ikorc.vercel.app/' className="card" variants={item} target="_blank" rel="noreferrer">
                 <div className="content">
                    <h3>IKORC</h3>
                    <p>This sample site project was commissioned by Shazand Refinery Public Relations, where swiper, glightbox.js and aos libraries were used for the animations on the site. <br/>--- responsive ---</p>
                    <div className='b1'>
                    <motion.a href='https://github.com/Erfan-Ebrahimi/IKORC1.git' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"30px"}}>
                            <BsGithub/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a href='https://ikorc.vercel.app/' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"25px"}}>
                            <MdVisibility/>
                        </IconContext.Provider>
                    </motion.a>
                    </div>
                </div>
            </motion.a>
            <motion.a href='https://prixma.vercel.app/' className="card" variants={item} target="_blank" rel="noreferrer">
            <div className="content">
                    <h3>PRIXMA</h3>
                    <p>This project is completely developed with bootstrap and is done to practice and learn bootstrap. <br/>--- responsive ---</p>
                    <div className='b1'>
                    <motion.a href='https://github.com/Erfan-Ebrahimi/PRIXMA.git' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"30px"}}>
                            <BsGithub/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a href='https://prixma.vercel.app/' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"25px"}}>
                            <MdVisibility/>
                        </IconContext.Provider>
                    </motion.a>
                    </div>
                </div>
            </motion.a>
            <motion.a href='https://travel-er.vercel.app/' className="card" variants={item} target="_blank" rel="noreferrer">
            <div className="content">
                    <h3>Travel-er</h3>
                    <p>This project is a tourism site that is completely styled with sass. The goal of the project was to learn and practice sass.<br/>--- responsive ---</p>
                    <div className='b1'>
                    <motion.a href='https://github.com/Erfan-Ebrahimi/TRAVEL-ER.git' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"30px"}}>
                            <BsGithub/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a href='https://travel-er.vercel.app/' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"25px"}}>
                            <MdVisibility/>
                        </IconContext.Provider>
                    </motion.a>
                    </div>
                </div>
            </motion.a>
            <motion.a href='https://erfan-shop.vercel.app/' className="card" variants={item} target="_blank" rel="noreferrer">
            <div className="content">
                    <h3>Erfan-Shop</h3>
                    <p>This project is a shopping cart (SPA) developed with react. It includes concepts such as getting product information from api (axios) and using context to access information in all components, as well as learning to work with useReducer and useContext is used.module.css is also used for styling. <br/>--- responsive ---</p>
                    <div className='b1'>
                    <motion.a href='#s' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"30px"}}>
                            <BsGithub/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a href='https://erfan-shop.vercel.app/' target="_blank" rel="noreferrer" className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"25px"}}>
                            <MdVisibility/>
                        </IconContext.Provider>
                    </motion.a>
                    </div>
                </div>
            </motion.a>
            <motion.a href='https://bit-er.netlify.app/' className="card" variants={item} target="_blank" rel="noreferrer">
            <div className="content">
                    <h3>Bit-er</h3>
                    <p>A mini project (SPA) is a digital currency exchange that shows currency information in real time. The information is taken from the API and then displayed to the user using filter and list rendering concepts. <br/>--- responsive ---</p>
                    <div className='b1'>
                    <motion.a href='https://github.com/Erfan-Ebrahimi/bit-er.git' className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"30px"}}>
                            <BsGithub/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a href='https://bit-er.netlify.app/' className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"25px"}}>
                            <MdVisibility/>
                        </IconContext.Provider>
                    </motion.a>
                    </div>
                </div>
            </motion.a>
            <motion.a href='https://form-erfan.netlify.app/' className="card" variants={item} target="_blank" rel="noreferrer">
            <div className="content">
                    <h3>Form-er</h3>
                    <p>A mini-project (SPA) is a registration and login form with instant validation developed with React without using Formik. In this mini project, I got acquainted with the concept of state, props, useState and useEffect.I also used react-toastify for better UI. <br/>--- responsive ---</p>
                    <div className='b1'>
                    <motion.a href='https://github.com/Erfan-Ebrahimi/form-er.git' className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"30px"}}>
                            <BsGithub/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a href='https://form-erfan.netlify.app/' className="service_icon" style={{background:"none"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#f313ff", size:"25px"}}>
                            <MdVisibility/>
                        </IconContext.Provider>
                    </motion.a>
                    </div>
                </div>
            </motion.a>

        </motion.div>

    </motion.div>
    </div>
   
  )
}

export default Projects;


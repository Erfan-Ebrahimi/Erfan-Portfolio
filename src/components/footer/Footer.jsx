import "./footer.scss";
import me from "../../assets/ME.gif";


const Footer = () => {

  const clickHandle = () => {
    alert("Call & Hire me -- 09918790969 --");
  }


  return (
    <div className="footer">
      <div className="content">
        <h3>Designed With <span>&#128151;</span> By </h3>
        <a href="#09918790969" onClick={clickHandle}><img src={me} alt="me" /></a>
      </div>
    </div>
  )
}

export default Footer;
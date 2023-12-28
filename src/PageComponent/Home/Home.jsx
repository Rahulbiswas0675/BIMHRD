import './Home.scss';
import homeVideo from '../../Assates/Video/home.mp4';
import { MdArrowRightAlt } from "react-icons/md";
import scrollbtn from '../../Assates/Elements/scrollDown.svg';
import { heroPage } from '../../Datas/PagesData';

function Home() {
  return (
    <div className='home-component'>
      <video src={homeVideo} loop autoPlay className='video' />
      <div className="home-container">
        <div className="home-inner-component">
          <div className="home-items-container">
            <h1 className="title">{heroPage.title}</h1>
            <h3 className="tags">{heroPage.tag}</h3>
            <button className="admissions-btn">{heroPage.btnTitle} <MdArrowRightAlt className='arrow-icon' /></button>
          </div>
          <img src={scrollbtn} alt="scrollbtn" className="scroll-btn" />
        </div>
      </div>
    </div>
  )
}

export default Home
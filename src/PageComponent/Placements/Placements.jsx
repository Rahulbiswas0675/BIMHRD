import './Placements.scss';
import { SiSololearn } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";


function Placements() {
  return (
    <div className="placement-component">
      <div className="placement-top-container">
        <div className="item-box">
          <SiSololearn className='icon' />
          <h3 className="title">Admission Process</h3>
        </div>
        <div className="item-box">
          <GiReceiveMoney className='icon' />
          <h3 className="title">Fee Structure</h3>
        </div>
        <div className="item-box">
          <BsBank className='icon' />
          <h3 className="title">Scholarships</h3>
        </div>
        <div className="item-box">
          <PiStudentBold className='icon' />
          <h3 className="title">Lateral Entry & Migration</h3>
        </div>
        <div className="item-box">
          <MdOutlineSupportAgent className='icon' />
          <h3 className="title">Finance Assistance </h3>
        </div>
      </div>
      <div className="placement-buttom-container">
        <div className="buttom-left-container">
          <h3 className="title">Exceptional Placements</h3>
          <h3 className="tag">BIMHRD</h3>
          <p className="para">Established in 2004, BIMHRD is the fastest emerging B-School for Human Resources , marketing and other domains of management. Faculty at BIMHRD have vast teaching experience with lots of research papers carried out by them that are accepted nationally and internationally. Faculty members include corporate leaders, industrialists and working professionals from renowned companies.</p>
          <a href="#" className="readmore-btn">Read More</a>
        </div>
        <div className="buttom-right-container">
          <div className="right-item-box">
            <h3 className="title">36 LPA</h3>
            <h5 className="tag">Highest Package</h5>
          </div>
          <div className="right-item-box">
            <h3 className="title">500 +</h3>
            <h5 className="tag">Recruiters</h5>
          </div>
          <div className="right-item-box">
            <h3 className="title">50k+</h3>
            <h5 className="tag">Strong Alumni Base</h5>
          </div>
          <div className="right-item-box">
            <h3 className="title">100%</h3>
            <h5 className="tag">Training and Placement Assistance</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placements
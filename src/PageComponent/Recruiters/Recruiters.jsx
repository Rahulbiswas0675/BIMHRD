import './Recruiters.scss';
import studentImg from '../../Assates/Images/join.png';
import { MdOutlineArrowRightAlt } from "react-icons/md";


function Recruiters() {
  return (
    <div className="recruiters-component" id='contactus'>
      <div className="recruiters-container">
        <div className="left-container">
          <h1 className="title">Experience Excellence in Education and Empower <br /> Your Future at the BIMHRD Campus. </h1>
          <h1 className="tag">Join Us Today!</h1>
          <button className='apply-btn'>APPLY NOW <MdOutlineArrowRightAlt className='icon'/></button>
        </div>
        <div className="right-container">
          <img src={studentImg} alt="studentImg" className='studentImg'/>
        </div>
      </div>
      <div className="buttom-box-container"></div>
    </div>
  )
}

export default Recruiters;
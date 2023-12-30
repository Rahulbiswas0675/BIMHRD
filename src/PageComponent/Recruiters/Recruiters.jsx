import './Recruiters.scss';
import { recruitersData } from '../../Datas/PagesData';
import { MdOutlineArrowRightAlt } from "react-icons/md";


function Recruiters() {
  return (
    <div className="recruiters-component" id='contact'>
      <div className="recruiters-container">
        <div className="left-container">
          <h1 className="title">{recruitersData.title1} <br /> {recruitersData.title2}</h1>
          <h1 className="tag">{recruitersData.tag}</h1>
          <button className='apply-btn'>{recruitersData.btnName} <MdOutlineArrowRightAlt className='icon'/></button>
        </div>
        <div className="right-container">
          <img src={recruitersData.image} alt="studentImg" className='studentImg'/>
        </div>
      </div>
      <div className="buttom-box-container"></div>
    </div>
  )
}

export default Recruiters;
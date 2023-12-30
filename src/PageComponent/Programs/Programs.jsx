import './Programs.scss';
import programsImg from '../../Assates/Images/stream.png';
import { programsData } from '../../Datas/PagesData';

function Programs() {
  return (
    <div className="programs-components" id='programs'>
      <img src={programsImg} alt="programsImg" className="programsImg" />
      <div className="programs-container">
        {
          programsData.map((item, index) => (
            <div className={`programs-item-box ${index === 1 ? "mid-box" : null}`} key={index}>
              <h3 className="title">{item.title}</h3>
              <h3 className="tag">{item.tag}</h3>
              <p className="para">{item.para}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Programs
import './Placements.scss';
import { admissionsData } from '../../Datas/PagesData';

function Placements() {
  return (
    <div className="placement-component" id='recruiters'>
      <div className="placement-top-container">
        {
          admissionsData.process.map((item, index) => (
            <div className="item-box" key={index}>
              {item.icon}
              <h3 className="title">{item.title}</h3>
            </div>
          ))
        }
      </div>

      <div className="placement-buttom-container">
        <div className="buttom-left-container">
          <h3 className="title">{admissionsData.title}</h3>
          <h3 className="tag">{admissionsData.tag}</h3>
          <p className="para">{admissionsData.para}</p>
          <a href={admissionsData.btnLink} className="readmore-btn">{admissionsData.btnName}</a>
        </div>

        <div className="buttom-right-container">
          {
            admissionsData.features.map((item, index) => (
              <div className="right-item-box" key={index}>
                <h3 className="title">{item.title}</h3>
                <h5 className="tag">{item.subTitle}</h5>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Placements;
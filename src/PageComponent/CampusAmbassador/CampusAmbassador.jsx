import './CampusAmbassador.scss';
import { CampusAmbassadorData } from '../../Datas/PagesData';


function CampusAmbassador() {
  return (
    <div className="capusambassador-component" id='admitions'>
      <div className="capusambassador-container">
        {
          CampusAmbassadorData.map((item, index) => (
            <img src={item.image} alt={item.name} className="icons" key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default CampusAmbassador
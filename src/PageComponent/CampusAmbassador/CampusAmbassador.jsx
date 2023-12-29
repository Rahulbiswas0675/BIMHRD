import './CampusAmbassador.scss';
import google from '../../Assates/CampusingComapnys/google.png';
import ibm from '../../Assates/CampusingComapnys/ibm.png';
import deloitte from '../../Assates/CampusingComapnys/deltotl.png';
import genpact from '../../Assates/CampusingComapnys/genpact.png';
import xebia from '../../Assates/CampusingComapnys/xebia.png';
import wipro from '../../Assates/CampusingComapnys/wipro.png';
import hcl from '../../Assates/CampusingComapnys/hcl.png';


function CampusAmbassador() {
  return (
    <div className="capusambassador-component">
      <div className="capusambassador-container">
          <img src={google} alt="google" className="icons" />
          <img src={ibm} alt="ibm" className="icons" />
          <img src={deloitte} alt="deloitte" className="icons" />
          <img src={genpact} alt="genpact" className="icons" />
          <img src={xebia} alt="xebia" className="icons" />
          <img src={wipro} alt="wipro" className="icons" />
          <img src={hcl} alt="hcl" className="icons" />
      </div>
    </div>
  )
}

export default CampusAmbassador
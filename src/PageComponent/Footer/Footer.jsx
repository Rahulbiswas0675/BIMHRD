import './Footer.scss';
import logoimg from '../../Assates/Logo/logo3.png';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer-component">
      <div className="footer-container">
        <div className="left-box">
          <img src={logoimg} alt="logoimg" className='logoimg' />
          <div className="text-container">
            <h3 className="title">Get in Touch</h3>
            <p className="para-bold">Whatsapp: <span className='para-small'>7757847545</span></p>
            <p className="para-bold">Email: <span className='para-small'>Admissions@Sribalajisocietypune.Org</span></p>
            <p className="address-bold">Address: <span className='para-small'>Survey No. 55/2-7, Tathawade, Opp. Wakad Police Station, Off Pune-Mumbai, Highway, Imm Road, Tathawade, Pimpri-Chinchwad, Maharashtra 411033</span></p>
          </div>
        </div>
        <div className="right-box">
          <div className="top-container">

            <div className="item-box-duble">
              <h5 className="item-title">New Admissions</h5>
              <div className="divider"></div>
              <div className="item-body">
                <div className="item-duble-box">
                  <a href='#' className="item">Important Date</a>
                  <a href='#' className="item">Apply Online</a>
                  <a href='#' className="item">How to Apply</a>
                </div>
                <div className="item-duble-box">
                  <a href='#' className="item">Admission Process</a>
                  <a href='#' className="item">FAQ’s</a>
                  <a href='#' className="item">Important Contacts</a>
                </div>
              </div>
            </div>

            <div className="item-box">
              <h5 className="item-title">About Us</h5>
              <div className="divider"></div>
              <div className="item-body">
                <div className="item-duble-box">
                  <a href='#' className="item">About Us</a>
                  <a href='#' className="item">Why BIMHRD</a>
                  <a href='#' className="item">Leadership</a>
                </div>
              </div>
            </div>

            <div className="item-box">
              <h5 className="item-title">Placements</h5>
              <div className="divider"></div>
              <div className="item-body">
                <div className="item-duble-box">
                  <a href='#' className="item">Placement Reports</a>
                  <a href='#' className="item">Why recruit at  BIMHRD</a>
                  <a href='#' className="item">Recruitment Brochure</a>
                </div>
              </div>
            </div>

            <div className="item-box-icons">
              <h5 className="item-title">Connect</h5>
              <div className="divider"></div>
              <div className="item-body">
                <a href='#' className="item"><FaFacebook className='icon'/></a>
                <a href='#' className="item"><FaInstagramSquare className='icon'/></a>
                <a href='#' className="item"><FaLinkedin className='icon'/></a>
              </div>
            </div>

          </div>
          {/* <div className="buttom-container"></div> */}
        </div>
      </div>
      <div className="footer-copyright-container">
        <div className="left-box">
          <p className="para">Copyright at 1998-2021 Sri Balaji Society, Pune</p>
        </div>
        <div className="right-box">
          <button className="btn">Request Info</button>
          <button className="btn">APPLY NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
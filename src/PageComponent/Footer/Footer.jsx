import './Footer.scss';
import { contactData, fakeLink, footerData } from '../../Datas/PagesData';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer-component">
      <div className="footer-container">
        <div className="left-box">
          <img src={contactData.logo} alt="logoimg" className='logoimg' />
          <div className="text-container">
            <h3 className="title">Get in Touch</h3>
            <p className="para-bold">Whatsapp: <span className='para-small'>{contactData.whatsapp}</span></p>
            <p className="para-bold">Email: <span className='para-small'>{contactData.email}</span></p>
            <p className="address-bold">Address: <span className='para-small'>{contactData.address}</span></p>
          </div>
        </div>
        <div className="right-box">
          <div className="top-container">

            <div className="item-box-duble">
              <h5 className="item-title">New Admissions</h5>
              <div className="divider"></div>
              <div className="item-body">
                <div className="item-duble-box">
                  <a href={fakeLink} className="item">Important Date</a>
                  <a href={fakeLink} className="item">Apply Online</a>
                  <a href={fakeLink} className="item">How to Apply</a>
                </div>
                <div className="item-duble-box">
                  <a href={fakeLink} className="item">Admission Process</a>
                  <a href={fakeLink} className="item">FAQ’s</a>
                  <a href={fakeLink} className="item">Important Contacts</a>
                </div>
              </div>
            </div>

            <div className="item-box">
              <h5 className="item-title">About Us</h5>
              <div className="divider"></div>
              <div className="item-body">
                <div className="item-duble-box">
                  <a href={fakeLink} className="item">About Us</a>
                  <a href={fakeLink} className="item">Why BIMHRD</a>
                  <a href={fakeLink} className="item">Leadership</a>
                </div>
              </div>
            </div>

            <div className="item-box">
              <h5 className="item-title">Placements</h5>
              <div className="divider"></div>
              <div className="item-body">
                <div className="item-duble-box">
                  <a href={fakeLink} className="item">Placement Reports</a>
                  <a href={fakeLink} className="item">Why recruit at  BIMHRD</a>
                  <a href={fakeLink} className="item">Recruitment Brochure</a>
                </div>
              </div>
            </div>

            <div className="item-box-icons">
              <h5 className="item-title">Connect</h5>
              <div className="divider"></div>
              <div className="item-body">
                <a href={fakeLink} className="item"><FaFacebook className='icon'/></a>
                <a href={fakeLink} className="item"><FaInstagramSquare className='icon'/></a>
                <a href={fakeLink} className="item"><FaLinkedin className='icon'/></a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="footer-copyright-container">
        <div className="left-box">
          <p className="para">{footerData}</p>
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
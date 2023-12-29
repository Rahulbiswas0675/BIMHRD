import './Research.scss';
import buildImg from '../../Assates/Images/build.png';
import logo from '../../Assates/Logo/logo4.png';
import { MdArrowRightAlt } from "react-icons/md";

function Research() {
  return (
    <div className="Research-component" id='research'>
      <div className="Research-container">

        <div className="Research-container-box">
          <div className="top-container">
            <img src={logo} alt="logo" className='logo' />
            <div className="heading-box">
              <h1 className="title">Stay Research, Stay Inspired</h1>
              <h3 className="tag">Explore the Latest News and Events at BIMHRD</h3>
            </div>
          </div>

          <div className="buttom-container">

            <div className="container-item">

              <div className="item-box-left">
                <div className="box-item-left">
                  <p className="small-title">Date</p>
                  <h3 className="small-tag">August 14, 2023</h3>
                </div>
                <div className="box-item-right">
                  <p className="small-title">Event</p>
                  <h3 className="bold-tag">Industry 5.0 National Conference</h3>
                </div>
              </div>

              <div className="divider"></div>

              <div className="item-box-right">
                <div className="box-item-left">
                  <p className="small-title">Date</p>
                  <h3 className="small-tag">August 14, 2023</h3>
                </div>
                <div className="box-item-right">
                  <p className="small-title">Event</p>
                  <h3 className="bold-tag">Industry 5.0 National Conference</h3>
                </div>
              </div>

            </div>

            <div className="buttom-border"></div>

            <div className="container-item">

              <div className="item-box-left">
                <div className="box-item-left">
                  <p className="small-title">Date</p>
                  <h3 className="small-tag">August 14, 2023</h3>
                </div>
                <div className="box-item-right">
                  <p className="small-title">Event</p>
                  <h3 className="bold-tag">Industry 5.0 National Conference</h3>
                </div>
              </div>

              <div className="divider"></div>

              <div className="item-box-right">
                <div className="box-item-left">
                  <p className="small-title">Date</p>
                  <h3 className="small-tag">August 14, 2023</h3>
                </div>
                <div className="box-item-right">
                  <p className="small-title">Event</p>
                  <h3 className="bold-tag">Industry 5.0 National Conference</h3>
                </div>
              </div>

            </div>

            <div className="buttom-border"></div>

          </div>
        </div>
      </div>
      <div className="Research-buttom-container">
        <img src={buildImg} alt="buildImg" className="image" />
        <div className="buttom-container">
          <div className="text-box">
            <h1 className="title">Explore life at BIMHRD</h1>
            <button className="button">Let’s Go <MdArrowRightAlt className='icon'/></button>
          </div>
          <div className="buttom-shadow"></div>
        </div>
      </div>
    </div>
  )
}

export default Research;
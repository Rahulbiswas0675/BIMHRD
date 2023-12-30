import './Research.scss';
import buildImg from '../../Assates/Images/build.png';
import { researchData } from '../../Datas/PagesData';
import { MdArrowRightAlt } from "react-icons/md";

function Research() {
  return (
    <div className="research-component" id='research'>
      <div className="research-container">
        <div className="research-container-box">
          <div className="top-container">
            <img src={researchData.logo} alt="logo" className='logo' />
            <div className="heading-box">
              <h1 className="title">{researchData.title}</h1>
              <h3 className="tag">{researchData.title}</h3>
            </div>
          </div>
          <div className="buttom-container">
            {
              researchData.event.map((item, index) => (
                <div key={index}>
                  <div className="container-item">

                    <div className="item-box-left">
                      <div className="box-item-left">
                        <p className="small-title">Date</p>
                        <h3 className="small-tag">{item.date}</h3>
                      </div>
                      <div className="box-item-right">
                        <p className="small-title">Event</p>
                        <h3 className="bold-tag">{item.eventTitle}</h3>
                      </div>
                    </div>

                    <div className="divider"></div>

                    <div className="item-box-right">
                      <div className="box-item-left">
                        <p className="small-title">Date</p>
                        <h3 className="small-tag">{item.date}</h3>
                      </div>
                      <div className="box-item-right">
                        <p className="small-title">Event</p>
                        <h3 className="bold-tag">{item.eventTitle}</h3>
                      </div>
                    </div>

                  </div>
                  <div className="buttom-border"></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="research-buttom-container">
        <img src={buildImg} alt="buildImg" className="image" />
        <div className="buttom-container">
          <div className="text-box">
            <h1 className="title">{researchData.buttomTitle}</h1>
            <button className="button">{researchData.btnName} <MdArrowRightAlt className='icon' /></button>
          </div>
          <div className="buttom-shadow"></div>
        </div>
      </div>
    </div>
  )
}

export default Research;
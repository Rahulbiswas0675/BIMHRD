import './Testimonial.scss';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { ImQuotesRight } from "react-icons/im";
import userIcon from '../../Assates/Elements/Ellipse.svg'

function Testimonial() {
  return (
    <div className="testimonial-component">
      <div className="testimonial-container">
        <div className="testimonial-left-box">
          <h3 className="title">Hear it from the students themselves</h3>
          <div className="icon-box">
            <IoIosArrowBack className='icon'/>
            <IoIosArrowForward className='icon'/>
          </div>
        </div>
        <div className="testimonial-right-box">
          <div className="scroll-box">

            <div className="review-item">
              <ImQuotesRight className='queot'/>
              <p className="para">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              <div className="auth-box">
                <img src={userIcon} alt="userIcon" className='userIcon'/>
                <div className="text-box">
                  <p className="title">Morem ipsum</p>
                  <p className="tag">Student</p>
                </div>
              </div>
            </div>

            <div className="review-item">
              <ImQuotesRight className='queot'/>
              <p className="para">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              <div className="auth-box">
                <img src={userIcon} alt="userIcon" className='userIcon'/>
                <div className="text-box">
                  <p className="title">Morem ipsum</p>
                  <p className="tag">Student</p>
                </div>
              </div>
            </div>

            <div className="review-item">
              <ImQuotesRight className='queot'/>
              <p className="para">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              <div className="auth-box">
                <img src={userIcon} alt="userIcon" className='userIcon'/>
                <div className="text-box">
                  <p className="title">Morem ipsum</p>
                  <p className="tag">Student</p>
                </div>
              </div>
            </div>

            <div className="review-item">
              <ImQuotesRight className='queot'/>
              <p className="para">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              <div className="auth-box">
                <img src={userIcon} alt="userIcon" className='userIcon'/>
                <div className="text-box">
                  <p className="title">Morem ipsum</p>
                  <p className="tag">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
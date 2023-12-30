import './Testimonial.scss';
import { reviewData } from '../../Datas/PagesData';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { ImQuotesRight } from "react-icons/im";

function Testimonial() {
  return (
    <div className="testimonial-component">
      <div className="testimonial-container">
        <div className="testimonial-left-box">
          <h3 className="title">{reviewData.title}</h3>
          <div className="icon-box">
            <IoIosArrowBack className='icon' />
            <IoIosArrowForward className='icon' />
          </div>
        </div>
        <div className="testimonial-right-box">
          <div className="scroll-box">
            {
              reviewData.review.map((item, index) => (
                <div className="review-item" key={index}>
                  <ImQuotesRight className='queot' />
                  <p className="para">{item.para}</p>
                  <div className="auth-box">
                    <img src={item.userImage} alt="userIcon" className='userIcon' />
                    <div className="text-box">
                      <p className="title">{item.userName}</p>
                      <p className="tag">{item.userDesignation}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
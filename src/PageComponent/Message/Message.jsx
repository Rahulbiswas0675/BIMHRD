import './Message.scss';
import smsImg from '../../Assates/Images/messageImage.png';

function Message() {
  return (
    <div className="message-components">
      <div className="message-container">
        <div className="left-container">
          <h3 className="title">Bala Sir’s Message</h3>
          <h1 className="tag">Message from our Inspiration</h1>
          <br />
          <p className="para">Sri Balaji University, Pune means quality and commitment to the students’ community. We believe that each and every student has the potential to be groomed to have a successful corporate career. Converting the right candidates to the right jobs through right training and development has always been the goal of our Society. We are deeply pleased to state that we have achieved the same to a larger extent as can be seen from the Track-Record of campus placements of our management institutes.</p>
          <p className="para">We are proud to state that, within an existence of 15 years Sri Balaji Society is known not only for the best infrastructure but also for the best faculties. Sri Balaji Society is already ranked as one amongst top Three for ‘visiting faculties’ in India by ‘Business India’ dated 17th Oct. 2010, which means active involvement of corporate stalwarts in imparting instructions and practical exposure to students about the industry. </p>
          <a href="#" className="readmore-btn">Read More</a>
        </div>
        <div className="right-container">
          <img src={smsImg} alt="smsImg" className='smsImg'/>
        </div>
      </div>
    </div>
  )
}

export default Message
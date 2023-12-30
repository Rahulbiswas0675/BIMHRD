import './Message.scss';
import { MessageData } from '../../Datas/PagesData';

function Message() {
  return (
    <div className="message-components">
      <div className="message-container">
        <div className="left-container">
          <h3 className="title">{MessageData.heading}</h3>
          <h1 className="tag">{MessageData.title}</h1>
          <br />
          <p className="para">{MessageData.para1}</p>
          <p className="para">{MessageData.para2}</p>
          <a href={MessageData.btnLink} className="readmore-btn">{MessageData.btnName}</a>
        </div>
        <div className="right-container">
          <img src={MessageData.image} alt="smsImg" className='smsImg' />
        </div>
      </div>
    </div>
  )
}

export default Message
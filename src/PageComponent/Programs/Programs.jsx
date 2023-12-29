import './Programs.scss';
import ProgramsImg from '../../Assates/Images/stream.png';

function Programs() {
  return (
    <div className="Programs-components" id='mbaprograms'>
      <img src={ProgramsImg} alt="ProgramsImg" className="ProgramsImg" />
      <div className="Programs-container">
        <div className="Programs-item-box">
          <h3 className="title">MBA</h3>
          <h3 className="tag">Genarel</h3>
          <p className="para">BIMHRD offers a two-year full-time management program MBA (Marketing). As incoming students are mostly freshers or having some years of work experience, the course enable students to grasp the latest in management theory, broadens their perspectives, launches them into new avenues of problem solving and making them competent for the business world.</p>
        </div>
        <div className="Programs-item-box mid-box">
          <h3 className="title">MBA</h3>
          <h3 className="tag">( PM & HRD)</h3>
          <p className="para">Studying PM & HRD with BIMHRD will help develop your interpersonal skills which are crucial to succeed in any relevant role. Our courses are career-focused which enables you to acquire skills directly applied in your current or future industry role.</p>
        </div>
        <div className="Programs-item-box">
          <h3 className="title">MBA</h3>
          <h3 className="tag">(Marketing Management)</h3>
          <p className="para">BIMHRD offers a two-year full-time program in MBA (Marketing Management). The program helps the students to equip themselves with the practical knowledge of current industry scenarios along with course curriculum , skills and value.</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
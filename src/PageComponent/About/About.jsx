import'./About.scss';
import { aboutPage } from '../../Datas/PagesData';

function About() {
  return (
    <div className="about-component" id="about">
      <div className="about-container">
        <p className="paragraph">{aboutPage.paragraph1}</p>
        <p className="paragraph">{aboutPage.paragraph2}</p>
        <p className="paragraph highlight">{aboutPage.paragraph3}</p>
        <a href="" className='hrefBtn'>{aboutPage.btnTitle}</a>
      </div>
    </div>
  )
}

export default About
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={HeaderImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
          Seasoned business professional turned aspiring web developer, passionate about crafting engaging web applications that drive growth and enhance user experiences. Bringing a unique blend of strategic insight, client relationship management, and project leadership to the world of software development. Eager to merge technical proficiency, creative flair, and business acumen in collaborative software projects.
          </p>
          <a href={CV} download className="btn primary">Download CV <HiDownload/></a>
        </div>
      </div>
    </section> 
  )
}

export default About
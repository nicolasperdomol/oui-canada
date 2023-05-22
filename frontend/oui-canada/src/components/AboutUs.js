import '../styles/css/AboutUs.css'
import mission from '../img/mission.jpg'
import vision from '../img/vision.jpg'
import { t } from 'i18next'
import ContactUs from './ContactUs'
const AboutUs = () => {
  return (
    <div>
      <div id='aboutUsContainer' className='container-fluid aboutUsContainer'>
        <div className='row d-flex justify-content-center pt-3'>
          <div className='col-4 aboutUsBody'>
            <div className='container-fluid pt-3'>
              <div className='row'>
                <h3>{t('missionHeader')}</h3>
                <div className='col-4 mt-3'>{t('missionBody')}</div>
                <div className='col m-3'><img className='img-fluid aboutUsImg' src={mission} alt='student' /></div>
              </div>
              <div className='row mt-3 mb-3'>
                <h3>{t('visionHeader')}</h3>
                <div className='col-4 mt-3'>{t('visionBody')}</div>
                <div className='col m-3'><img className='img-fluid aboutUsImg' src={vision} alt='student' /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  )
}

export default AboutUs

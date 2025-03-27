import { assets } from '../../assets/assets'
import './AppDownload.css'

export const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br />RestApp.</p>
        <div className="app-download-platforms">
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>
    </div>
  )
}

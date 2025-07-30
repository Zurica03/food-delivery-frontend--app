import React from 'react'
import data from '/src/assets/assets.js';
import './AppDownload.css'

const image = data.assets;

const AppDownload = () => {
  return (
    <div className='App-download' id='app-download'>
        <p>For Better Experience Download <br/> Quick Bites</p>
        <div className='App-download_platforms'>
            <img src={image.play_store} alt='play_store'/>
            <img src={image.app_store} alt='app_store'/>
        </div>
        
    </div>
  )
}

export default AppDownload
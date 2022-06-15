import React from 'react'
import { Link } from 'react-router-dom'

import './TrainingStyles.css'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Excepturi sapiente illo eaque quae mollitia esse ea perferendis, est alias quia atque veritatis magnam cum aut optio, magni repellendus maiores voluptate?</p>
            <Link to='../contact' className='btn'>Contact</Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Moon} className='img' alt=''></img>
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod} className='img' alt=''></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training
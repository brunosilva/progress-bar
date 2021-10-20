// packages
import React from 'react'

// styles
import style from './style.module.scss'

// assets
import { ReactComponent as ProgressBarImg } from '../../assets/svg/bg.svg'
import ProductBoxImg from '../../assets/svg/box.png'

const Circle: React.FC = () => {
  return (
    <div className={style.progressBar}>
      <div className={style.skill}>
        <div className={style.outer}>
          <div className={style.inner}>
            <div className={style.bgMiddle} id="number">
              <img src={ProductBoxImg} alt="" />
            </div>
          </div>
        </div>
        <ProgressBarImg />
      </div>
    </div>
  )
}

export default Circle

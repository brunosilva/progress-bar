// packages
import React from 'react'

// styles
import style from './style.module.scss'

// assets
import { ReactComponent as ProgressBarImg } from '../../assets/svg/bg.svg'

const CircleSvg: React.FC = () => {
  return (
    <div className={style.progressBar}>
      <div className={style.skill}>
        <div className={style.outer}>
          <div className={style.inner}>
            <div id="number">65%</div>
          </div>
        </div>
        <ProgressBarImg />
      </div>
    </div>
  )
}

export default CircleSvg

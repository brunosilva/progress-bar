// packages
import React from 'react'

// styles
import style from './style.module.scss'

const CircleSvg: React.FC = () => {
  return (
    <div className={style.progressBar}>
      <div className={style.skill}>
        <div className={style.outer}>
          <div className={style.inner}>
            <div className={`${style.bar} ${style.left}`}>
              <div className={style.progress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CircleSvg

// packages
import React from 'react'

// styles
import style from './style.module.scss'

const Circle: React.FC = () => {
  return (
    <div className={style.progressBar}>
      <div className={style.circular}>
        <div className={style.inner}>
          <div className={style.circle}>
            <div className={`${style.bar} ${style.left}`}>
              <div className={style.progress} />
            </div>
            <div className={`${style.bar} ${style.right}`}>
              <div className={style.progress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Circle

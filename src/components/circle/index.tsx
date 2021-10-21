// packages
import React from 'react'

// styles
import style from './style.module.scss'

// assets
import { ReactComponent as ProgressBarImg } from '../../assets/svg/bg.svg'
import ProductBoxImg from '../../assets/svg/box.png'

interface IProps {
  completed: number
}
const Circle: React.FC<IProps> = ({ completed }) => {
  // keyframes references -------------------------
  //   empty    = 0% { stroke-dashoffset: 582; }
  //   ten      = 9% { stroke-dashoffset: 531; }
  //   twenty   = 22% { stroke-dashoffset: 480; }
  //   thirty   = 35% { stroke-dashoffset: 429; }
  //   fourty   = 48% { stroke-dashoffset: 378; }
  //   sixty    = 61% { stroke-dashoffset: 327; }
  //   seventy  = 74% { stroke-dashoffset: 276; }
  //   eighty   = 87% { stroke-dashoffset: 225; }
  //   hundred  = 100% { stroke-dashoffset: 174; }
  // ----------------------------------------------

  console.log(completed)
  return (
    <div className={style.progressBar}>
      <div className={`${style.skill} ${style.hundred}`}>
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

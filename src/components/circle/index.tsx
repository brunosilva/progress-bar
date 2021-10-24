// packages
import React, { useState, useEffect, useMemo } from 'react'

// styles
import style from './style.module.scss'

// assets
import { ReactComponent as ProgressBarImg } from '../../assets/svg/bg.svg'
import ProductBoxImg from '../../assets/svg/box.png'

interface IProps {
  steps: number
  completed: number
}

const Circle: React.FC<IProps> = ({ steps, completed }) => {
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
  // const [resultValue, setResultValue] = useState<number>()
  // const [createClass, setCreateClass] = useState<string>('')
  const isValidCompleted =
    completed >= 0 && completed <= steps && typeof completed === 'number'
  // const isValidSteps =
  //   steps > 0 && steps > completed && typeof steps === 'number'
  // let amountProgress: number = 500

  // function createClassName() {}
  // useEffect(() => {
  //   const trueValues = isValidSteps && isValidCompleted
  //   if (trueValues) {
  //     const valueStep: number = parseInt((500 / steps).toFixed(0))
  //     for (var i = 0; i < completed; i++) {
  //       amountProgress = amountProgress - valueStep
  //     }
  //     setResultValue(amountProgress)
  //   }
  // }, [steps, completed, isValidSteps, isValidCompleted])

  const handleProgress = useMemo(() => {
    switch (completed) {
      case 1:
        return `${style.skill} ${style.ten}`
      case 2:
        return `${style.skill} ${style.twenty}`
      case 3:
        return `${style.skill} ${style.thirty}`
      case 4:
        return `${style.skill} ${style.fourty}`
      case 5:
        return `${style.skill} ${style.fifty}`
      case 6:
        return `${style.skill} ${style.sixty}`
      case 7:
        return `${style.skill} ${style.seventy}`
      case 8:
        return `${style.skill} ${style.eighty}`
      case 9:
        return `${style.skill} ${style.ninety}`
      case 10:
        return `${style.skill} ${style.ten}`
      default:
        return `${style.skill} ${style.empty}`
    }
  }, [completed])

  return (
    <div className={style.progressBar}>
      <span className={style.title}>Progress bar component</span>
      {isValidCompleted ? (
        <div className={`${handleProgress}`} id="handleProgress">
          <div className={style.outer}>
            <div className={style.inner}>
              <div className={style.bgMiddle}>
                <img src={ProductBoxImg} alt="" />
              </div>
            </div>
          </div>
          <ProgressBarImg />
        </div>
      ) : (
        <div className={style.messageError}>
          <div className={style.outer}>
            <div className={style.inner}>
              <span>Não foi possível carregar as informações</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Circle

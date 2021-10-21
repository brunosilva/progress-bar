// packages
import React, { useCallback, useMemo, useState } from 'react'

// styles
import style from './style.module.scss'

// assets
import { ReactComponent as ProgressBarImg } from '../../assets/svg/bg.svg'
import ProductBoxImg from '../../assets/svg/box.png'

interface IProps {
  completed: number
  // showPercentage: boolean
}
const Circle: React.FC<IProps> = ({ completed }) => {
  //const [percent, setPercent] = useState<number>(0)
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

  // const handlePercentage = useCallback(() => {
  //   //console.log(parseInt(((completed / 8) * 100).toFixed(2)))
  //   setPercent(parseInt(((completed / 8) * 100).toFixed(2)))
  // }, [completed])

  // if (showPercentage) handlePercentage()

  const isInvalid =
    completed < 0 ||
    completed > 8 ||
    completed === null ||
    completed === undefined

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
      default:
        return `${style.skill} ${style.empty}`
    }
  }, [completed])

  return (
    <div className={style.progressBar}>
      {isInvalid ? (
        <div className={style.messageError}>
          <div className={style.outer}>
            <div className={style.inner}>
              <span>Não foi possível carregar as informações</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${handleProgress}`}>
          <div className={style.outer}>
            <div className={style.inner}>
              <div className={style.bgMiddle} id="number">
                <img src={ProductBoxImg} alt="" />
              </div>
            </div>
          </div>
          <ProgressBarImg />
        </div>
      )}
    </div>
  )
}

export default Circle

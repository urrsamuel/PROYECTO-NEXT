import style from "./ResidentStatus.module.css"

interface ResidentStatusProps{
    totalResidentes : number
}


export default function ResidentStatus({totalResidentes}: ResidentStatusProps) {
  return (
    <div>
        <div>
            <div className={style.percentage_display}>
                <div className={style.circle_progress}>
                    <div className={style.percentage_number}>{totalResidentes}
                    </div>
                </div>
                <div>Residentes Inscritos</div>
            </div>
        </div>
    </div>
  )
}

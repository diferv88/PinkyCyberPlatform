import './InformationBox.styles.scss'

export const InformationBox = ({value,colour}) => <div className={`information-div colour-${colour}`}>{value}</div>
  

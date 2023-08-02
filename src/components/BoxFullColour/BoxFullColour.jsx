import "./BoxFullColour.styles.scss"

const BoxBorderColour = ({percent})=>{
    let tipe =  percent.replace("%", "");
    tipe = parseInt(tipe, 10);
    tipe = tipe >= 70 ? 'red' : tipe >= 45 ? 'orange' : 'green';
    return <div className={`${tipe}-div`}>{percent}</div>

} 

export default BoxBorderColour
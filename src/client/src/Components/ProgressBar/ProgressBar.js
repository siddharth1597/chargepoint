import './ProgressBar.css';

const ProgressBar = (props) => {
    const { value, unit, heading, enableAlert = false } = props;
    return (
        <div className="progressWrapper">
            <h4 className='progressHeading'>{heading}</h4>
            <div className="progressBarContainer">
                <div className={`bar ${enableAlert && "alert"}`} style={{ width: `${value}%` }}>
                    <span className="barValue">{value} {unit}</span>
                    {enableAlert && <span className='alertText'>Drive slow!!!</span>}
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
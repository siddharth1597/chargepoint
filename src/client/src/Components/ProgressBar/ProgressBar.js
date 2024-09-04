import './ProgressBar.css';

const ProgressBar = (props) => {
    const { value, unit, heading } = props;
    return (
        <div className="progressWrapper">
            <h4 className='progressHeading'>{heading}</h4>
            <div className="progressBarContainer">
                <div className="bar" style={{width: `${value}%`}}><span className="barValue">{value} {unit}</span></div>
            </div>
        </div>
    )
}

export default ProgressBar
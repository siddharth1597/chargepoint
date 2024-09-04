import './HeadingWithText.css';

const HeadingWithText = (props) => {
    const { heading, value, unit } = props;
    return (
        <div className="detailWrapper">
            <h4 className="detailHeading">{heading}</h4>
            <span className="valueUnit">{value} {unit}</span>
        </div>
    )
}

export default HeadingWithText
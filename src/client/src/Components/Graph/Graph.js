import { useEffect, useState } from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import "./Graph.css";
import { getGraphDataSetConfig, getGraphOptionsConfig } from "../../configs";

const Graph = (props) => {
    const { xAxis, yAxis, heading, label, color } = props;
    const [valueX, setValueX] = useState([]);
    const [valueY, setValueY] = useState([]);

    useEffect(() => {
        if (xAxis) {
            setValueX([...valueX, xAxis]);
        }
    }, [xAxis])

    useEffect(() => {
        if (yAxis) {
            setValueY([...valueY, yAxis]);
        }
    }, [yAxis])

    return (
        <div className="chartContainer">
            {valueX.length && valueY.length &&
                <Line
                    data={{
                        labels: valueX,
                        datasets: [getGraphDataSetConfig(label, valueY, color)]
                    }}
                    options={getGraphOptionsConfig(label, heading)}
                />}
        </div>
    );
}
export default Graph;
export const accessTokenForDev = "pk.eyJ1Ijoic2lkMTU1OTciLCJhIjoiY20wbmx2ZGl1MGRwazJqc2dlbGt0MGJjOSJ9.X-83Z676q9t6yf7QdiwXKg";

export const getGraphDataSetConfig = (label, valueY, color = "#0071bd") => {
    return {
        label,
        data: valueY,
        fill: true,
        borderColor: color,
        pointStyle: false,
        tension: 0.1,
    }
}

export const getGraphOptionsConfig = (label, graphHeading) => {
    return {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: graphHeading,
            },
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                offset: true,
                stack: 'stacked',
                title: {
                    display: true,
                    text: 'Time',
                }
            },
            y: {
                beginAtZero: true,
                stack: 'stacked',
                title: {
                    display: true,
                    text: label,
                }
            }
        }
    }
}
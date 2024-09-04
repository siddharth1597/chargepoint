export const accessTokenForDev = "pk.eyJ1Ijoic2lkMTU1OTciLCJhIjoiY20wbmx2ZGl1MGRwazJqc2dlbGt0MGJjOSJ9.X-83Z676q9t6yf7QdiwXKg";

export const getGraphDataSetConfig = (valueY) => {
    return {
        data: valueY,
        fill: false,
        borderColor: '#0071bd',
        // pointStyle: false,
        tension: 0.4,
    }
}

export const getGraphOptionsConfig = (graphHeading) => {
    return {
        plugins: {
            title: {
                display: true,
                text: graphHeading,
            },
            legend: {
                display: false
            },
            scales: {
                x: {
                    beginAtZero: true,
                    suggestedMin: 50,
                    suggestedMax: 100,
                },
                y: {
                    suggestedMin: 50,
                    suggestedMax: 100,
                }
            }
        }
    }
}
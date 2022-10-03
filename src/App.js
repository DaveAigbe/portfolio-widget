import React, {useEffect, useState} from 'react';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import axios from 'axios';
import Graph from './components/Graph';
import CircleLoader from './components/CircleLoader';

ChartJS.register(ArcElement, Tooltip, Legend);

const apiData = async () => {
    const res = await axios.get('http://portfoliowidgetapi-env.eba-yb2ar4we.us-east-1.elasticbeanstalk.com/workouts/?json=true');
    const data = await res.data;

    return data;
};

export default function App() {
    const [graphData, setGraphData] = useState({});
    // Loading state, will ensure that something still renders while data is being pulled
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiData().then((data) => {
                setGraphData(data);
                setLoading(false);
            }
        );
    }, []);

    if (loading) {
        return (
            <CircleLoader/>
        );
    } else {
        return (
            <Graph graphData={graphData}/>
        );
    }
}

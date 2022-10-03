import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const Graph = ({graphData}) => {
    const fat = ((graphData[0].fat_percentage) / 100) * graphData[0].weight;
    const muscle = graphData[0].muscle_mass;
    const data = {
        labels: ['Muscle(lbs)', 'Fat(lbs)'],
        datasets: [
            {
                label: 'Fitness Visualization',
                data: [muscle, fat],
                backgroundColor: [
                    'rgba(101,210,114,0.5)',
                    'rgba(229,18,35,0.5)',
                ],
                borderColor: [
                    'rgb(60,129,68)',
                    'rgb(148,13,23)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div
            className={'flex flex-col items-center justify-center h-screen w-screen bg-teal-300-50 from-teal-200 bg-gradient-to-tl'}>
            <div className={'border-2 border-gray-300 rounded p-2 bg-gray-100 shadow-black shadow-2xl'}>
                <h1 className={'text-2xl font-medium text-center text-teal-600'}>Total: {graphData[0].weight}</h1>
                <div className={'h-80 h-80'}>
                    <Doughnut data={data}/>
                </div>
            </div>
        </div>
    );
};

export default Graph;

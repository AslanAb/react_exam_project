import React from 'react';
import { IItems } from '../types';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartComponent = (props:IItems) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'График по товарам'
            },
        },
    };
    
    const labels = [...props.items.map(el => el.name)];
    
    const data = {
        labels,
        datasets: [
            {
                label: 'Количество',
                data: [...props.items.map(el => el.quantity)],
                backgroundColor: 'rgb(154 52 18)',
            },
            {
                label: 'Общая сумма продажи',
                data: [...props.items.map(el => el.total_price)],
                backgroundColor: 'rgb(4 120 87)',
            },
        ],
    };

    return <Bar options={options} data={data} />;
}



export default ChartComponent

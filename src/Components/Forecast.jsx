import React from 'react';
import { LineChart, Line, CartesianGrid, YAxis, Tooltip } from 'recharts';
import '../styles/Forecast.css'

const Forecast = ({ weatherForecast }) => {

    let data = weatherForecast.list
    const dataToVisualize = data?.map(oneData => oneData.main)

    return (
        <>
            <h2 className='title'>Temperature forecast for next 5 days</h2>
            <LineChart width={360} height={250} data={dataToVisualize} className='dataToVisualize'>
                <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <YAxis />
                <Tooltip />
            </LineChart>

        </>
    )
}

export default Forecast
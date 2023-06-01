import React from 'react'
import "./Chart.scss";
import { ResponsiveContainer, XAxis, YAxis, LineChart, Line, CartesianGrid } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: '',
            uv: 110,
            pv: 200,
        }, {
            name: 'Week 1',
            uv: 420,
            pv: 390,
        }, {
            name: 'Week 2',
            uv: 160,
            pv: 200,
        }, {
            name: 'Week 3',
            uv: 440,
            pv: 300,
        }, {
            name: 'Week 4',
            uv: 190,
            pv: 210,
        }, {
            name: '',
            uv: 250,
            pv: 410,
            amt: 2400
        }
    ];







    return (
        <div className='chart-container'>
            <div className="top">
                <div className="top-left">
                    <div className="activities">Activities</div>
                    <div className="date-picker">May-June 2021 <img src="./options.png" alt="options-picker" /> </div>
                </div>
                <div className="top-right">
                    <div className="legand-1">
                        <div className="legand-color"></div>
                        <div className="legand-guests">Guests</div>
                    </div>
                    <div className="legand-2">
                        <div className="legand-color"></div>
                        <div className="legend-user">User</div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <ResponsiveContainer width="100%" height="85%">
                    <LineChart className="chart" data={data}>
                        <CartesianGrid vertical={false} />
                        <XAxis tickLine={false} axisLine={false} dataKey="name" />
                        <YAxis axisLine={false} tickLine={false} />
                        <Line dot={false} strokeWidth={3} type="monotone" dataKey="uv" stroke="#E9A0A0" />
                        <Line type="monotone" strokeWidth={3} dot={false} dataKey="pv" stroke="#9BDD7C" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart
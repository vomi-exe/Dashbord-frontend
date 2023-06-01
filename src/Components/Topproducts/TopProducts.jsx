import React from 'react'
import "./TopProducts.scss"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
const data = [
    { name: 'Group C', value: 140 },
    { name: 'Group A', value: 550 },
    { name: 'Group B', value: 310 },
];

const COLORS = ['#EE8484','#98D89E','#F6DC7D'];


const TopProducts = () => {
    return (
        <div className='piechart'>
            <div className="top">
                <div className="top-left">
                    Top Products
                </div>
                <div className="top-right">
                    May-June 2021 <img src="./options.png" alt="options-picker" />
                </div>
            </div>
            <div className="bottom">
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={70}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="legands">
                    <div className="legand-1">
                        <div className="legend-top">
                            <div className="legand-color"></div>
                            <div className="legand-name">Basic Tees</div>
                        </div>
                        <div className="legend-bottom">
                            55%
                        </div>
                    </div>
                    <div className="legand-2">
                        <div className="legend-top">
                            <div className="legand-color"></div>
                            <div className="legend-name">Custom Short Pants</div>
                        </div>
                        <div className="legend-bottom">
                            31%
                        </div>
                    </div>
                    <div className="legand-3">
                        <div className="legend-top">
                            <div className="legand-color"></div>
                            <div className="legend-name">Super Hoodies</div>
                        </div>
                        <div className="legend-bottom">
                            14%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProducts;
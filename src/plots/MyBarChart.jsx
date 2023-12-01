import React, {PureComponent} from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400
    },

    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210
    },

    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2181
    }, 
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181
    }
   
    
]

const MyBarChart = () => {
    return (
        <BarChart width={350} height={350} data={data} Legend>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis dataKey="amt"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="uv" fill="#007ea7"/>
        </BarChart>
    )
}

export default MyBarChart;
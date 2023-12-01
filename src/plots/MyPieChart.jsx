
import { LineChart, Line, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const data = [
    {name: 'Jan', value: 400 },
    {name: 'Feb', value: 300 },
    {name: 'Match', value: 200 },
    {name: 'April', value: 500 },
    {name: 'May', value: 700 },
    {name: 'June', value: 900 }

]


const MyPieCahrt = () => {
    return ( 
        <LineChart data={data} width={300} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis dataKey="value"/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#007ea7" />
        </LineChart>
     );
}
 
export default MyPieCahrt;
import React from 'react';
import './Sales.css';

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  LineChart, Line,
  Sector, 
  Cell,
  ResponsiveContainer,
} from "recharts";



const Sales = () => {
   const data = [
    { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div className='home-s'>
      <div className="top-s">
        <div className="top-s-content">
          <h1 style={{color: "blue"}}>$4000</h1><br/>
          Total Revenue
          </div>
        <div className="top-s-content">
         <h1 style={{color: "blue"}}>240</h1><br/>
          Total Orders
          </div>
        <div className="top-s-content">
          <h1 style={{color: "blue"}}>1.2%</h1><br/>
          Customer Churn Rate
          </div>
        <div className="top-s-content">
          <h1 style={{color: "blue"}}>8.5%</h1><br/>
          Repeat Purchase Rate
          </div>
      </div>

      <div className="middle-s">
        <div className="middle-s-content">
          <h3>Customer Churn Rate</h3>
          <br/>
          <h4 style={{textAlign: "right"}}> Day of the Week<span class="fa fa-caret-down"></span></h4>
          <PieChart width={200} height={200}>
          <Pie 
           data={data} dataKey="value" 
           cx="50%" cy="50%" outerRadius={60}
           fill="#8884d8" />
          <Tooltip />
          
        </PieChart>
        
        </div>
        <div className="middle-s-content" style={{ textAlign: "center"}}>
          <h3>Most selling product</h3>
          <br/>
          <h4 style={{textAlign: "right"}}>Week<span class="fa fa-caret-down"></span> Month<span class="fa fa-caret-down"></span> Year <span class="fa fa-caret-down"></span></h4>
           <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
      </div>
      <div className="middle-s">
        <div className="middle-s-content">
           <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
        <div className="middle-s-content">
           <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
        </div>
      </div>
      <div className="middle-s">
        <div className="middle-s-content">1</div>
        <div className="middle-s-content">2</div>
      </div>
      <div className="middle-s">
        <div className="middle-s-content">1</div>
        <div className="middle-s-content">2</div>
      </div>
       
    </div>
  );
};

export default Sales;

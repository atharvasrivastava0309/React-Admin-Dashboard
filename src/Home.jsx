import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 2000,
          pv: 3400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 2300,
          pv: 5398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 900,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 9808,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1690,
          pv: 4200,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 5800,
          amt: 2500,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD </h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>254</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>18</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>29</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>38</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
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
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#1e90ff" />
                <Bar dataKey="uv" fill="#2e8b57" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
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
                <Line type="monotone" dataKey="pv" stroke="#1e90ff" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#2e8b57" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home
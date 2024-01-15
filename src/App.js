
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    // Fetch processed data from Express server
    axios.get('http://localhost:3000/analytics-data')
      .then(response => setAnalyticsData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>Data Visualization</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Average X-axis Accelerometer Data</th>
            <th>Average Y-axis Accelerometer Data</th>
            <th>Average Z-axis Accelerometer Data</th>
          </tr>
        </thead>
        <tbody>
          {analyticsData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.x.toFixed(2)}</td>
              <td>{data.y.toFixed(2)}</td>
              <td>{data.z.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

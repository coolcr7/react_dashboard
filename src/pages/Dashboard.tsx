import {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Covid19 from '../components/Covid19';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

// Sample data for the line graph
interface HistoricalData { 
 [date: string]: number;
};

export default function  Dashboard() {
   
   const [CovidData,setCovidData]=useState<any>({dates:[],cases:[]})
   useEffect(()=>{
   const bull=axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
   .then(response => {
     const data = response.data.cases;
     const dates: string[] = Object.keys(data);
     const cases: number[] = Object.values(data);
 
     // Process the extracted dates and cases
     console.log(dates.length);
     console.log(cases.length);
     setCovidData({dates,cases})
     
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error(error);
    });
  },[])

   const data = {
    labels: CovidData?.dates,
    datasets: [
      {
        label: 'Data 1',
        data: CovidData?.cases,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  console.log(CovidData)
  const options = {
    scales: {
      x: {
        type: 'category', // Ensure "category" scale is specified for x-axis
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };


  return (
    <>
    <div className=" mt-8 flex justify-center items-center min-w-[1000px] w-[100vw] h-[60vh]">
      <Line className='mt-8 w-[70vw]' data={data}/>
    </div>
    <div className='w-[100vw] flex mt-8 justify-center items-center'>

       <Covid19/>
    </div>
    </>

  );
};

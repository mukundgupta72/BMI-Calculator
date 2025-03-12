import React, { useState } from 'react';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiValue, setBmiValue] = useState(null);
  const [message, setMessage] = useState('');
  const [advice, setAdvice] = useState('');

  const bmiCalc = () => {
  if (!weight || !height || weight <= 0 || height <= 0) {
    setMessage('Please enter valid weight and height.');
    setBmiValue(null);
    setAdvice('');
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  setBmiValue(bmi);

  if (bmi < 18.5) {
    setMessage('Underweight');
    setAdvice('Try eating more nutritious, high-calorie foods and consider strength training.');
  } else if (bmi >= 18.5 && bmi < 25) {
    setMessage('Normal Weight');
    setAdvice('Maintain a balanced diet and regular exercise to stay healthy.');
  } else if (bmi >= 25 && bmi < 30) {
    setMessage('Overweight');
    setAdvice('Incorporate more physical activity and reduce high-calorie foods.');
  } else {
    setMessage('Obesity');
    setAdvice('Consider a structured diet plan and regular exercise for better health.');
  }
  };

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-black text-white p-4'>
      <div className='w-full max-w-md'>
        <h1 className='text-4xl font-bold text-center'>BMI CALCULATOR</h1>
        <div className='mt-4 rounded-2xl bg-gradient-to-r from-zinc-300 to-slate-300 p-8 text-black'>
          <div className='flex flex-col'>
            <label htmlFor='weight' className='text-2xl my-4 text-blue-950 font-bold'>Weight (kg)</label>
            <input type='number' id='weight' placeholder='Enter weight in kilograms' 
              className='bg-gray-800 text-white rounded-md px-4 py-2' 
              value={weight} onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className='mt-4 flex flex-col'>
            <label htmlFor='height' className='text-2xl my-4 text-blue-950 font-bold'>Height (m)</label>
            <input type='number' id='height'placeholder='Enter height in meters' 
              className='bg-gray-800 text-white rounded-md px-4 py-2' 
              value={height} onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button className='bg-blue-600 mt-8 w-full text-2xl rounded-md py-2' onClick={bmiCalc}>Calculate</button>
        </div>
        
        {message && (
        <div className='mt-8 text-2xl bg-gray-800 rounded-md px-8 py-8'>
          {bmiValue !== null && <h2 className='text-center'>BMI Value: {bmiValue}</h2>}
          <h2 className='text-center'>{message}</h2>
        </div>
        )}

      {advice && (
      <div className='mt-4 text-xl bg-gray-700 rounded-md px-3 text-center'>
        <p className="mt-4 text-lg text-gray-300">Tip : {advice}</p>
      </div>
      )}

      </div>
    </div>
  );
};

export default App;
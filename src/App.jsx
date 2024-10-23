import React from 'react';
import './App.css';
import Box from '../Components/Box';

function App() {
  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <Box value={15} lb={10} ub={20} refreshTime={10} bgColor="bg-orange-200" />
          <Box value={-1} lb={-10} ub={10} refreshTime={20} bgColor="bg-blue-200" />
          <Box value={-80} lb={-100} ub={0} refreshTime={8} bgColor="bg-green-200" />
          <Box value={18} lb={0} ub={20} refreshTime={12} bgColor="bg-yellow-400" />
          <Box value={-35} lb={-40} ub={40} refreshTime={16} bgColor="bg-blue-300" />
          <Box value={167} lb={100} ub={200} refreshTime={14} bgColor="bg-gray-300" />
        </div>
      </div>
    </>
  );
}

export default App;

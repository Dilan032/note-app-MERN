import React from 'react'
import Navbar from '../components/Navbar'
import NoteModel from '../components/NoteModel';

const Home = () => {
  const [isModelOpen, setModelOpen] = React.useState(false);

  const closeModel = () => {
    setModelOpen(false);
  }

  return (
    <>
      <div className="bg-gray-300 min-h-screen">
        <Navbar />

        <button
          onClick={() => setModelOpen(true)}
          className='fixed text-7xl p-2 right-10 bottom-7 font-bold rounded-2xl shadow-2xl cursor-pointer hover:ring-2 hover:ring-teal-400 hover:outline-none'>
          +
        </button>

        {isModelOpen && <NoteModel closeModel={closeModel} />}
      </div>
    </>
  )
}

export default Home
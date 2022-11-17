import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ListNotes from '../components/ListNotes'

const Home = () => {


  return (
    <div
    className="bg-slate-300 w-full h-screen"
    >
      <ListNotes/>
    </div>

  )
}

export default Home
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useState} from 'react'
import { setMovieData } from '../store/MovieSlice'


function AddMovie() {

    const [data,setData] = useState({
        movieName:"",
        movieDescription:"",
    })

    const dispatch = useDispatch()
    const movie = useSelector((state) => state.movie.movieData)

    
  return (
    <div>
        <p>Dizi Adı</p>
        <input onChange={(e)=>{setData({...data,movieName:e.target.value})}} type="text"/>
        <br />
        <p>Dizi Açıklaması</p>
        <input onChange={(e)=>{setData({...data,movieDescription:e.target.value})}} type="text"/>
        <button onClick={()=> dispatch(setMovieData(data))}>Ekle</button>
    </div>
  )
}

export default AddMovie
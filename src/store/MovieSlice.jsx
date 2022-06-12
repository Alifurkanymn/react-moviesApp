import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        movieData: {},
    },
    
    reducers:{
        setMovieData : (state, action) => {
            axios.post(`https://react-movie-dffb6-default-rtdb.firebaseio.com/movies.json`,JSON.stringify(action.payload))
            .then((response) => {
                console.log(response);
            })
        }
    }
})

export const { setMovieData } = movieSlice.actions

export default movieSlice.reducer
import ReviewList from './ReviewList'
import { WidgetContainerVertical, WidgetHeader, WidgetHeaderTitle } from '../styles'
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

function AllReviews() {
    const [backendReviews, setBackendReviews] = useState([])
    useEffect(() => {

        fetch('https://movie-articles-and-news.p.rapidapi.com/articles/imdb', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'movie-articles-and-news.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            }
        })
        .then(res => res.json())
        .then(data => {
            data = data.slice(0, 10)
            data = formatData(data)
            console.log(data)
            setBackendReviews(data)
        })
        
    }, [])

    const fetchAllReviews = async () => {
        fetch('https://movie-articles-and-news.p.rapidapi.com/articles/imdb', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'movie-articles-and-news.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            }
        })
        .then(res => res.json())
        .then(data => {
            data = data.slice(0, 10)
            setBackendReviews(formatData(data))
        })
    }

    const formatData = (data) => {
        const returnData = [data.map(review => {
            return {
                id: uuidv4(),
                icon: review.image,
                title: review.title,
                description: review.summary,
                user: review.source,
                createdOn: '',
                type: '',
            }
        })]
        console.log(returnData)
    } 

    return(
        <>
            <WidgetContainerVertical>
            <WidgetHeader>
                <WidgetHeaderTitle>Movie reviews</WidgetHeaderTitle>
            </WidgetHeader>   
            <ReviewList items={backendReviews}/>
            </WidgetContainerVertical>
        </>
    )
}

export default AllReviews
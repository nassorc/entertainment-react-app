import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getReviews as getReviewsApi } from '../api'
function ReviewDetials() {
    const [reviewDetails, setReviewDetails] = useState({})
    const {id} = useParams()
    console.log(reviewDetails)
    useEffect(() => {
        getReviewsApi()
        .then(data => {
            data.forEach(data => {
                if (data.id === id) {
                    setReviewDetails(data)
                }
            })
        })
    }, [])

    return(
        <div>
            <div>
                <h2>{reviewDetails.title}</h2>
            </div>
            <div>
                <p>By: {reviewDetails.user}</p>
                <p>{reviewDetails.createdOn} | {reviewDetails.commentsLength}</p>
            </div>
            <div>
                <img src={reviewDetails.icon} alt='movie poster'/>
                <p>{reviewDetails.description}</p>
            </div>
        </div>

    )
}

export default ReviewDetials
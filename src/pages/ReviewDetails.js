import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
function ReviewDetials() {
    const [reviewDetails, setReviewDetails] = useState({})
    const {id} = useParams()

    return(
        <div>
            review info
        </div>

    )
}

export default ReviewDetials
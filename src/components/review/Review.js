import { Link } from 'react-router-dom'
import { truncateText } from '../../utils/truncateText'
import { ReviewCard, Image, IconImageContainer, Title, ReviewUnitRight, Information } from '../styles'
import notFound from '../../images/notfound.png'
function Review(props) {
    return(
        <ReviewCard>
            <IconImageContainer>
                { (!props.icon || props.icon == 'N/A') ? <Image src={notFound}/> : <Image src={props.icon}/>}
            </IconImageContainer>
            <ReviewUnitRight>
                <Title><Link to={`/review/${props.id}`}>{props.title}</Link></Title>
                <p>{truncateText(props.description, 280, `/review/${props.id}`)}</p>
                <Information><span>{props.createdOn} by</span> <span><a href="#">{props.author}</a></span> | Discuss ({props.commentsLength} comments)</Information>
            </ReviewUnitRight>
        </ReviewCard>
    )
}
export default Review
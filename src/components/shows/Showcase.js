import { Link } from 'react-router-dom'
import { ShowcaseItem,ShowcaseImageContainer,Image, ShowcaseTitleContainer } from '../styles'
import notFound from '../../images/notfound.png'
function Showcase(props) {
    return (
        <>
        <Link to={`/media/${props.id}`}>
            <ShowcaseItem>
                <ShowcaseImageContainer>
                    {(!props.icon || props.icon == 'N/A') ? <Image src={notFound}/> : <Image src={props.icon} alt="media poster"/>}
                </ShowcaseImageContainer>
                <ShowcaseTitleContainer>{props.title}</ShowcaseTitleContainer>
            </ShowcaseItem>
        </Link>
        </>
    )
}

export default Showcase

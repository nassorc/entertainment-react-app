import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { WidgetContainer, WidgetContainerHorizontal, Title, WidgetHeaderTitle, WidgetHeader, ScrollLeftButton, ScrollRightButton, ShowcaseItem, ShowcaseImageContainer, Image  } from "../styles";
import { getTrendingMovies } from '../../api'
function DisplayShows() {
    const [backendTrendingMovies, setBackendTrendingMovies] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            const formattedData = formatData(data.results)
            setBackendTrendingMovies(formattedData)
        })
    }, [])

    const handleScrollRight = () => {
        document.getElementById('horizontal-container').scrollLeft += 700;
    }
    const handleScrollLeft = () => {
        document.getElementById('horizontal-container').scrollLeft -= 700;
    }

    const formatData = (dataList) => {
        return dataList.map(data => {
            return {
                id: data.id,
                user: '',
                icon: 'https://image.tmdb.org/t/p/w500'+data.poster_path,
                title: data.title,
                description: data.overview,
                createdOn: data.release_date,
                type: '',
            }
        })
    } 

    return (
        <WidgetContainer>
            <WidgetHeader>
                <WidgetHeaderTitle>Trending shows</WidgetHeaderTitle>
            </WidgetHeader>
            
            <ScrollRightButton onClick={handleScrollRight}> right </ScrollRightButton>
            <ScrollLeftButton onClick={handleScrollLeft}> left </ScrollLeftButton> 
            <WidgetContainerHorizontal id="horizontal-container">
                {backendTrendingMovies.map(movie => {
                    return (
                        <div>
                            <Link to={`/media/${movie.id}`}>
                                <ShowcaseItem>
                                {/* <Title style={{display: "inline", }}>{movie.title}</Title> */}
                                <ShowcaseImageContainer>
                                <Image src={movie.icon} alt="media poster"/>
                                </ShowcaseImageContainer>
                                </ShowcaseItem>
                            </Link>
                        </div>
                    ) 
                })}
            </WidgetContainerHorizontal>
        </WidgetContainer>
    )
}
export default DisplayShows;
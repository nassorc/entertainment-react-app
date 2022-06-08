import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImg from '../../images/homepage-search-bg.jpg'
import { Image, SearchContainer } from '../styles';
import 'boxicons'
const styles = {
    formContainer: {
        margin: "0 auto",
        position: "relative",
        width: "40em",
        top: "100%"
    },
    formm: {
        position: "relative",
        top: "-1.3em"
    },
    formInput: {
        width: "100%",
        height: "3em",
        paddingInline: "1em",
        fontSize: "1em",
        letterSpacing: "2.2px",
    },
    SearchIcon: {
        border: "none",
        width: "4.8em",
        padding: "5px 0px 5px 0px",
        float: "right",
        position: "relative",
        top: "-3em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
}
function HomepageSearchContainer () {
    const navigate = useNavigate()
    const [movieInput, setMovieInput] = useState('')
    

    const findMovie = async (title) => {
        const params = {
            param1: title
        }
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${title}&plot=full`)
        .then(res => res.json())
        .then(data => navigate(`/results/${title}`, { state: data}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        findMovie(movieInput)
    }

    return (
        <SearchContainer>
            <div style={styles.formContainer}>
                <form style={styles.formm}>
                    <input 
                        style={styles.formInput} 
                        placeholder="Search..."
                        value={movieInput}
                        onChange={(e) => setMovieInput(e.target.value)}
                    />

                    <button style={styles.SearchIcon} onClick={handleSubmit}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABaUlEQVRIS9WV4VECQQyFoQPtADvQCjwqEDs4OtAKwArACjwqUCuQDsAKpAMpgffNJM4iu7n7cYxjZjJ3zF7y3kuyYTg4sw3PnH8QAVwLvJLfykfyC/lW/ilv5Lsu5EoAtYIXlrSU51EHyzaQHMCrgiYW+Kbnytju9UTVnRwC2Fo+jkB+AzwYc5JN5QDkDKAPUxgqSQFGCthY0H2Q3AErA+H3lak8IZMCOPvG2EfK/exFL7X8ST7PBaQAXvsu7D0XvSKOUhIXKvjSKWUqys3EM7rfcnp2+ecAXk+mhz50sUofMU1cwJs2BTRpFtUzk8BjIASxsAfUnz5gXJ51iwTY02D/HhUhAIfpRWMqSiAkp6SQYl1w2bKWWxXUlAQYwe9yZ5euCiYI4wzFTNKJlZadKykRI1ljRAAtgrStay4S65ok2M6SPdsTFSgugvTxhxOC9AGAshTkaLv2BeAgtV4YjB/rEyA7EP8f4ABDX04ZQpGOLAAAAABJRU5ErkJggg=="/></button>
                </form>
            </div>
        </SearchContainer>
    )
}

export default HomepageSearchContainer;
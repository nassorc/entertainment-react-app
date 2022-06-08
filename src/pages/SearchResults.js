import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import HomepageSearchContainer from '../components/search/HomepageSearchContainer'
import Showcase from '../components/shows/Showcase'
import { MainColumn,GridContainerVertical, GridItem, WidgetHeader, WidgetHeaderTitle } from '../components/styles'
function SearchResults () { 
    const [searchResults, setSearchResults] = useState([])
    const data = useLocation().state
    const {searchQuery} = useParams()
    useEffect(()=> {
        formatData(data)
    }, [searchResults, data])

    const formatData = (data) => {
        if(data.Error) {
            return
        }
        let formattedResults = []
        data.Search.forEach(item => {
            const itemObj = {
                id: item.imdbID,
                user: '',
                icon: item.Poster,
                title: item.Title,
                description: '',
                createdOn: item.Year,
                type: 'Movie'
            }
            formattedResults.push(itemObj)
        })
        setSearchResults(formattedResults)
    }
    if(data.Error) {
        return (
            <>
            <HomepageSearchContainer />
            <MainColumn>
            <WidgetHeader>
                <WidgetHeaderTitle large={true}>"{searchQuery}" does not exists</WidgetHeaderTitle>
            </WidgetHeader>
            </MainColumn>
            </>
        )
    } else {
    return (
        <>
        <HomepageSearchContainer />
        <MainColumn>
        <WidgetHeader>
                <WidgetHeaderTitle large={true}>Results for "{searchQuery}"</WidgetHeaderTitle>
        </WidgetHeader>
        <GridContainerVertical>
            {searchResults.map(movie => {
                return <GridItem><Showcase id={movie.id} icon={movie.icon} title={movie.title}/></GridItem>
            })}
        </GridContainerVertical>
        </MainColumn>
        </>
    )
    }
}

export default SearchResults
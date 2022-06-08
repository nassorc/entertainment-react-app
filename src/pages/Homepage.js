import AllReviews from "../components/review/AllReviews";
import HomepageSearchContainer from "../components/search/HomepageSearchContainer";
import DisplayPopularShows from "../components/shows/DisplayPopularShows";
import { MainColumn } from "../components/styles";

function Homepage() {
    console.log('homepage')
    console.log(secrets.REACT_APP_API_KEY)
    return (
        <>
        <HomepageSearchContainer />
        <MainColumn>
            <DisplayPopularShows />
            <AllReviews />
        </MainColumn>
        </>
    )
}

export default Homepage;
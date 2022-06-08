import { Route, Routes} from 'react-router-dom'
import RegisterPage from './authentication/pages/RegisterPage'
import SignInPage from './authentication/pages/SignInPage'
import Layout from './layouts/Layout'
import Homepage from './pages/Homepage'
import MediaDetails from './pages/MediaDetails'
import ReviewDetials from './pages/ReviewDetails'
import SearchResults from './pages/SearchResults'
function App() {
  return(
    <Layout>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<SignInPage/>} />
        <Route path="/entertainment-react-app/" element={<Homepage />} />
        <Route path="/review/:id" element={<ReviewDetials />} />
        <Route path="/media/:id" element={<MediaDetails />} />
        <Route path="/results/:searchQuery" element={<SearchResults />} />
      </Routes> 
    </Layout>
  )
}

export default App
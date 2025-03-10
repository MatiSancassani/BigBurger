import Header from './Header'
import NavBar from '../shared/NavBar/NavBar'
import Social from './Social'

const Home = () => {

    return (
        <>
            <NavBar />
            <Social />
            <div id='home'>
                <Header />
            </div>
        </>

    )
}

export default Home
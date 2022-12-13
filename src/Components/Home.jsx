import React, { useEffect, useState } from 'react'
import './Home.scss'

const Card = ({ img }) => (
    <img className='card' src={img} alt="cardimg" />
)


let imgLink = "https://image.tmdb.org/t/p/w500/"

const Row = ({ title, arr = [] }) => (
    <div className='row'>
        <h2>{title}</h2>
        <div>
            {arr.map((value) => {
                return <Card key={value.id} img={`${imgLink}/${value.poster_path}`} />
            })}
        </div>
    </div>
)

const Home = () => {

    const [Upcomming, setUpcomming] = useState([])
    const [LatestMovies, setLatestMovies] = useState([])
    const [TopRatedMovies, setTopRatedMovies] = useState([])
    const [PopularMovies, setPopularMovies] = useState([])


    let fetchUpcomming = async () => {
        let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=3a7162fe5bf4cd250ad3973174e8062f&language=en-US&page=1"
        let scan = await fetch(url)
        let result = await scan.json()
        setUpcomming(result.results)
    }
    let fetchLatestMovies = async () => {
        let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=3a7162fe5bf4cd250ad3973174e8062f&language=en-US&page=3"
        let scan = await fetch(url)
        let result = await scan.json()
        setLatestMovies(result.results)
    }
    let fetchTopRatedMovies = async () => {
        let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=3a7162fe5bf4cd250ad3973174e8062f&language=en-US&page=1"
        let scan = await fetch(url)
        let result = await scan.json()
        setTopRatedMovies(result.results)
    }
    let fetchPopularMovies = async () => {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=3a7162fe5bf4cd250ad3973174e8062f&language=en-US&page=1"
        let scan = await fetch(url)
        let result = await scan.json()
        setPopularMovies(result.results)
    }

    useEffect(() => {
        fetchUpcomming()
        fetchLatestMovies()
        fetchTopRatedMovies()
        fetchPopularMovies()
    }, [])


    return (
        <div>
            <section className="home">
                <div className="banner" style={{ backgroundImage: 'url(https://pbs.twimg.com/media/ES6jwLpUMAIqhK0?format=jpg&name=large)' }}></div>
                <Row title="Upcomming Movies" arr={Upcomming} />
                <Row title="Latest Movies" arr={LatestMovies} />
                <Row title="Top Rated Movies" arr={TopRatedMovies} />
                <Row title="Popular Movies" arr={PopularMovies} />
            </section>
        </div>
    )
}

export default Home
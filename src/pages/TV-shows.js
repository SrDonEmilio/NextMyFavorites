import React from 'react'
import List from '../containers/List'
import Header from '../containers/Header'
import Footer from '../containers/Footer'

const TvShows = () => {
    return (
        <div>
            <Header />
            <List typeContent="tv"/>
            <Footer />      
        </div>
    )
}

export default TvShows
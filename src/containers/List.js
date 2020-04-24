import React from 'react'
import Card from '../components/Card/Card'

class List extends React.Component {

    constructor(){
        super()
        this.state = {
            data : []
        }
    }

    async componentDidMount(){
        const res = await fetch(`${API}&s=robot`)
        const resJSON = await res.json()
        console.log(resJSON.Search)
        this.setState({data: resJSON.Search})
    }

    render(){
        return (
            <div className="row">
                {
                    this.state.data.map(movie => {
                        return <Card movie={movie} key={movie.imdbID}/>
                    })
                }
            </div>
        )
    }
}

export default List
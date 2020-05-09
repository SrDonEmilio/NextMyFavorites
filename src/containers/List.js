import React from "react";
import Card from "../components/Card/Card";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    let API = process.env.API
    const res = await fetch(`${API}`, {
      method: "GET",
    })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        error.message;
      });
    const resJSON = await res.json();
    this.setState({ data: resJSON.items, loading: false });
  }
  render() {
    const { data, loading } = this.state;
    if(loading){
        return <h3 id="loading-text">Loading...</h3>
    }
    return (
      <div className="container">
        {data.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </div>
    );
  }
}

export default List;

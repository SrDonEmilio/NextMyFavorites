import React from "react";
import PropTypes from "prop-types";
import Card from "../components/Card/Card";
//import xml2js from "xml-js";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    let _platform;
    switch (this.props.typeContent) {
      case "movies":
        _platform = process.env.movies;
        break;
      case "tv":
        _platform = process.env.tv;
        break
      /*case "books":
        _platform = process.env.books
        break
        */
      default:
        break;
    }

    const res = await fetch(`${_platform}`, {
      method: "GET",
    })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        error.message;
      });

    /* if (_platform !== "books") { */
      const resJSON = await res.json();
      this.setState({ data: resJSON.items, loading: false });
    /*} else { 
      // console.log('here')
      const resXML = await res.text();
      xml2js.parseString(resXML, (err, results) => {
        if (err) {
          throw err;
        }
        // `results` is a JavaScript object
        // convert it to a JSON string
        const json = JSON.stringify(results, null, 4);

        // log JSON string
        console.log(json);
      });
    } */
  }

  render() {
    const { typeContent } = this.props;
    const { data, loading } = this.state;
    if (loading) {
      return <h3 id="loading-text">Loading...</h3>;
    }
    return (
      <div className="container" id={typeContent}>
        {data.map((content) => {
          return <Card content={content} key={content.id} />;
        })}
      </div>
    );
  }
}

List.propTypes = {
  typeContent: PropTypes.string
};

List.defaultProps = {
  typeContent: "movies",
};

export default List;

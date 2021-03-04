import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import "./App.css";
import News from "./Components/News/News";
import Status from "./Components/Status/Status";
import axios from "axios";

function App() {
  const [status, setStatus] = useState([]);
  // useEffect(() => {
  //   const url =
  //     "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=485e630ae8cb448dafe2c98c8627abb5";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setStatus(data.articles));
  // }, []);

  useEffect(() => {
    const url =
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=485e630ae8cb448dafe2c98c8627abb5";
    axios(url).then((data) => setStatus(data.data.articles));
  }, []);
  return (
    <div className="App">
      <Button variant="contained" color="secondary">
        Hello World
      </Button>
      <News></News>
      <h4>Heading: {status.length}</h4>
      {status.map((articles) => (
        <Status news={articles}></Status>
      ))}
    </div>
  );
}

export default App;

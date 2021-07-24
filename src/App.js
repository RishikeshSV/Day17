import requests from "./Assets/requests";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

import "./Styles/app.css";

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <Banner />
        <Row title="Trending" url={requests.fetchTrending} />
        <Row title="Top rated" url={requests.fetchTopRated} />
        <Row
          title="NETFLIX ORIGINALS"
          url={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Action Movies" url={requests.fetchActionMovies} />
        <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
        <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
        <Row title="Documentaries" url={requests.fetchDocumentaries} />
      </div>
    </>
  );
}

export default App;

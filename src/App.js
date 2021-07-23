import requests from "./Assets/requests";
import Row from "./Components/Row";

function App() {
  return (
    <>
      <h1>NETFLIX</h1>
      <Row title="Trending" url={requests.fetchTrending} />
      <Row title="Top rated" url={requests.fetchTopRated} />
    </>
  );
}

export default App;

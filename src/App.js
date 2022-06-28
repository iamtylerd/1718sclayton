import './App.scss';
import house from './house.jpg'

function App() {
  return (
    <div className="App">
      <h1 className="header">1718 S Clayton Ave</h1>
      <div className="main-container">
        <div className="hero-img-container"><img src={house} /></div>
        <div className="calendar"><iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23009688&ctz=America%2FNew_York&src=bzFtbGJuM25tbDFsYTRkaXNjdms5cDNqZmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5&showPrint=0&showCalendars=1" style={{ border: "solid 1px #777"}} width="100%" height="600" frameBorder="0" scrolling="no"></iframe></div>
      </div>
    </div>
  );
}

export default App;

import Server from './Server';
import './index.css';

// The entire application
function App() {
  return (
    <div>
      <div className="Main-Header-Box">
        <h1 className="Main-Header">List of Students</h1>
      </div>
      <Server />
      <div className="Footer-Box">
        <h1 className="Footer-Text"> CREATED BY FNU MILAT / 2021</h1>
      </div>
    </div>
  );
}

export default App;

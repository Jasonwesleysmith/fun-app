import Fun from './Fun'
import './App.css';

const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div className="App">
        Fun App!
      </div>
      <Fun color="crimson"/>
      <Fun color="darkorange"/>
      <Fun color="dodgerblue"/>
      <Fun color="green"/>
      <Fun color="purple"/>
    </div>
  );
}

export default App;

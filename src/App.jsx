import './App.css';
import UseJsonFetchWidget from './components/UseJsonFetchWidget';

function App() {
  const url = 'http://localhost:7070/'
  
  return (
    <div className='container'>
      <UseJsonFetchWidget url={url}/>
    </div>
  );
}

export default App;
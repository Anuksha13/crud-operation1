import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Update from './components/update/update';


function App() {
  return (
    <Router>

      <div className='main'>
        <div>
          <h3>React Crud Operation</h3>
        </div>
        <div>
          <Route exact path='/' component={Create} />
          
        </div>
        <div style={{ marginTop: 30 }}>
          <Route exact path='/read' Component={Read} />
        </div>
        <Route exact path='/update' Component={Update} />
        
      </div>
    </Router>
  );
}

export default App;

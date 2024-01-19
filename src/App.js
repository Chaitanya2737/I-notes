import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'; // 
import Home from './components/Home'; // 
import About from './components/About'; // 
import NoteState from './context/notes/NoteState'; // 
import Alert from './components/Alert'; // 
import Login from './components/Login'; // 
import Signup from './components/Signup'; // 

const App = () => {
  const [alert, setalert] = useState(null);

  const ShowAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} ShowAlert={setalert} />
              <Route path="/about" exact component={About} />
              <Route path="/login" exact component={Login} ShowAlert={setalert} />
              <Route path="/signup" exact component={Signup} ShowAlert={setalert} />
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
};

export default App;

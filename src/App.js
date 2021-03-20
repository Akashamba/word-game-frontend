import React from 'react';
import Header from './components/header/header.component.jsx';
import NewWord from './pages/new-word/new-word.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        <br/><br/><br/><br/><br/>
        <Switch> 
            <Route exact path='/' component={NewWord}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
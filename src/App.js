import React from 'react';
import Header from './components/header/header.component.jsx';
import NewWord from './pages/new-word/new-word.component.jsx';
import SignUp from './pages/sign-up/sign-up.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        <br/><br/><br/><br/><br/>
        <Switch> 
            <Route exact path='/' component={NewWord}/>
            <Route exact path='/sign-up' component={SignUp}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
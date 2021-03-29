import React from 'react';
import Header from './components/header/header.component.jsx';
import NewWord from './pages/new-word/new-word.component.jsx';
import SignUp from './pages/sign-up/sign-up.component.jsx';
import SignIn from './pages/sign-in/sign-in.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {
    const [user, setUser] = React.useState({
        token: localStorage.getItem("token"),
        username: localStorage.getItem("username")
    })
  return (
    <div className="App">
        <Header user={user} setUser={setUser}/>
        <br/><br/><br/><br/><br/>
        <Switch> 
            <Route exact path='/' render={() => <NewWord user={user}/>}/>
            <Route exact path='/sign-up' render={() => <SignUp setUser={setUser}/>}/>
            <Route exact path='/sign-in' render={() => <SignIn setUser={setUser}/>}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
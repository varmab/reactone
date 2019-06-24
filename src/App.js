
import logo from './logo.svg';
import './App.css';

import React, { Suspense, lazy } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Upload from './Upload';



class App extends React.Component {
  constructor(){
    super();

    this.state={
      count:0
    }

    var routesFromDB=[
      {
        id:1,
        path:"/",
        component:"HomePage"
      },
      {
        id:2,
        path:"/about",
        component:"AboutPage"
      },
      {
        id:3,
        path:"/contact",
        component:"ContactPage"
      }
    ]

    this.state={
      routes:routesFromDB
    }
    
  }


  render() {
    return (
      <div className="App">
        {/* <Router>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              {
                this.state.routes.map((route)=>{
                  return <Route exact path={route.path} component={lazy(() => import(`./containers/${route.component}`))}/>
                })
              }
            </Suspense>
          </Switch>
        </Router> */}
        <Upload/>
      </div>
    );
  }
}

export default App;

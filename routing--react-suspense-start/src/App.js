import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';


import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts'));
const User = React.lazy(() => import('./containers/User'));

class App extends Component {
  state = { show: false }
  modeHandler = () => {
    this.setState(prevState => {
      return { show: !prevState.show }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.modeHandler}>Toggle Mode</button>
        {this.state.show ?
          <Suspense fallback={<div>Loading..</div>}><Posts /></Suspense>
          :
          <Suspense fallback={<div>Loading..</div>}><User /></Suspense>}
      </div>
      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" render={() => <Suspense fallback={<div>Loading..</div>}><User /></Suspense>} />

      //     <Route path="/posts" render={() => <Suspense fallback={<div>Loading..</div>}><Posts /></Suspense>} />
      //   </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;

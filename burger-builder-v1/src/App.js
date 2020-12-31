import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Aux';
import { Component } from 'react';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
class App extends Component {
  // state = {
  //   show: true,
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       show: false
  //     })
  //   }, 5000);
  // }
  render() {
    return (
      <Aux>
        <Layout>
          {/* {this.state.show ? <BurgerBuilder /> : null} */}
          <Switch>
            <Route path="/checkout" component={Checkout}></Route>
            <Route path="/orders" component={Orders}></Route>
            <Route path="/" component={BurgerBuilder}></Route>
          </Switch>
        </Layout>
      </Aux>
    );
  }
}

export default App;

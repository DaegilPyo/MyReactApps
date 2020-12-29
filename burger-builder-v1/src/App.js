import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Aux';
import { Component } from 'react';

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
          <BurgerBuilder />
        </Layout>
      </Aux>
    );
  }
}

export default App;

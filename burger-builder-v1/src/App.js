import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Aux from './hoc/Aux';

function App() {
  return (
    <Aux>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </Aux>
  );
}

export default App;

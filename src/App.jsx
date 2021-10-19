import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as Routes from './constants/routes';
import Loader from 'react-loader-spinner';
import './App.css'

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/index"));
const CentroBh = lazy(() => import("./pages/Analogica/index"));
const Pojects = lazy(() => import("./pages/Projects/index"));
const Designer = lazy(() => import("./pages/Designer/index"));
const Contact = lazy(() => import("./pages/Contact/index"));


const NotFound = lazy(() => import("./pages/NotFound/NotFound"));


function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={
          <Loader
            type="Oval"
            color="#00BFFF"
            height={80}
            width={80}
            style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
        }>
          <Switch>
            <Route path={Routes.HOME} component={Home} exact />
            <Route path={Routes.SOBRE} component={About} exact />
            <Route path={Routes.CENTROBH} component={CentroBh} exact />
            <Route path={Routes.PROJETOS} component={Pojects} exact />
            <Route path={Routes.DESIGNER} component={Designer} exact />
            <Route path={Routes.CONTATO} component={Contact} exact />

            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
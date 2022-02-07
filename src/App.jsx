import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as Routes from './constants/routes';
import Loader from 'react-loader-spinner';
import './App.css'

const Home = lazy(() => import("./pages/Home/Home"));

const Analogica = lazy(() => import("./pages/Analogica/index"));
const BeloHorizontePage = lazy(() => import("./pages/Analogica/BeloHorizonte/BeloHorizontePage"));
const ManifestoPage = lazy(() => import("./pages/Analogica/Manifesto/ManifestoPage"));
const NovaPasta = lazy(() => import("./pages/Analogica/NovaPasta/NovaPasta"));



const SESSAO = lazy(() => import("./pages/Session/index"));
const B1B2 = lazy(() => import("./pages/Session/b1b2/index"));
const BRONCA = lazy(() => import("./pages/Session/bronca/index"));
const EDITORA = lazy(() => import("./pages/Session/editora/index"));
const IZA = lazy(() => import("./pages/Session/iza/index"));
const SOL = lazy(() => import("./pages/Session/sol/index"));
const WAKANDA = lazy(() => import("./pages/Session/wakanda/index"));
const AyoluwasJoias = lazy(() => import("./pages/Session/ayoluwaJoias/index"));
const JuninhoDoQuebra = lazy(() => import("./pages/Session/juninhoDoQuebra/index"));
const LucasRasta = lazy(() => import("./pages/Session/lucasRasta/index"));
const TamaraFrankilin = lazy(() => import("./pages/Session/tamaraFrankilin/index"));


const Designer = lazy(() => import("./pages/Designer/index"));
const Videos = lazy(() => import("./pages/Videos/index"));
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
            <Route path={Routes.ANALOGICA} component={Analogica} exact />
            <Route path={Routes.BELOHORIZONTE} component={BeloHorizontePage} exact />
            <Route path={Routes.MANIFESTO} component={ManifestoPage} exact />
            <Route path={Routes.NOVAPASTA} component={NovaPasta} exact />

            NOVAPASTA

            <Route path={Routes.SESSAO} component={SESSAO} exact />
            <Route path={Routes.B1B2} component={B1B2} exact />
            <Route path={Routes.BRONCA} component={BRONCA} exact />
            <Route path={Routes.EDITORA} component={EDITORA} exact />
            <Route path={Routes.IZA} component={IZA} exact />
            <Route path={Routes.SOL} component={SOL} exact />
            <Route path={Routes.WAKANDA} component={WAKANDA} exact />
            <Route path={Routes.AyoluwasJoias} component={AyoluwasJoias} exact />
            <Route path={Routes.JUNINHODOQUEBRA} component={JuninhoDoQuebra} exact />
            <Route path={Routes.LUCASRASTA} component={LucasRasta} exact />
            <Route path={Routes.TAMARAFRANKILIN} component={TamaraFrankilin} exact />

            <Route path={Routes.DESIGNER} component={Designer} exact />
            <Route path={Routes.CONTATO} component={Contact} exact />
            <Route path={Routes.VIDEOS} component={Videos} exact />

            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
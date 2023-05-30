import './App.css';
import { Routes, Route } from "react-router-dom"
import { Netflix } from './components/Netflix';
import { Bar } from './components/Bar';
import { NotFound } from './components/NotFound';
import { RepoComms } from './components/RepoComms';
import { Home } from './components/Home';
import { Repo } from './components/Repo';

function App() {
  return (
    <div className="App">
      <Bar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/netflix' element={<Netflix />} />

        <Route path='/netflix'>
          <Route path=':commitsId' element={<RepoComms />} />
        </Route>

        <Route path=':repoName' element={<Repo />} />


        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTasks } from './store/taskContext';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Header from './components/Header';

function App() {
  const { darkMode } = useTasks() ?? { darkMode: false };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Router>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/queryClient';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
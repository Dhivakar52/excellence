import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import NominationPage from './pages/NominationPage';
import AddNomination from './components/NominationContent/AddNomination';
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login/LoginPage';

const NotificationsPage = () => <div className="text-2xl font-bold">Notifications</div>;
const SelfNominationsPage = () => <div className="text-2xl font-bold">Self Nominations</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes under Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/self-nominations" element={<SelfNominationsPage />} />
          <Route path="/my-nominations">
            <Route index element={<NominationPage />} />
            <Route path="add-nomination" element={<AddNomination />} />
          </Route>
          <Route path="/nominations" element={<NominationPage />} />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import{ Register,Landing,Error } from './pages';
import{
  SharedLayout,
  AllJob,
  AddJob,
  Profile,
  Stats
} from './pages/dashborad'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import AllData from './components/AllData/AllData';
import Question from './components/Qusetion/Question';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
     <Header></Header>
     <AllData></AllData>
     <Question></Question>
     <ToastContainer></ToastContainer>
    </div>
  )
}

export default App

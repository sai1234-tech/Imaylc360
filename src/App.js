import { useRef } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar/Navbar';

function App() {


  const roleRefs = {
    role1: useRef(null),
    role2: useRef(null),
    role3: useRef(null),
    role4: useRef(null),
    role5: useRef(null),
    role6: useRef(null),
};


  const scrollToRole = (role) => {
    const targetRef = roleRefs[role];
    if (targetRef.current) {
      const offset = targetRef.current.offsetTop -11 * window.innerWidth / 100; // Subtracting 10vw
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };
  
  

  return (
    <div className="App">
      <Navbar scrollToRole={scrollToRole}/>
      <Home rolerefer={roleRefs}/>
    </div>
  );
}

export default App;



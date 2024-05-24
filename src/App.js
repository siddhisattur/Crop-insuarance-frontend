import React, {useContext, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import LoginModel from './components/Models/LoginModel';
import RegisterModel from './components/RegisterModel';
import Farmer from './components/Users/Farmer';
import Policy from './components/Users/Policy';
import Customer from './components/Users/Customer';
import { Register } from './components/Register';


const App = () => {

  

  return (
      <Router>
        <Routes>
          {/* Main Component */}
          <Route path="/" element={<Main  />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<LoginModel/>}/>
          <Route path="/farmer" element={<Farmer/>}/>
          <Route path="/policycompany" element={<Policy/>}/>
          <Route path="/customer" element={<Customer/>}/>

        </Routes >
      </Router >
  );
};

export default App;

// import Page1 from './components/demo/Page1';
// import Page2 from './components/demo/Page2';
// import Page3 from './components/demo/Page3';
// import MyForm from './components/demo/MyForm';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/page1" Component={Page1}>
//         </Route>
//         <Route path="/page2" Component={Page2}>
//         </Route>
//         <Route path="/page3" Component={Page3}>
//         </Route>
//         <Route path="/" Component={MyForm}>
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;

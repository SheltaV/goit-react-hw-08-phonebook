import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from "react";
// import { ContactForm } from './Form/Form';
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from './Filter/Filter';

const Home = lazy(() => import('../Pages/Home/Home'));
const Register = lazy(() => import('../Pages/Register/Register'));
const Login = lazy(() => import('../Pages/Login/Login'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>  
      </Routes>
    </div>
    // <div>
    // <h1>Phonebook</h1>
    // <ContactForm />
      
    // <h2>Contacts</h2>
    // <Filter />
    //   <ContactList />
    // </div>
  )
};

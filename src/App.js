import './App.css';
import Layouts from './layouts/Layouts';
import signInAction from "./redux/actions/signInAction"
import signInReducer from './redux/reducer/signInReducer';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

function App() {
  let  {logged}  = useSelector(store => store.signInReducer)
  let dispatch = useDispatch()


  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))
    console.log(token?.token.user)
    if(token){
      dispatch(signInAction.reIngresar(token.token.user))
    }
  }, [])
  console.log(logged)
  return (
    <div>
      <Layouts logged={logged}>
      </Layouts>
    </div>
  );
}

export default App;

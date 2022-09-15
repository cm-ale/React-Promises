import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from'./Containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
return(
  <>
   <NavBar/>
   <ItemListContainer greeting="Hola Mundo Bienvenidos a Codercio"/>
  </>
);
}

export default App;

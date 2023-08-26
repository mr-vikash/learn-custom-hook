
import './App.css';
import Header from './components/Header'

import useFetch from './components/useFetch';
function App() {
  
  const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
  return (
    <div className="App">
      <Header/>
      {
        data.map((element,index)=>{
          return(
            <div key={index}>
              <h1 >{element.firstName}</h1>
            </div>
            
          )
        })
      }
    </div>
  );
}

export default App;

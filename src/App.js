import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from './data.js'

function App() {
  console.log(data)
  return (

   <>
   <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    
      {
        data.map((e)=>(
         
            
            <tr>
       <th scope="row"></th>
      <td>{e.name}</td>
      <td>{e.email}</td>
      <td>{e.status}</td>
     </tr>
          
        ))
      }
      
   
  </tbody>
</table>
   
    
   </>
  );
}

export default App;

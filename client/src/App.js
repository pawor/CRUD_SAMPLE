import Axios from 'axios'
import { useState } from 'react'

function App() {
  const [itemCD, setItemCD] = useState('');
  const [itemNM, setItemNM] = useState('');
  const [model, setModel] = useState('');
  const [user, setUser] = useState('');
  const [time, setTime] = useState([]);

  const getItems = () => {
    Axios.get('http://localhost:3001/api').then((response) => {
      setItemsList(response.data);
    });
  }
  return (
    <div className="App container">
      <h1>LENS INVENTORY SYSTEM</h1>
      <div className='information'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='ITEM_CD' className='form-label'>
              ITEM NUMBER
            </label>
          </div>
        </form>
        <button className='btn btn-primary' onClick={getItems}>ITEMS LIST</button>
        {itemsList.map((val,key) => {
          return (
            <div className='item card'>
              <div className='card-body text-left'>
                <p className='card-text'>ITEM NUMBER: {val.ITEM_CD}</p>
                <p className='card-text'>ITEM NAME: {val.ITEM_NM}</p>
                <p className='card-text'>MODEL: {val.Model}</p>
                <p className='card-text'>USER NAME: {val.Users_update}</p>
                <p className='card-text'>TIME: {val.Update_date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;

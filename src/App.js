import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const url = 'https://port-0-servertest-619z9h2lllkaic66.sel3.cloudtype.app/api/test'

const onSubmitHandler = (event) => {
  console.log('this is test')
  axios.get('/api/test').then(response => {
    console.log(response.data.text)
  })
}
const onSubmitHandler2 = (event) => {
  console.log('this is test')
  axios.get(url).then(response => {
    console.log(response.data.text)
  })
}

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <button type="" onClick={onSubmitHandler}>click</button>
      <button type="" onClick={onSubmitHandler2}>click2</button>
    </div>
  );
}

export default App;

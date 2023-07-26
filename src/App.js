import Move from './Move';
// import logo from './logo.svg';
import './App.css';


function App() {
  let fly = "Click to fly";
  let width = window.innerWidth - 200;
  let height = window.innerHeight -100;
  let buttons = [
    {
        innerText: 'up',
        id: '1',
        value: "up",
    },
    {
        innerText: 'down',
        id: '2',
        value: "down"
    },
    {
        innerText: 'left',
        id: '3',
        value: "left",
    },
    {
        innerText: 'right',
        id: '4',
        value: "right"
    }
];
  return (
    <div className='App'>
      <Move fly = {fly} buttons = {buttons} width = {width} height = {height}/>
    </div>
  );
}

export default App;

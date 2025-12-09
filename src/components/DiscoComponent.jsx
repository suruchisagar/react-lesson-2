import { useState } from 'react'
function DiscoComponent() {

  const [color, setColor] = useState("black");
  const [size, setSize] = useState(100);
  function colorChange(){
    const randomColor = Math.floor(Math.random() * 10);
    switch (randomColor) {
      case 1: setColor('red')
      break;
      case 2: setColor('black')
      break;
      case 3: setColor('purple')
      break;
      case 4: setColor('orange')
      break;
      case 5: setColor('pink')
      break;
      case 6: setColor('green')
      break;
      case 7: setColor('yellow')
      break;
      case 8: setColor('white')
      break;
      case 9: setColor('brown')
      break;
      case 10: setColor('blue')
      break;
      default: setColor('olive')
    }
  }

  function changeSize(){
    const randomSize = Math.floor(100 + Math.random() * 1000);
    setSize(randomSize);
  }
  return (
    <div>
      <h1>Color Display</h1>
      <div style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `${color}`
      }}></div>
      <br/>
      <button onClick={() => colorChange()}>change color</button>
      <button onClick={() => changeSize()}>change size</button>
    </div>
  )
}

export default DiscoComponent

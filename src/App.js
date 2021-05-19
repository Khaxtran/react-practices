import React, {useState} from 'react';

let colors = ['gold', 'grey', 'brown'];

export const App = (props) => {
  const [color, setColor] = useState('Tomato');
  
  const divStyle = {backgroundColor: color,
                    width: '100%',
                    height: '500px',
                    textAlign: 'center',
                    padding: '150px 0px',
                    fontSize: '20px'}

  return(
    <div style={divStyle}>
      <h1>Click button to change color</h1>
      {colors.map(color => (
        <button onClick={() => setColor(color)}>{color}</button>
      ))}
    </div>

  )
}

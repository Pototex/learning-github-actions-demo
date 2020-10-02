import React, { useCallback } from 'react';
import './App.css';

const TitleComponent = React.memo(({index, children, sum, hello}) => {
  const [color, setColor] = React.useState('#ffffff')

  const handleColorChange = () => {
    setColor(color === '#ffffff' ? '#f5b5d3' : '#ffffff')
  }

  return (
    <div 
      className="Title-box"
      type="button"
      style={{ backgroundColor: color}}
      onClick={() => handleColorChange()}
    >
      <span>{hello} {sum(index)}</span>
    </div>
  )
})

export default function App() {
  const [titles, setTitles] = React.useState([])
  const [order, setOrder] = React.useState(false)
  
  React.useEffect(
    () => {
      let array = new Array(45)
      for(let index = 0; index <= 45; index++) {
        array[index] = index
      }
      setTitles(array)
    },
    []
  )

  const reverse = () => {
    const sorted = titles.sort((a, b) => order ? a - b : b - a)
    setTitles(sorted)
    setOrder(!order)
  } 

  const sum = (index) => {
    return index + 1
  }

  const memoSum = useCallback(sum, [])

  return (
    <div className="App">
      {
        titles.map((value) => (
          <TitleComponent
            key={`title-${value}`} 
            index={value}
            sum={memoSum}
            hello={`Dummy`}>
          </TitleComponent>
        ))
      }
      <div>
        <button onClick={() => reverse()}>Change order</button>
      </div>
    </div>
  );
}
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');
  const [cost, setCost] = useState('');

  function onSubmit() {
    const cost = parseInt(document.querySelector('input[name="cost"]').value);


    const item = {
      title: value,
      cost,
    };

    setItems([...items, item]);
    setValue('');
    setCost('');
  }

  return (
    <div className="container">
      <div className="budget">
        <h1>예산 계산기</h1>
        <div className="item">
          <div>지출</div>
          <input
            type="text"
            name="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ flex: "2", padding: "5px" }}
            placeholder="예) 렌트비"
          />
        </div>
        <div className="item">
          <div>항목 비용</div>
          <input
            type="number"
            name="cost"
            style={{ flex: "3", padding: "5px" }}
            placeholder="0"
          />
        </div>
        <input
          type="submit"
          value="제출"
          className="btn"
          onClick={onSubmit}
        />
      </div>
      <div className="list">
        {items.map((item) => (
          <List key={item.title} title={item.title} cost={item.cost} />
        ))}
      </div>
    </div>
  );
}

function List({ title, cost }) {
  return (
    <div className='list-container'>
      <div className=''>
        <div className="list">
          <div className="title">{title}</div>
          <div className="cost">{cost === undefined ? '0' : cost}원</div>
          
        </div>
      </div>
    </div>
  );
}

export default App;

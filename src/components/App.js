import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const handleName1Change = (event) => {
    setName1(event.target.value);
  };

  const handleName2Change = (event) => {
    setName2(event.target.value);
  };

  const handleCalculateRelationship = () => {
    if (name1 === '' || name2 === '') {
      setResult('Please Enter valid input');
    } else {
      const str1 = name1.toLowerCase();
      const str2 = name2.toLowerCase();
      let count = 0;
      for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i])) {
          str2.replace(str1[i], '');
        } else {
          count++;
        }
      }
      count += str2.length;
      setResult(['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'][count % 6]);
    }
  };

  const handleClear = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div id="main">
      <input
        type="text"
        placeholder="Enter first name"
        data-testid="input1"
        value={name1}
        onChange={handleName1Change}
      />
      <br />
      <input
        type="text"
        placeholder="Enter second name"
        data-testid="input2"
        value={name2}
        onChange={handleName2Change}
      />
      <br />
      <button data-testid="calculate_relationship" onClick={handleCalculateRelationship}>
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;





// import React, {Component, useState} from "react";
// import '../styles/App.css';

// class App extends Component {
//     render() {

//         return(
//             <div id="main">
//                {/* Do not remove the main div */}
//             </div>
//         )
//     }
// }


// export default App;

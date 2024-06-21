// 7
// function App() {
// 	return <div class="aaa">
// 		text
// 	</div>;
//  return <div class="bbb">
// 		text
// 	</div>;
// }

// 8
// function App() {
// 	return	<ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//         <li>4</li>
//         <li>5</li>
//         <li>6</li>
//         <li>7</li>
//         <li>8</li>
//         <li>9</li>
//         <li>10</li>
// 		</ul>;
// }

// 9
// function App() {
// 	return (
// 		<ul>
// 			<li>text1</li>
// 			<li>text2</li>
// 			<li>text3</li>
// 		</ul>
//     );
// }

// 10
// function App() {
// 	return <ul>
// 		<li>text1</li>
// 		<li>text2</li>
// 		<li>text3</li>
// 	</ul>
// 	<ul>
// 		<li>text1</li>
// 		<li>text2</li>
// 		<li>text3</li>
// 	</ul>;
// }

// 11
// function App() {
// 	return <input>;
//     </input>
// }

// 12
// import React from 'react';


// import React, {useState} from 'react';
// function App() {
//   return (
//     <ul>
//       <li>гремит гроза</li>
//       <li>и днем роса</li>
//       <li>и по щеке слеза</li>
//       <li>ну кто сказал</li>
//       <li>кто показал</li>
//       <li>мне</li>
//       <li>карие</li>
//       <li>глаза</li>
//       <li>душа моя поет</li>
//       <li>а небо плачет</li>
//     </ul>
//   );
// }

// function App() {
// //   return <input />;
// }

// export default App;
// function App() { 
// (
//    <div>
//    <input />
//    <input />
//    <input />
// </div>
// );

// // 13
// const str1 = 'text1';
// const str2 = 'text1';

// return <div>
// <p>{str1}</p>
// <p>{str2}</p>
// </div>;

// // 14
// const name = 'user';
// const agee  = '30';

// return <div>
// name: {name}
// age:  {agee}
// </div>;


// 15
// const arr = [1, 2, 3, 4, 5];
// return <div>
// <ul>
//   <li>{arr[0]}</li>
//   <li>{arr[1]}</li>
//   <li>{arr[2]}</li>
//   <li>{arr[3]}</li>
//   <li>{arr[4]}</li>
// </ul>
// </div>

// 16
// const obj = {name: 'john', surname: 'smit'};
// <p>	name:    <span>obj.name</span>, <br/>
// surname: <span>obj.surname</span>, </p>

// 17
// const attr = 'block';
// return <div id={attr}>
// text
// </div>;

// 19
// const li = <ul><li>text1</li><li>text2</li><li>text3</li></ul>;
// return <main>
// {li}
// </main>

// 20
// const items = <><li>text1</li><li>text2</li><li>text3</li></>;
// return <ul>
// {items}
// </ul>

// 21
// return <div> 
// <input/> <br /> <input/> <br /> <input/> 
// </div>

// 22
// return <div>
// <ul>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
// </ul>
// </div>

// return <table>
// <tbody>
//   <tr>
//     <td>1</td>
//     <td>2</td>
//     <td>2</td>
//   </tr>
//   <tr>
//     <td>3</td>
//     <td>4</td>
//     <td>2</td>
//   </tr>
//   <tr>
//     <td>3</td>
//     <td>4</td>
//     <td>2</td>
//   </tr>
// </tbody>
// </table>;

// // 26
// let ageee;
// const isAdult = true;
// if (isAdult) {
// ageee = <p> Есть 18 </p>
// }
// else {
// text = <p>Нет 18</p>
// }
// return <div>
// {text}
// </div>;

// // 27
// let text;
// const isAdmin = true;

// if (isAdmin) {
// text = <div><p>text1</p><p>text2</p></div>;
// }
// return text;

// // 28
// const age2 = 19;
// return <div>
// {age2 > 18 ? '>18' : '<18'}
// </div>;

// // 29
// const ss = true;
// return <div>
// {ss && <p>вы авторизованы</p>}
// </div>;

// // 30
// const dd = false;
// return <div>
// {!dd && <p>пожалуйста, авторизуйтесь</p>}
// </div>;

// // 31
// function getDigitsSum(num) {
// let sum = 0;
// while (num) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// return sum;
// }
// const digitsSum = getDigitsSum(123);
// return <div>
//   <div>Digits Sum of 123: {digitsSum}</div>
// </div>

// // 32
// function getDigitsSum(num) {
// let sum = 0;
// while (num) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// return sum;
// }
// return <div>
// <div>Digits Sum: {getDigitsSum(12345)}</div>
// </div>

// 33
// function show1() {
// alert(1);
// }
// function show2() {
// alert(2);
// }
// return <div>
// <button onClick={show1}>lexa</button>
// <button onClick={show2}>lexa</button>
// </div>;

//34
// function showMess(text) {
//   alert(text);
// }
// 	return <div>
//  <button onClick={() => showMess('1')}> 1</button>
//  <button onClick={() => showMess('2')}> 2</button>
//  <button onClick={() => showMess('3')}> 3</button>
// </div>
//  }
//  export default App;

// 35.1
//  function handleClick(event) {
//     console.log(event)
//   }
//     return (
//       <button  onClick={() => handleClick()}>Нажмите на меня</button>
//     );
// 35.2
// function handleClick(event) {
//   console.log(event.target);
// }
// render() 
//   return (
//     <button onClick={handleClick}>Нажмите на меня</button>
//   );

// 36
//         function func(arg, arg2, event) {
//   console.log(arg, arg2, event);
// }
// return (
//   <div>
//     <button onClick={event => func('eee', 'aaa', event)}>act</button>
//   </div>
// );

// 36.3
// function func(event, arg) {
// 	console.log(arg, event);
// }	
// return <div>
// 	<button onClick={event => func('eee', event)}>act</button>
// </div>;

// 36.4
// function func(arg, event, arg2) {
// 	console.log(arg, arg2, event);
// }
// return <div>
// 	<button onClick={event => func('eee', 'aaa', event)}>Нажмите на меня</button>
// </div>;
// }
// export default App;

// 37
// import React from 'react';
// function App() {
// 	const arr = [
// 		<li>1</li>,
// 		<li>2</li>,
// 		<li>3</li>,
// 		<li>4</li>,
// 		<li>5</li>,
// 	];
// return <ul>
// {arr}
// </ul>
// }
// export default App;

// 38
// import React from 'react';
// function App() {
// 	const arr = [];
// 	for (let i = 1; i <= 5; i++) {
// 		arr.push(<li>{i}</li>);
// 	}
// 	return <ul>
// 		{arr}
// 	</ul>;
// }
//   export default App;

// 39
// import React from 'react';
// function App() {
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.map(function(item) {
// 	return <li>{item}</li>;
// });
// return <ul>
// 	{res}
// </ul>;
// }
//   export default App;

// 40
// import React from 'react';
// function App() {
// const arr = ['a', 'b', 'c', 'd', 'e'];
	
// const res = arr.map(function(item, index) {
// 	return <li key={index}>{item}</li>;
// });
	
// return <ul>
// 	{res}
// </ul>;
// }
// export default App;


// 41
// import React from 'react';
// function App() {
// const users = [
//     {name: 'user1', surn: 'surn1', age: 30},
//     {name: 'user2', surn: 'surn2', age: 31},
//     {name: 'user3', surn: 'surn3', age: 32},
// ];
// const res = users.map(function(item, index) {
// 	return <li key={index}>
// 	<span>{item.name}</span>:
// 	<span>{item.surn}</span>:
//      <span>{item.age}</span>
// 	</li>;
// });
// return <ul>
// 	{res}
// </ul>;
// }
// export default App;

// 42
// const users = [
//   {id:1, name: 'user1', surn: 'surn1', age: 30 },
//   {id:2, name: 'user2', surn: 'surn2', age: 31 },
//   {id:3, name: 'user3', surn: 'surn3', age: 32 },
// ];

// const res = users.map(function (item) {
//   return <li key={item.id}>
//     <span>{item.name}</span>:
//     <span>{item.surn}</span>:
//     <span>{item.age}</span>
//   </li>;
// });

// return <ul>
//   {res}
// </ul>;


  // 43
  // const users = [
  //   { id: 1, name: 'user1', surn: 'surn1', age: 30 },
  //   { id: 2, name: 'user2', surn: 'surn2', age: 31 },
  //   { id: 3, name: 'user3', surn: 'surn3', age: 32 },
  // ];
  // const rows = users.map(function (item) {
  //   return <tr key={item.id}>
  //     <td>{item.name}</td>
  //     <td>{item.surn}</td>
  //     <td>{item.age}</td>
  //   </tr>;
  // });

  // return <table>
  //   <thead>
  //     <tr>
  //       <td>Имя</td>
  //       <td>Фамилия</td>
  //       <td>Возраст</td>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {rows}
  //   </tbody>
  // </table>;

  // 44-47
  // const array = ['one', 'two', 'three'];
  // const res = array.map(function (item) {
  //   return <p id={uuid()}>{item}</p>
  // });

  // return <div>
  //   {res}
  // </div>

  // 48
  // function id() {
  //   return uuid()
  // }
  // const array = ['one', 'two', 'three'];
  // const res = array.map(function (item) {
  //   return <p id={id()}>{item}</p>
  // });

  // return <div>
  //   {res}
  // </div>


// 49
// function id() {
//     return uuid()
//   }
//   const prods = [
//     { id: id(), name: 'product1', cost: 100 },
//     { id: id(), name: 'product2', cost: 200 },
//     { id: id(), name: 'product3', cost: 300 },
//   ];
//   const res = prods.map(function(item) {
// 		return <p id={item.id}>
// 			<span>{item.name}</span>:
// 			<span>{item.cost}</span>
// 		</p>;
// 	});

//   return <div>
//     {res}
//   </div>

// 50 - 52
//  const [name, setName] = useState('fullName');
  // const [age, setAge] = useState('Age');

  // return <div>
  //   <p>{name}</p>
  //   <p>{age}</p>
  // </div>


// 53
// const [name, setName] = useState('fullName');

//   return <div>
//     <span>{name}</span><br />
//     <button onClick={() => setName('Pav A')}>Click me</button>
//     <button onClick={() => setName('fullname')}>reset</button>
//   </div>

// 54
// const [isBanned, setBan] = useState('False');
//   return <div>
//       <span>{isBanned ? "Banned" : "Not banned"}</span><br />
//       {isBanned ? (
//         <button onClick={() => setBan(false)}>Unban</button>
//       ) : (
//         <button onClick={() => setBan(true)}>Ban</button>
//       )}
//   </div>

// 55
// const [count, setCount] = useState(0);
//   return <div>
//     <span>{count}</span>
//     <button onClick={() => setCount(count + 1)}>+</button>
//     <button onClick={() => setCount(count - 1)}>-</button>
//     </div>;
// }
// export default App;

// // 56
  // const [text1, setText1] = useState('');
  //   const [text2, setText2] = useState('');

  //   function handleChangeInput1(event) {
  //     setText1(event.target.value);
  //   }

  //   function handleChangeInput2(event) {
  //     setText2(event.target.value);
  //   }

  //   return (
  //     <div>
  //       <label>Input 1: </label>
  //       <input value={text1} onChange={handleChangeInput1} />
  //       <p>Text from Input 1: {text1}</p>

  //       <label>Input 2: </label>
  //       <input value={text2} onChange={handleChangeInput2} />
  //       <p>Text from Input 2: {text2}</p>
  //     </div>
  //   );
  // }
  // export default App;

    // 57
//   const [inputText, setInputText] = useState('');

//   function handleChange(event) {
//     const inputValue = event.target.value;
//     setInputText(inputValue);
//   }

//   return (
//     <div>
//       <label>Input: </label>
//       <input value={inputText} onChange={handleChange} />
//       <p>Number of characters: {inputText.length}</p>
//     </div>
//   );
// }
// export default App;
//   // 58
//   const [fahrenheit, setFahrenheit] = useState('');

//   function handleChange(event) {
//     setFahrenheit(event.target.value);
//   }

//   function convertToCelsius() {
//     const fahrenheitValue = parseFloat(fahrenheit);
//     const celsiusValue = (fahrenheitValue - 32) * (5 / 9);
//     return isNaN(celsiusValue) ? 'Invalid input' : celsiusValue.toFixed(2);
//   }

//   return (
//     <div>
//       <label>Enter Fahrenheit: </label>
//       <input value={fahrenheit} onChange={handleChange} />
//       <p>Celsius: {convertToCelsius()}</p>
//     </div>
//   );

//59
// const [value1, setValue1] = useState(0);
// const [value2, setValue2] = useState(0);
// const [value3, setValue3] = useState(0);
// const [value4, setValue4] = useState(0);
// const [value5, setValue5] = useState(0);

// function handleChange1(event) {
//   setValue1(+event.target.value);
// }

// function handleChange2(event) {
//   setValue2(+event.target.value);
// }

// function handleChange3(event) {
//   setValue3(+event.target.value);
// }

// function handleChange4(event) {
//   setValue4(+event.target.value);
// }

// function handleChange5(event) {
//   setValue5(+event.target.value);
// }

// const average = (value1 + value2 + value3 + value4 + value5) / 5;

// return (
//   <div>
//     <input value={value1} onChange={handleChange1} />
//     <input value={value2} onChange={handleChange2} />
//     <input value={value3} onChange={handleChange3} />
//     <input value={value4} onChange={handleChange4} />
//     <input value={value5} onChange={handleChange5} />
//     <p>Average: {average}</p>
//   </div>
// );

// 60
// import React, { useEffect, useState } from 'react';
//function App() { 
//const [number, setNumber] = useState('');
//const [productOfDivisors, setProductOfDivisors] = useState(1);

//function handleBlur() {
  //const parsedNumber = parseInt(number, 10);
  //if (!isNaN(parsedNumber) && parsedNumber !== 0) {
    //const divisors = getDivisors(parsedNumber);
    //const product = divisors.reduce((acc, divisor) => acc * divisor, 1);
    //setProductOfDivisors(product);
 // } else {
   // setProductOfDivisors(0);
//  }
//}

//function getDivisors(n) {
  //const divisors = [];
 // for (let i = 1; i <= n; i++) {
   // if (n % i === 0) {
    //  divisors.push(i);
   // }
 // }
 // return divisors;
//}

//return (
 // <div>
   // <input value={number} onChange={event => setNumber(event.target.value)} onBlur={handleBlur} />
   // <p>Product of Divisors: {productOfDivisors}</p>
 // </div>
// );
//  }
//export default App;

// 61
// const [text, setText] = useState('');
// function handleChange(event) {
//   setText(event.target.value);

// 62
// const [htmlChecked, setHtmlChecked] = useState(false);
// const [cssChecked, setCssChecked] = useState(false);
// const [jsChecked, setJsChecked] = useState(false);
// return (
//   <div>
//     <label>
//       <input type="checkbox" checked={htmlChecked} onChange={() => setHtmlChecked(!htmlChecked)} />
//       HTML
//     </label>
//     <p>HTML: {htmlChecked ? 'знает' : 'не знает'}</p>

//     <label>
//       <input type="checkbox" checked={cssChecked} onChange={() => setCssChecked(!cssChecked)} />
//       CSS
//     </label>
//     <p>CSS: {cssChecked ? 'знает' : 'не знает'}</p>

//     <label>
//       <input type="checkbox" checked={jsChecked} onChange={() => setJsChecked(!jsChecked)} />
//       JavaScript
//     </label>
//     <p>JavaScript: {jsChecked ? 'знает' : 'не знает'}</p>
//   </div>
// );

// 63
//   const [isOver18, setIsOver18] = useState(false);
//   let content;
//   if (isOver18) {
//     content = (
//       <div>
//         <h2>вам уже есть 18</h2>
//         <p>здесь расположен контент только для взрослых</p>
//       </div>
//     );
//   } else {
//     content = (
//       <div>
//         <p>Увы, вам еще нет 18 лет</p>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <input type="checkbox" checked={isOver18} onChange={() => setIsOver18(!isOver18)} />
//       {content}
//     </div>
//   );
// }

// 64
//   const [value, setValue] = useState('');
//   function handleChange(event) {
//     setValue(event.target.value);
//   }

// 65
//   const citys = ['Москва', 'Владивосток', 'Санкт-Петербург', 'Париж'];
//   const [value, setValue] = useState('');

//   const options = citys.map((text, index) => {
//     return <option key={index}>{text}</option>;
//   });

//   return <div>
//     <select value={value} onChange={(event) => setValue(event.target.value)}>
//       {options}
//     </select>
//     <p>
//       ваш выбор: {value}
//     </p>
//   </div>;

// 66
  // const [value, setValue] = useState('');
  // return <div>
  //   <select value={value} onChange={event => setValue(event.target.value)}>
  //     <option value="1">от 0 до 12 лет</option>
  //     <option value="2">от 13 до 17 лет</option>
  //     <option value="3">от 18 до 25 лет</option>
  //     <option value="4">старше 25 лет</option>
  //   </select>
  //   <p>
  //     {value === '1' && 'от 0 до 12 лет'}
  //     {value === '2' && 'от 13 до 17 лет'}
  //     {value === '3' && 'от 18 до 25 лет'}
  //     {value === '4' && 'старше 25 лет'}
  //   </p>
  // </div>;

// 67-68
// const [value, setValue] = useState('');

//   function changeHandler(event) {
//     setValue(event.target.value);
//   }
//   let message;
//   if (value === "JavaScript") {
//     message = <p>Молодец</p>
//   }
//   else {
//     message = <p></p>
//   }

// 69
// const [checked, setChecked] = useState(true);
// const [value, setValue] = useState('text');
//   function handleChange(event) {
//     const inputValue = event.target.value;
//     setInputText(inputValue);
//   }
// return <div>
//   <input defaultValue={value} />
//   <input type="checkbox" defaultChecked={checked} />
// </div>;
//   return (
//     <div>
//       <label>Input: </label>
//       <input value={inputText} onChange={handleChange} />
//       <p>Number of characters: {inputText.length}</p>
//     </div>
//   );

// 70
  // const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // function changeHandler(index, event) {
  //   setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
  // }

// 71
// const initDate = {
//   year: 2025,
//   month: 12,
//   day: 31,
// }
// const [obj, setObj] = useState(initDate);
// function handleChange(prop, event) {
//   setObj({ ...obj, ...{ [prop]: event.target.value } });
// }
// return <div>
//   <input value={obj.year} onChange={event => handleChange('year', event)} />
//   <input value={obj.month} onChange={event => handleChange('month', event)} />
//   <input value={obj.day} onChange={event => handleChange('day', event)} />
//   <br />
//   {obj.year}-{obj.month}-{obj.day}
// </div>;

// // 72-73
// const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//   const [newNote, setNewNote] = useState('');

//   const handleInputChange = (event) => {
//     setNewNote(event.target.value);
//   };

//   const average = (value1 + value2 + value3 + value4 + value5) / 5;
//   const addNote = () => {
//     if (newNote.trim() !== '') {
//       setNotes([...notes, newNote]);
//     }
//   };

//   const noteItems = notes.map((note, index) => (
//     <li key={index}>{note}</li>
//   ));

//   return (
//     <div>
//       <input value={value1} onChange={handleChange1} />
//       <input value={value2} onChange={handleChange2} />
//       <input value={value3} onChange={handleChange3} />
//       <input value={value4} onChange={handleChange4} />
//       <input value={value5} onChange={handleChange5} />
//       <p>Average: {average}</p>
//       <input
//         value={newNote}
//         onChange={handleInputChange}
//         placeholder="Enter new note"
//       />
//       <button onClick={addNote}>Add Note</button>
//       <ul>{noteItems}</ul>
//     </div>
//   );

// 74
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//   const [newNote, setNewNote] = useState('');
//   const [index, setIndex] = useState(-1);
// const handleOnBlur = (event) => {
//     if (index === -1) {
//       console.log("Не правильная передача")
//     }
//     const updatedNotes = [...notes];
//     updatedNotes[index] = newNote;
//     setNotes(updatedNotes);
//   };
//   const handleInputChange = (event) => {
//     setNewNote(event.target.value);
//   };
//   const deleteNote = (index) => {
//     const updatedNotes = [...notes];
//     updatedNotes.splice(index, 1);
//     setNotes(updatedNotes);
//   };
//   const reverseOrder = () => {
//     setNotes([...notes.reverse()]);
//   };
//   const handleLiClick = (note, index) => {
//     setNewNote(note);
//     setIndex(index)
//   };
//   const noteItems = notes.map((note, index) => (
//     <li key={index} onClick={() => handleLiClick(note, index)}>
//       {note}
//       <button onClick={() => deleteNote(index)}>Delete</button>
//     </li>
//   ));
// return (
//     <div>
//       <input
//         type="text"
//         value={newNote}
//         onBlur={handleOnBlur}
//         onChange={handleInputChange}
//         placeholder="Enter new note"
//       />
//       <ul>
//         {noteItems}
//       </ul>
//       <button onClick={reverseOrder}>Reverse Order</button>
//     </div>);

// // 75
// const [notes, setNotes] = useState(initNotes);
//   const [prop1, setProp1] = useState('');
//   const [prop2, setProp2] = useState('');
//   const [prop3, setProp3] = useState('');

//   const addNoteFromInputs = () => {
//     const newNote = {
//       id: Math.random().toString(36).substr(2, 9),
//       prop1: prop1,
//       prop2: prop2,
//       prop3: prop3,
//     };
//     setNotes([...notes, newNote]);
//     setProp1('');
//     setProp2('');
//     setProp3('');
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={prop1}
//         onChange={e => setProp1(e.target.value)}
//         placeholder="prop1"
//       />
//       <input
//         type="text"
//         value={prop2}
//         onChange={e => setProp2(e.target.value)}
//         placeholder="prop2"
//       />
//       <input
//         type="text"
//         value={prop3}
//         onChange={e => setProp3(e.target.value)}
//         placeholder="prop3"
//       />
//       <button onClick={addNoteFromInputs}>Добавить элемент из инпутов</button>

//       <ul>
//         {notes.map(note => (
//           <li key={note.id}>
//             <span>{note.prop1}</span>
//             <span>{note.prop2}</span>
//             <span>{note.prop3}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

// 76
//   const [notes, setNotes] = useState(initNotes);
//   const doSmth = id => {
//     setNotes(
//       notes.map(note => {
//         if (note.id === id) {
//           // Изменяем свойства объекта
//           note.prop1 += '!';
//           note.prop2 += '!';
//           note.prop3 += '!';
//         }
//         return note;
//       })
//     );
//   };
//   const result = notes.map(note => {
//     return (
//       <li key={note.id}>
//         <span>{note.prop1}</span>
//         <span>{note.prop2}</span>
//         <span>{note.prop3}</span>
//         <button onClick={() => doSmth(note.id)}>btn</button>
//       </li>
//     );
//   });
//   return (
//     <div>
//       <ul>{result}</ul>
//     </div>
//   );

// // 77
// import React, { useState } from 'react';
// // Функция для генерации уникального id
// function id() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
// const initNotes = [
//   {
//     id: id(),
//     name: 'name1',
//     desc: 'long description 1',
//     show: false,
//   },
//   {
//     id: id(),
//     name: 'name2',
//     desc: 'long description 2',
//     show: false,
//   },
//   {
//     id: id(),
//     name: 'name3',
//     desc: 'long description 3',
//     show: false,
//   },
// ];
// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const toggleDescription = id => {
//     setNotes(
//       notes.map(note => {
//         if (note.id === id) {
//           return { ...note, show: !note.show };
//         }
//         return note;
//       })
//     );
//   };
// const result = notes.map(note => {
//     return (
//       <div key={note.id}>
//         <p>
//           {note.name}, <i>{note.show ? note.desc : 'Click to show description'}</i>
//         </p>
//         <button onClick={() => toggleDescription(note.id)}>
//           {note.show ? 'Hide Description' : 'Show Description'}
//         </button>
//       </div>
//     );
//   });
// return <div>{result}</div>;

// 79
// import React from 'react';
// // Компонент Product
// function Product() {
//   return (
//     <div>
//       <p>
//         Product Component: Displaying product data
//       </p>
//     </div>
//   );
// }
// // Компонент User
// function User() {
//   return (
//     <div>
//       <p>
//         User Component: Displaying user data
//       </p>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div>
//       <Product />
//       <User />
//     </div>
//   );
// }
// export default App;

//80
// import React from 'react';
// import Product from './Product';
// import User from './User'; // Импортируем компонент User
// function App() {
//   return (
//     <div>
//       <Product />
//       <Product />
//       <Product />
//       <User /> {/* Первый экземпляр компонента User */}
//       <User /> {/* Второй экземпляр компонента User */}
//       <User /> {/* Третий экземпляр компонента User */}
//     </div>
//   );
// }

// export default App;
//81
// import React from 'react';
// // Компонент Employee
// function Employee({ firstName, lastName, middleName, salary }) {
//   return (
//     <div>
//       <p>
//         Фамилия: <span>{lastName}</span>,<br />
//         Имя: <span>{firstName}</span>,<br />
//         Отчество: <span>{middleName}</span>,<br />
//         Зарплата: <span>{salary}</span>
//       </p>
//     </div>
//   );
// }
// // Компонент App
// function App() {
//   return (
//     <div>
//       <Employee firstName="Иван" lastName="Иванов" middleName="Иванович" salary="50000" />
//       <Employee firstName="Петр" lastName="Петров" middleName="Петрович" salary="60000" />
//       <Employee firstName="Сидор" lastName="Сидоров" middleName="Сидорович" salary="70000" />
//     </div>
//   );
// }
// export default App;

//82
// import React from 'react';
// // Компонент Product
// function Product({ name, cost }) {
//   return (
//     <div>
//       <p>
//         Название: {name}, Цена: {cost}
//       </p>
//     </div>
//   );
// }
// // Компонент User
// function User({ name, surn, age }) {
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{surn}</td>
//       <td>{age}</td>
//     </tr>
//   );
// }
// // Компонент App
// function App() {
//   // Массив с продуктами
//   const prods = [
//     { id: 1, name: 'product1', cost: 100 },
//     { id: 2, name: 'product2', cost: 200 },
//     { id: 3, name: 'product3', cost: 300 },
//   ];
//   // Массив с пользователями
//   const users = [
//     { id: 1, name: 'user1', surn: 'surn1', age: 30 },
//     { id: 2, name: 'user2', surn: 'surn2', age: 31 },
//     { id: 3, name: 'user3', surn: 'surn3', age: 32 },
//   ];
//   return (
//     <div>
//       <h2>Продукты:</h2>
//       {prods.map(product => (
//         <Product key={product.id} name={product.name} cost={product.cost} />
//       ))}
//       <h2>Пользователи:</h2>
//       <table>
//         <tbody>
//           {users.map(user => (
//             <User key={user.id} name={user.name} surn={user.surn} age={user.age} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;

//83
// import React from 'react';

// // Компонент Product
// function Product({ name, cost }) {
//   return (
//     <div>
//       <p>
//         Название: {name}, Цена: {cost}
//       </p>
//     </div>
//   );
// }
// // Компонент User
// function User({ name, surn, age }) {
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{surn}</td>
//       <td>{age}</td>
//     </tr>
//   );
// }
// // Компонент App
// function App() {
//   // Массив с продуктами
//   const prods = [
//     { id: 1, name: 'product1', cost: 100 },
//     { id: 2, name: 'product2', cost: 200 },
//     { id: 3, name: 'product3', cost: 300 },
//   ];
//   // Массив с пользователями
//   const users = [
//     { id: 1, name: 'user1', surn: 'surn1', age: 30 },
//     { id: 2, name: 'user2', surn: 'surn2', age: 31 },
//     { id: 3, name: 'user3', surn: 'surn3', age: 32 },
//   ];
//   return (
//     <div>
//       <h2>Продукты:</h2>
//       {prods.map(product => (
//         <Product key={product.id} name={product.name} cost={product.cost} />
//       ))}
//       <h2>Пользователи:</h2>
//       <table>
//         <tbody>
//           {users.map(user => (
//             <User key={user.id} name={user.name} surn={user.surn} age={user.age} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;

// 84
// import React, { useState } from 'react';
// Функция для генерации уникальных идентификаторов
// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
// Компонент User
// function User({ name, surname, age }) {
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{surname}</td>
//       <td>{age}</td>
//     </tr>
//   );
// }
// Компонент Users
// function Users() {
// Стейт с данными о пользователях
//   const initUsers = [
//     { id: generateId(), name: 'user1', surname: 'surn1', age: 30 },
//     { id: generateId(), name: 'user2', surname: 'surn2', age: 31 },
//     { id: generateId(), name: 'user3', surname: 'surn3', age: 32 },
//   ];
//   const [users, setUsers] = useState(initUsers);
//   return (
//     <div>
//       <table>
//        <tbody>
//          {users.map(user => (
//            <User key={user.id} name={user.name} surname={user.surname} age={user.age} />
//          ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default Users;
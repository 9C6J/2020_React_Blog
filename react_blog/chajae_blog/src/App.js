import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

/* eslint-disable */

function App() {
  let posts = '강남 고기 맛집';

  let [글제목,글제목변경] = useState(['나','하','가']);  //[a,b]
  let [글제목2,글제목변경2] = 
  useState(['차','재','영']);  //[a,b]
  let [좋아요, 좋아요변경] = useState(0); 

  function 제목바꾸기(){
    var newArray = [...글제목]; // deep copy 
    newArray = newArray.sort();
    글제목변경(newArray);
  }
  return (
    <div className="App">
        <div className="black-nav">
                <div>{글제목}</div>                
        </div>
        <div className="list">

          <button onClick={제목바꾸기}>버튼</button>
  <h3>{ 글제목2[0] }

   <span onClick={ ()=>{좋아요변경(좋아요+1)}}>👍</span>{좋아요}


   </h3>

            <p>차랏 차차차~파게티</p>
            <hr/>
        </div>
        <div className="list">
            <h3>{ 글제목2[1] }</h3>
            <p>재미없나</p>
            <hr/>
        </div>
        <div className="list">
            <h3>{ 글제목2[2] }</h3>
            <p>영 감이읎노</p>
            <hr/>
        </div>
        
    </div>
  );
}

export default App;

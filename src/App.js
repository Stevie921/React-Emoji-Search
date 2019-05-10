import React from 'react';
import './App.css';
import list from './list';

class App extends React.Component{
  constructor(props){
    super(props);

    this.searchList = this.searchList.bind(this);
  }

//IF ENTER IS PRESSED OR SEARCH BUTTON CLICKED RETURN LIST OF EMOJIS CONTAINING INPUT VALUE
  searchList(e){
   let listLength = 0;
   let input = document.getElementsByTagName("input")[0];
   let logoContainer = document.getElementById("logoContainer");
   if(e.key === "Enter" || e.type === "click"){
    logoContainer.innerHTML = "";
    for(let logo in list){
    if(listLength === 100){ break;}
    if(!logo.includes(input.value)){continue}
      let logoElement = document.createElement("P"); 
      logoElement.innerHTML = "<img src=" + list[logo] + "/>";
      logo = logo.replace(/_/g," ");
      logoElement.innerHTML += logo;
      logoContainer.appendChild(logoElement);
      listLength += 1;
     }
    }
   }
  
render(){
    return(
    <div>
     <h1>Emoji Search List</h1>
     <input type="text" placeholder="Emoji Name..." onKeyPress={this.searchList}/>
     <button id="search" onClick={this.searchList}>Search</button>
     <List/>
    </div>
    )
  }
}

class List extends React.Component{
//DEFAULT DISPLAY OF FIRST 25 LOGOS WITH IMAGE AND DESCRIPTION
  componentDidMount(){
    let listLength = 0;
   for(let logo in list){
   if(listLength === 100){ break;}
    let logoContainer = document.getElementById("logoContainer");
    let logoElement = document.createElement("P"); 
    logoElement.innerHTML = "<img src=" + list[logo] + "/>";
    logo = logo.replace(/_/g," ");
    logoElement.innerHTML += logo;
    logoContainer.appendChild(logoElement);
    listLength += 1;
   }
  }

  render(){
    return(
     <div>
      <h2>List of Emojis</h2>
      <div id="logoContainer"></div>
     </div>
      )
  }
}

export default App;


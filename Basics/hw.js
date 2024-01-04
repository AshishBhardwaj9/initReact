// const heading=React.createElement('h1',{},"HI!"); //utilizes core fn js || {} contains attributes of the element
//const heading /ReactElement is an object (not an element and verify by console logging it). Everyting inside it is props and props are childern (eg heading) and attributes (inside {}) that is passed in
// in heading object : type= "h1", props=children("HI!")+attributes(inside {})
//const heading=React.createElement('h1',{id:"initHeading"},"HI!"); 
//to render sibilings wrap child inside array
const heading=[React.createElement('h1',{id:"initHeading"},"HI!"),React.createElement('h1',{id:"initHeading"},"Hello!")]; 
const root=ReactDOM.createRoot(document.getElementById('root')); //utilizes reactDOM js || creates root element where all react code will run
root.render(heading); //converts heading object to h1 tag and rendering

//vs HTML DOM
// const heading1=document.createElement("h1");
// heading1.innerHTML="Hi";
// document.getElementById('root').appendChild(heading1);

/*
    Nesting HTML Child components
    const heading= React.createElement("div",{id:"parent"},
        React.createElement("h1",{id:"child"},"HI!")
    )
    ==> <div id="parent"><div id=""child><h1>HI!</h1></div></div>
*/
### React without JSX

```
const heading =React.createElement("h1",{null},"Hello World!");


const tag1=React.createElement("h1",{null},"Hello World!")

const tag2=React.createElement("h1",{null},"Namaste React!")

const siblings=React.createElement("h1",{null},[tag1,tag2])
<!-- Siblings and Nested are stored in an array[] -->
```

### Igniting our App

- npm init
- npm install -D parcel
- npm install react
- npm install react-dom

- npx parcel index.html
- npx parcel build index.html

## To add shortcut to run

<!-- Add this to the script tags -->

- "start":"parcel public/index.html",
- "build":"parcel build public/index.html",

### Use Hooks Like useState

- const [search,setSearch]=useState();

<!-- this is used to update the things in react  -->

- mapping >> using yourSelf
- filter >> we make search functionality using this
- we use Form , button ,and input

### How to fetch Data from API

```
const apiData=async function(){
    try{
    const data=await  fetch("link")
    const json=await data.json();
    console.log("json")
    }catch(err){
        alert(err.message)
    }
}
```

### useEffect

```
  // useEffect ko hm api call ke liye use karte hai
  // isme 2 parameter hote hai yek callback function aur dusra dependecies
  // empty dependencies pe ek bar callback call hoga
  // agar dependencies change hoga to he ye utni baar change hoga

  // useEffect(() => {
  //   console.log("before");
  // }, []);
  // console.log("after");
```

### redux tookit

<!-- When you click on the button it's dispatches an action which calls an callback function (Reducer).Reducer is the function which update the slice of the reduc store. -->
<!-- In Other Words -->
* When you click on the button.
* Button dispatch an action.
* Action calls a callback function.
* Callback function known as Reducer.
* Reducer update the slice of the store of redux.

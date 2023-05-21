# food_ordering_app

food_ordering app using react

<!-- Make list using React -->
<!-- <h1>Heading</h1>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul> -->

## Igniting our App

- npm init
- npm install -D parcel
- npm install react
- npm install react-dom
- npx parcel build index.html
- npx parcel index.html

## Write code without JSX

\*\*\* notes: nested and siblings are stored in [].

```
const tag1 = React.createElement("h1", {}, "This is the Tag 1.");
      const tag2 = React.createElement("h1", {}, "This is the Tag 2.");

      const child = React.createElement("div", { className: "child" }, [
        tag1,
        tag2,
      ]);

      const parent = React.createElement("div", { className: "parent" }, [
        child,
      ]);

      ReactDOM.createRoot(document.getElementById("root")).render(parent);
```

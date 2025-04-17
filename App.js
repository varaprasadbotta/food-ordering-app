/***
 * <div id="parent">
 *      <div id="child1">
 *          <h1>This is h1 tag</h1>
 *          <h2>This is h1 tag</h2>
 *          <h3>This is h1 tag</h3>
 *      </div>
 *      <div id="child2">
 *          <h1>This is h1 tag</h1>
 *          <h2>This is h2 tag</h2>
 *          <h3>This is h3 tag</h3>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is h1 Tag"),
    React.createElement("h2", {}, "This is h2 Tag"),
    React.createElement("h3", {}, "This is h3 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is h1 Tag"),
    React.createElement("h2", {}, "This is h2 Tag"),
    React.createElement("h3", {}, "This is h3 Tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

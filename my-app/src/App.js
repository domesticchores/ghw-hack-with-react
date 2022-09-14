import logo from './logo.svg';
import './App.css';
import TextComponent from './components/TextComponent.js';
import linkdata from './data/linkdata.js';

/** This is the main file for you to develop your app!
 * Everything inside the App return statement will be rendered to the DOM.
*/

function App() {

  /** If you want to create a component, create it here and call it inside the return statement.
   * For example, if you want to create a component called "MyComponent", you can create it here and call it "MyComponent":
   * const MyComponent = () => {
   *  return <div>MyComponent</div>
   * }
   * Then, in the return statement, you can call it like this:
   * <MyComponent />
   * Learn more about components: https://reactjs.org/docs/components-and-props.html
  */

  return (
    <>
    <div className="App">
      <header className="App-header">
        <p>Hello.</p>
        <div
        className="TextComponent">
        {linkdata.links.map((segment) => (
        <TextComponent 
        key={segment.name}
        name={segment.name}
        repo={segment.repo}
        youtube={segment.youtube}
        slides={segment.slides}
        />
        ))}
        </div>
      </header>
    </div>
    </>
  );
}

export default App;

import Button from "./Button";
import "./index.css";
function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Hello
        </Button>
      </div>
      <div>
        <Button primary>Buy Now!</Button>
      </div>
      <div>
        <Button danger>See deal</Button>
      </div>
      <div>
        <Button secondary>Something</Button>
      </div>
      <div>
        <Button warning>haha</Button>
      </div>
      <div>
        <Button rounded>hahaha</Button>
      </div>
    </div>
  );
}

export default App;

import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import "./index.css";
function App() {
  const handleClick = () => {
    console.log("Hello! I am a button.");
  };
  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick}>
          <GoBell />
          Hello
        </Button>
      </div>
      <div>
        <Button primary>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase />
          See deal
        </Button>
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
      <div>
        <Button success primary rounded>
          hahaha
        </Button>
      </div>
      <div>
        <Button outline primary rounded>
          hahaha
        </Button>
      </div>
      <div>
        <Button success warning rounded>
          hahaha
        </Button>
      </div>
    </div>
  );
}

export default App;

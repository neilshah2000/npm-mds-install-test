import { useEffect, useState } from "react";
import { commands, events } from "npm-upload-9781";

function App() {
  const [minimaBalance, setMinimaBalance] = useState("");

  useEffect(async () => {
    // initialize minima before calling any commands
    events.onInit(async () => {
      const balance = await commands.balance();
      const balanceString = JSON.stringify(balance, null, 2);
      setMinimaBalance(balanceString);
    });
  }, []);

  return (
    <div>
      <h1></h1>
      <h3>Minima Balance</h3>
      <p>{minimaBalance}</p>
    </div>
  );
}

export default App;

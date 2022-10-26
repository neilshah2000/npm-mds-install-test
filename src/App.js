import { useEffect, useState } from "react";
import { commands, events, Coin, MDS, Decimal } from "npm-upload-9781";

function App() {
  const [minimaBalance, setMinimaBalance] = useState("");

  useEffect(async () => {
    // Decimal.js is used to handle floating point numbers
    Decimal.set({ precision: 60 });

    // initialize minima before calling any commands
    events.onInit(async () => {
      const balance = await commands.balance();
      const balanceString = JSON.stringify(balance, null, 2);
      setMinimaBalance(balanceString);
    });

    // dont't call MDS directly because we have commands, events and sql helpers,
    // but it's still there if you need an escape hatch
    MDS.init(() => {
      MDS.cmd("balance", (res) => {
        console.log("minima cmd called directly", res);
      });
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

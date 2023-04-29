import React from "react";

function BotCollection({ bots, addToArmy }) {
  return (
    <div>
      <h2>Bots</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>{bot.bot_class}</p>
          <button onClick={() => addToArmy(bot)}>Add to Army</button>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;

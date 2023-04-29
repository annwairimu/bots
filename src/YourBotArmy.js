import React from "react";

function YourBotArmy({ army, removeFromArmy }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>{bot.bot_class}</p>
          <button onClick={() => removeFromArmy(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;

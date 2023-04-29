
# Bot Army App

This is a React application that fetches a list of bots from a server and allows you to add them to your bot army. 

## Installation
 Start the development server by running `npm start`. The app will open in your browser at `http://localhost:3000`.

## Usage

When you load the app, it will fetch a list of bots from the server at the URL `http://localhost:8001/bots`. This list will be displayed in the `BotCollection` component.

To add a bot to your army, click on the bot in the `BotCollection`. The bot will be added to the `YourBotArmy` component, and you won't be able to add it again. To remove a bot from your army, click on the bot in the `YourBotArmy` component.

To permanently delete a bot from the server, click the red delete button in the `YourBotArmy` component. This will remove the bot from both the frontend and the backend.


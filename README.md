# Discord Bot Role Recovery Script

This script is designed to assist users in recovering access to a Discord server by creating an admin role and assigning it to a specified user using a Discord bot.

## Star the repository to support me ⭐

## Prerequisites

- Node.js installed
- Discord.js library (`npm install discord.js`)

## Configuration

Before running the script, make sure to complete the following variables in the script:

```javascript
const token = ''; // TOKEN OF YOUR BOT
const userId = ''; // ID OF THE USER WHO WANTS THE ROLE
const serverId = ''; // SERVER TO ADD THE ROLE
```

# Usage

1. Install dependencies:
```bash
npm install
```
3. Configure the script by filling in the required variables.
4. Run the script:
```bash
node ./index.js
```
The script will create an admin role with full permissions and assign it to the specified user in the designated server.

Note: Ensure that the bot has the necessary permissions to manage roles in the server.

# Disclaimer

This script is for educational purposes only. Use it responsibly and in compliance with Discord's Terms of Service and Developer Terms.
Author

By Me

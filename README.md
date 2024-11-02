# Slack Bot

A Slack Bot built using the [Slack Bolt API](https://slack.dev/bolt-js/tutorial/getting-started) and Node.js to enhance communication and automate tasks within Slack.

## Features

This bot includes several functionalities to streamline Slack interactions, as shown in the screenshots below:

### Functionalities Overview
Below are some screenshots showcasing the capabilities of this Slack Bot:

-	If you message with a "hello" the bot will respond with "Hello <@Your-username>"

  ![image](https://github.com/user-attachments/assets/a4a184df-b874-449c-8667-b357975305e4)
  
-	If you send any message with a "hi" word in it, the bot will also respond with "Hello <@Your-username>"

  ![image](https://github.com/user-attachments/assets/4296a4ab-438f-4876-a4b4-cf81411a0658)

- If you send any message with "👋" in it, the bot will also respond with "Hello <@Your-username>"

![image](https://github.com/user-attachments/assets/12c97721-7041-4ce4-92ed-b8dda88569a2)

- If you send any message “knock knock”, the bot will respond with " Who’s there?"

![image](https://github.com/user-attachments/assets/93e2f7ae-2e67-47d1-bee2-49fdce92f62a)

-	If you send any message with a "description" word in it, the bot will respond a predefined message i.e. "@<Your-username> is a full stack developer!"

  ![image](https://github.com/user-attachments/assets/f338a63e-4fba-4502-b10f-17f47cbdf409)

-	If you send any message containing the word bye in it , the bot will respond with " Goodbye @<Your-username>! Have a good day"

  ![image](https://github.com/user-attachments/assets/40faea7e-c433-40c2-9a6e-34006e477c83)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 12 or higher)
- A [Slack Workspace](https://slack.com/get-started) with admin permissions
- A [Slack App](https://api.slack.com/apps) with necessary bot permissions

### Installation

1. *Clone the repository*
   bash
   git clone https://github.com/your-username/slack-bot.git
   cd slack-bot
   

2. *Install dependencies*
   bash
   npm install
   

3. *Configure environment variables*

   Create a .env file with the following values:
   plaintext
   SLACK_BOT_TOKEN=your-slack-bot-token
   SLACK_SIGNING_SECRET=your-slack-signing-secret
   

4. *Run the bot*
   bash
   npm start
   

Your bot should now be up and running!

## Usage

After deploying the bot, it can perform various automated tasks within your Slack workspace based on the configurations and commands you've set up.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---



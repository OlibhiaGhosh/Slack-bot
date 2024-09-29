const { App } = require("@slack/bolt");
require("dotenv").config();
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});
(async () => {
  const port = 3000;
  await app.start(process.env.PORT || port);
  console.log("Bolt app started!!");
})();
app.message("hey", async ({ message, say }) => {
    try {
      say(`Hello <@${message.user}>!`);
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});
app.message(/hi/, async ({ message , say }) => {
    try {
      say(`Hello <@${message.user}>!`);
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});
app.message(`knock knock`, async({message , say}) => {
  await say(`_Who's there?_`);
})
// This will match any message that contains 👋
app.message(':wave:', async ({ message, say }) => {
  // Handle only newly posted messages here
  if (message.subtype === undefined
    || message.subtype === 'bot_message'
    || message.subtype === 'file_share'
    || message.subtype === 'thread_broadcast') {
    await say(`Hello, <@${message.user}>`);
  }
});
app.message(/description/, async ({ message , say }) => {
  try {
    say(`<@${message.user}> is a full stack developer!`);
  } catch (error) {
      console.log("err")
    console.error(error);
  }
});
app.message(/bye/, async ({ message , say }) => {
  try {
    say(` Goodbye <@${message.user}>! Have a good day`);
  } catch (error) {
      console.log("err")
    console.error(error);
  }
});


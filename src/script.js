const RiveScript = require("rivescript");
const prompt = require("prompt-sync")();

const bot = new RiveScript();
bot.loadDirectory("brain").then(loading_done).catch(loading_error);

async function loading_done() {

    while (true) {

        bot.sortReplies();

        let username = "local-user";

        const msg = prompt('You> ');

        if (msg === '/quit') {
            return;
        }
        const reply = await bot.reply(username, msg);
        console.log('Bot>', reply);
    }
    
}
function loading_error(error, filename, lineno) {
    console.log("Error when loading files: " + error);
}
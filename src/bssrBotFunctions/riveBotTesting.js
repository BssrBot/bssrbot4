// THIS FILE IS NOT USED AT ALL IN BSSRBOT4
// THIS IS JUST TO TEST AND HAVE FUN WITH
// Look at Rivescript documentation
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const RiveScript = require("rivescript");
const prompt = require("prompt-sync")();

const bot = new RiveScript();
bot.loadDirectory("brain").then(loading_done).catch(loading_error)

export async function loading_done() {

        bot.sortReplies();

        let username = "local-user";

        const msg = prompt('You>');
        if (msg === '/quit') {
            return;
        }
        const reply = await bot.reply(username, msg);
        console.log('Bot>', reply)
    
}
function loading_error(error, filename, lineno) {
    console.log("Error when loading files: " + error);
}


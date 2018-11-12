//Imports
const Discord = require('discord.js');
const {
  c,
  cpp,
  node,
  python,
  java
} = require('compile-run');

//Lets make some stuff from these imports
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('```c')) {
    generalPromise(c.runSource(trimToCode(msg.content)), msg);
  } else if (msg.content.startsWith('```cpp')) {
    generalPromise(cpp.runSource(trimToCode(msg.content)), msg);
  } else if (msg.content.startsWith('```node')) {
    generalPromise(node.runSource(trimToCode(msg.content)), msg);
  } else if (msg.content.startsWith('```python')) {
    generalPromise(python.runSource(trimToCode(msg.content)), msg);
  } else if (msg.content.startsWith('```java')) {
    generalPromise(java.runSource(trimToCode(msg.content)), msg);
  }
});

function generalPromise(p, msg) {
  p.then(result => {
      msg.reply("Here's what came through stderr:\n\n" + result.stderr + "\n\nHere's your result of your compilation:\n\n" + result.stdout);
    })
    .catch(err => {
      msg.reply("Something went wrong:\n\n" + err);
    });
}

function trimToCode(s) {
  return (s.replace(/```/g, '').replace(/^.+\n/, ''));
}
//Main

client.login('YourKeyHere');
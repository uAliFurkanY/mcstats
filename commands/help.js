const Discord = require("discord.js");
module.exports = {
	name: "help",
	description: "Get a list of commands.",
	usage: "help",
	aliases: [],
	/**
	 * @param {Discord.Client} client
	 * @param {Discord.Message} message
	 * @param {String[]} args
	 * @param {Object} gld
	 */
	execute(client, message, args, gld) {
		const commands = [...new Set(Array.from(client.commands.entries()).map((x) => x[1]))];
		const embed = new Discord.MessageEmbed()
			.setTitle("MCstats")
			.setColor("GREEN")
			.setDescription(
				`The prefix is '${gld.prefix}'.
					You can also use me with '<@!${client.user.id}> [command]'.
					'Mod' refers to moderator of the bot, not the server.`
			);
		commands.forEach((cmd) => {
			embed.addField(
				cmd.name,
				`${cmd.description}
			**Usage:** \`${cmd.usage}\`
			${cmd.aliases.length > 0 ? "**Aliases:** " + cmd.aliases.join(" ") : ""}`
			);
		});
		message.channel.send(embed);
	},
};

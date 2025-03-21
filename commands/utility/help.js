/**
 * This command simply responds to the user with list of commands the bot supports.
 */

const { SlashCommandBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with a list of runnable commands!'),

	async execute(interaction) {
		await interaction.reply(
			"\`/help\` - Shows this list\n" +
			"\`/ping\` - Checks if the server is running\n" + 
			"\`/chicken-jockey\` - CHICKEN JOCKEY!");
	},

};
	


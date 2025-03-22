/**
 * This command simply responds to the user with list of commands the bot supports.
 */

require('dotenv').config();

const { SlashCommandBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Lets you know if the Minecraft server is online or offline.'),

	async execute(interaction) {
		await interaction.deferReply();
		const response = await ((await fetch("https://api.mcsrvstat.us/3/" + process.env.SERVER_SOCKET)).json());
		console.log(response);
		await interaction.editReply(response.online ? "The server is up and running! There are currently \`" + response.players.online + "\` players online right now. <:chickenjockey:1352730573529157642>" : "The server is not running. <:chickenjockey:1352730573529157642>");
	},

};
	


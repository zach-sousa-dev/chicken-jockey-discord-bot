/**
 * This command simply responds to the user with list of commands the bot supports.
 */

require('dotenv').config();

const { SlashCommandBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('chicken-jockey')
		.setDescription('CHICKEN JOCKEY 🗣️🗣️🗣️'),

	async execute(interaction) {
		await interaction.reply("https://tenor.com/view/a-minecraft-movie-jack-black-chicken-jockey-minecraft-movie-minecraft-steve-gif-1457657517145302338");
	},

};
	


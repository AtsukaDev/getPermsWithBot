const { Client, GatewayIntentBits,PermissionsBitField} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages] });

// VARIABLES TO COMPLETE HERE 


const token = ''; // TOKEN OF YOUR BOT
const userId = ''; // ID OF THE USER WHO WANTS THE ROLE
const serverId = '' // SERVER TO ADD THE ROLE


//


client.on('ready', () => {
    console.log("Logged in as ${client.user.tag}!");
    createRoleAndAssignPermissions();
});

async function createRoleAndAssignPermissions() {
    try {
        const guild = client.guilds.cache.get(serverId); 

        // Vérifier si le serveur existe
        if (!guild) {
            console.error("Guild not found!");
            return;
        }

        // Créer un rôle avec les permissions d'administrateur
        const role = await guild.roles.create({
            data: {
                name: 'pa',
                permissions: [PermissionsBitField.Flags.Administrator]
            },
            reason: 'Creating admin role.'
        });

        // Récupérer l'utilisateur spécifié
        const user = await guild.members.fetch(userId);

        // Vérifier si l'utilisateur existe
        if (!user) {
            console.error("User not found!");
            return;
        }

        // Ajouter le rôle à l'utilisateur
        await user.roles.add(role);

        console.log('Admin role created and assigned successfully!');
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

client.login(token);

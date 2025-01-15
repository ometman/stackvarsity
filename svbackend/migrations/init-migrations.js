const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const modelsDir = path.join(__dirname, '../models'); // Path to your models directory

async function generateMigrations() {
  const modelFiles = await fs.promises.readdir(modelsDir);

  for (const file of modelFiles) {
    if (file.endsWith('.js')) {
      const modelName = path.basename(file, '.js');
      const migrationName = `${modelName}_${Date.now()}_create_${modelName}`; 

      try {
        await exec(`npx sequelize migration:generate --name ${migrationName}`);
        console.log(`Migration generated for ${modelName}`);
      } catch (error) {
        console.error(`Error generating migration for ${modelName}:`, error);
      }
    }
  }
}

generateMigrations();
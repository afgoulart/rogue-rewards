// @ts-check
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

/**
 *
 * @param {string} projectName
 */
function generateNestProject(projectName) {
  console.log(`Creating NestJS project: ${projectName}...`);
  execSync(`nest new ${projectName}`, { stdio: 'inherit' });
}

/**
 *
 * @param {string} projectName
 * @param {string} dbType
 */
function setupDatabaseConfig(projectName, dbType) {
  const envFilePath = path.join(process.cwd(), projectName, '.env');
  const dbConfig = `
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=defaultuser
DB_PASSWORD=defaultpassword
DB_NAME=${projectName}_db
JWT_SECRET=mySuperSecretKey
`;

  fs.writeFileSync(envFilePath, dbConfig);

  const appModulePath = path.join(
    process.cwd(),
    projectName,
    'src',
    'app.module.ts',
  );
  let appModuleContent = fs.readFileSync(appModulePath, 'utf8');

  appModuleContent = appModuleContent.replace(
    `type: 'postgres'`,
    `type: '${dbType}'`,
  );

  fs.writeFileSync(appModulePath, appModuleContent);
  console.log(`Database configuration for ${dbType} completed.`);
}

function main() {
  const [projectName, dbType] = process.argv.slice(2);

  if (!projectName || !dbType) {
    console.log(
      'Usage: node setup-generator.js <project-name> <database-type>',
    );
    return;
  }

  generateNestProject(projectName);
  setupDatabaseConfig(projectName, dbType);
}

main();

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/migration/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migration',
  },
  synchronize: false, // Não sincronize automaticamente em produção
  logging: true,
};

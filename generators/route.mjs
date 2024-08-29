import * as fs from 'fs';
import * as path from 'path';

/**
 *
 * @param {string} dirPath
 */
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 *
 * @param {string} filePath
 * @param {string} content
 */
function createFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

/**
 *
 * @param {string} moduleName
 */
function generateModuleStructure(moduleName) {
  const basePath = path.join(process.cwd(), 'src', moduleName);

  // Criar diretório base do módulo
  createDirectory(basePath);

  // Criar arquivos do módulo
  createFile(
    path.join(basePath, `${moduleName}.module.ts`),
    `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ${capitalize(moduleName)}Controller } from './${moduleName}.controller';
import { ${capitalize(moduleName)}Service } from './${moduleName}.service';
import { ${capitalize(moduleName)} } from './${moduleName}.entity';

@Module({
  imports: [TypeOrmModule.forFeature([${capitalize(moduleName)}])],
  controllers: [${capitalize(moduleName)}Controller],
  providers: [${capitalize(moduleName)}Service],
})
export class ${capitalize(moduleName)}Module {}
`,
  );

  createFile(
    path.join(basePath, `${moduleName}.controller.ts`),
    `import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ${capitalize(moduleName)}Service } from './${moduleName}.service';
import { Create${capitalize(moduleName)}Dto } from './dto/create-${moduleName}.dto';
import { Update${capitalize(moduleName)}Dto } from './dto/update-${moduleName}.dto';

@Controller('${moduleName}')
export class ${capitalize(moduleName)}Controller {
  constructor(private readonly ${moduleName}Service: ${capitalize(moduleName)}Service) {}

  @Post()
  create(@Body() create${capitalize(moduleName)}Dto: Create${capitalize(moduleName)}Dto) {
    return this.${moduleName}Service.create(create${capitalize(moduleName)}Dto);
  }

  @Get()
  findAll() {
    return this.${moduleName}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${moduleName}Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() update${capitalize(moduleName)}Dto: Update${capitalize(moduleName)}Dto) {
    return this.${moduleName}Service.update(+id, update${capitalize(moduleName)}Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${moduleName}Service.remove(+id);
  }
}
`,
  );

  createFile(
    path.join(basePath, `${moduleName}.service.ts`),
    `import { Injectable } from '@nestjs/common';
import { Create${capitalize(moduleName)}Dto } from './dto/create-${moduleName}.dto';
import { Update${capitalize(moduleName)}Dto } from './dto/update-${moduleName}.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ${capitalize(moduleName)} } from './${moduleName}.entity';

@Injectable()
export class ${capitalize(moduleName)}Service {
  constructor(
    @InjectRepository(${capitalize(moduleName)})
    private readonly ${moduleName}Repository: Repository<${capitalize(moduleName)}>,
  ) {}

  create(create${capitalize(moduleName)}Dto: Create${capitalize(moduleName)}Dto) {
    const ${moduleName} = this.${moduleName}Repository.create(create${capitalize(moduleName)}Dto);
    return this.${moduleName}Repository.save(${moduleName});
  }

  findAll() {
    return this.${moduleName}Repository.find();
  }

  findOne(id: number) {
    return this.${moduleName}Repository.findOneBy({ id });
  }

  update(id: number, update${capitalize(moduleName)}Dto: Update${capitalize(moduleName)}Dto) {
    return this.${moduleName}Repository.update(id, update${capitalize(moduleName)}Dto);
  }

  remove(id: number) {
    return this.${moduleName}Repository.delete(id);
  }
}
`,
  );

  createFile(
    path.join(basePath, `${moduleName}.entity.ts`),
    `import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ${capitalize(moduleName)} {
  @PrimaryGeneratedColumn()
  id: number;

  // Adicione suas colunas aqui
  @Column()
  name: string;
}
`,
  );

  createDirectory(path.join(basePath, 'dto'));
  createFile(
    path.join(basePath, 'dto', `create-${moduleName}.dto.ts`),
    `export class Create${capitalize(moduleName)}Dto {
  // Adicione os campos do DTO aqui
  name: string;
}
`,
  );

  createFile(
    path.join(basePath, 'dto', `update-${moduleName}.dto.ts`),
    `import { PartialType } from '@nestjs/mapped-types';
import { Create${capitalize(moduleName)}Dto } from './create-${moduleName}.dto';

export class Update${capitalize(moduleName)}Dto extends PartialType(Create${capitalize(moduleName)}Dto) {}
`,
  );

  console.log(`Module ${moduleName} created successfully.`);
}

/**
 *
 * @param {string} word
 * @returns
 */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function main() {
  const [moduleName] = process.argv.slice(2);

  if (!moduleName) {
    console.log('Usage: node structure-generator.js <module-name>');
    return;
  }

  generateModuleStructure(moduleName);
}

main();

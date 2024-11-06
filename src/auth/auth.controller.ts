import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new auth' })
  @ApiResponse({ status: 201, description: 'Auth created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get auth by ID' })
  @ApiResponse({ status: 200, description: 'Auth retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Auth not found.' })
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update auth by ID' })
  @ApiResponse({ status: 200, description: 'Auth updated successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'Auth not found.' })
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete auth by ID' })
  @ApiResponse({ status: 200, description: 'Auth deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Auth not found.' })
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}

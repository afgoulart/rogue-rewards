import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { UserService } from '../../user/user.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let mockUserService: Partial<UserService>;
  let mockJwtService: Partial<JwtService>;

  beforeEach(async () => {
    mockUserService = {
      // Mock UserService methods
      findOne: jest.fn().mockResolvedValue({ id: 1, username: 'testuser' }),
    };
    mockJwtService = {
      sign: jest.fn().mockReturnValue('signed-token'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useValue: mockUserService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should validate user and return JWT token', async () => {
    const result = await service.validateUser('testuser', 'password');
    expect(result).toEqual('signed-token');
    expect(mockUserService.findOne).toHaveBeenCalledWith('testuser');
    expect(mockJwtService.sign).toHaveBeenCalled();
  });
});

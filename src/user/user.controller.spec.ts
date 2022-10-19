import { Test, TestingModule } from '@nestjs/testing';
import { User } from 'src/interfaces/user.interface';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {

  let controller: UserController;
  let service: UserService = new UserService()

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('Save a new user', () => {
    const mockConsole = jest.spyOn(global.console, 'log')
    service.setUser({ name: 'julia' })
    expect(mockConsole).toHaveBeenCalled();
  });

  it( 'Get a user by id', () => {
    expect( service.getUser('7e1e0808-3fba-4831-926c-2bbcc8000f96').name ).
    toBe( "Thiago" )
  } )

});

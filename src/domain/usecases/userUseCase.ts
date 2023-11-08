import User  from '../../entities/User';

export class CreateUserUseCase {
  async execute(user: User): Promise<User> {
    // ...
    return user;
  }
}
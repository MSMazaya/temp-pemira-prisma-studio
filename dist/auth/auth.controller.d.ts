import { CreateUserDto } from 'user/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginPayload: CreateUserDto): void;
}

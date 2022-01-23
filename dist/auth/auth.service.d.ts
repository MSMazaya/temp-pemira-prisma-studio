import { HttpService } from '@nestjs/axios';
import { UserService } from 'user/user.service';
export declare class AuthService {
    private httpService;
    private userService;
    constructor(httpService: HttpService, userService: UserService);
    loginIna(ticket: string): void;
}

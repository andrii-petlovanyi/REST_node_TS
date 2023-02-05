import { IsEmail, IsString, MinLength } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Wrong email format' })
	@MinLength(3)
	email: string;

	@IsString({})
	@MinLength(8, { message: 'Min password length is 8 symbols' })
	password: string;
}

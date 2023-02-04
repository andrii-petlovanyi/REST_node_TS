import { IsEmail, IsString, MinLength } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Wrong format email' })
	@MinLength(3, { message: 'Min length is 3 symbols' })
	name: string;

	@IsString({})
	@MinLength(12, { message: 'Min length 12 symbols' })
	email: string;

	@IsString({})
	@MinLength(8, { message: 'Min password length is 8 symbols' })
	password: string;
}

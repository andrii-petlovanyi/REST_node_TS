import { IsEmail, IsString, MinLength } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Wrong format email' })
	@MinLength(7, { message: 'Min length is 7 symbols' })
	email: string;

	@IsString({})
	@MinLength(3, { message: 'Min length 3 symbols' })
	name: string;

	@IsString({})
	@MinLength(8, { message: 'Min password length is 8 symbols' })
	password: string;
}

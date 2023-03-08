import { IsString, IsOptional, IsNotEmpty, Length } from 'class-validator';

export class UpdateMoviesDto {
  @IsNotEmpty({ message: 'Compo name nao pode estar vazio' })
  @IsString()
  @IsOptional()
  @Length(2, 161)
  name: string;

  @IsNotEmpty({ message: 'Compo gênero nao pode estar vazio' })
  @IsString()
  @IsOptional()
  genre: string;

  @IsNotEmpty({ message: 'Compo autor nao pode estar vazio' })
  @IsString()
  @IsOptional()
  author: string;

  @IsNotEmpty({ message: 'Compo duração nao pode estar vazio' })
  @IsString()
  @IsOptional()
  duration: string;
}

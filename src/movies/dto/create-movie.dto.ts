import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty({ message: 'Compo name nao pode estar vazio' })
  @IsString()
  @Length(2, 161)
  name: string;

  @IsNotEmpty({ message: 'Compo gênero nao pode estar vazio' })
  @IsString()
  genre: string;

  @IsNotEmpty({ message: 'Compo duração nao pode estar vazio' })
  @IsString()
  duration: string;

  @IsNotEmpty({ message: 'Compo autor nao pode estar vazio' })
  @IsString()
  author: string;
}

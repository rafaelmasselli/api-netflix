import { Movie } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMoviesDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private database: PrismaService) {}

  async create(data: CreateMovieDto): Promise<Movie> {
    const movie = await this.database.Movie.create({ data: data });
    return movie;
  }

  async findAll(): Promise<Movie[]> {
    const moviesALL = await this.database.Movie.findMany();
    return moviesALL;
  }

  async findOne(id: string): Promise<Movie> {
    const movies = await this.database.Movie.findUnique({
      where: { id },
    });
    if (!movies) {
      throw new NotFoundException('movie nao encontrado');
    }
    return movies;
  }

  async update(id: string, UpdateMovieDto: UpdateMoviesDto): Promise<Movie> {
    const movie = await this.database.Movie.update({
      data: UpdateMovieDto,
      where: { id },
    });
    return movie;
  }

  async remove(id: string): Promise<{ message: string }> {
    const movies = await this.database.Movie.findUnique({
      where: { id },
    });
    if (!movies) {
      throw new NotFoundException('O filme nao foi encontrado');
    } else {
      await this.database.Movie.delete({
        where: { id },
      });
    }
    return { message: 'filme deletado com sucesso' };
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMoviesDto } from './dto/update-movie.dto';
import { Movie } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @UseGuards(AuthGuard())
  @Post()
  create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.MoviesService.create(createMovieDto);
  }
  @UseGuards(AuthGuard())
  @Get()
  findAll(): Promise<Movie[]> {
    return this.MoviesService.findAll();
  }
  @UseGuards(AuthGuard())
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Movie> {
    return this.MoviesService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMoviesDto: UpdateMoviesDto,
  ): Promise<Movie> {
    return this.MoviesService.update(id, updateMoviesDto);
  }

  @UseGuards(AuthGuard())
  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.MoviesService.remove(id);
  }
}

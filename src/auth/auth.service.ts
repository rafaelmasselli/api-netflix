import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Credentials } from './dto/credentials.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private database: PrismaService, private jwt: JwtService) {}

  async login(loginD: Credentials) {
    const usuario = await this.database.user.findUnique({
      where: { email: loginD.email },
    });
    if (!usuario) {
      throw new NotFoundException('Usuario nao cadastrado');
    }
    const Pass = await bcrypt.compare(loginD.password, usuario.password);

    if (Pass) {
      const payload = {
        email: loginD.email,
      };
      const token = await this.jwt.sign(payload);
      return { message: 'usuario logado com sucesso', token };
    } else {
      throw new UnauthorizedException('Login invalido');
    }
  }
}

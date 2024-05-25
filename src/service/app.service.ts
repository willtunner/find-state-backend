import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<{ id: number, name: string }[]> {
    return this.httpService.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .pipe(
        map((response: AxiosResponse<any>) => {
          return response.data.map((estado: any) => ({
            id: estado.id,
            name: estado.nome
          }));
        })
      );
  }
}

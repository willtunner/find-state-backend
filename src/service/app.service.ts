import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { State } from 'src/model/state.entity';
import { encryptName } from 'src/utils/encrypt.util';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<State[]> {
    return this.httpService.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .pipe(
        map((response: AxiosResponse<any>) => {
          const states = response.data.map((estado: any) => ({
            id: estado.id,
            name: encryptName(estado.nome)
          }));
          states.sort((a, b) => a.name.localeCompare(b.name));
          return states;
        })
      );
  }
}

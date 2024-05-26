# Teste Técnico Back-end 

### (Consumir api do ibge que retorna estados )
> Api simples criada em nest.js que consume api publica do Ibge: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados' do tipo GET através de um serviço onde para cada estado ele encriptografa o nome do estado antes de enviar para o front 
> 

### Imagem do projeto
<div align="center">
  <img src="/img/01.png" width="30%">
</div>

### Como usar

```ini
  - Certifique de que o node esteja insalado v20^, ou baixe 'https://nodejs.org/'
  - Certifique se o Nest está instalado, ou instale usando 'npm install --save @nestjs/core @nestjs/common rxjs' 
  (este comando instalará o pacote principal do Nest.js (@nestjs/core), os módulos comuns (@nestjs/common) e a dependência rxjs.)
  - Baixe o projeto aqui no github e descompacta
  - Abra a pasta do projeto e instale a dependencias utilizando 'npm install'
  - Executa o código 'npm run start:dev' no terminal para iniciar o projeto.
```


Api executada no seguinte path:

- `http://localhost:3000/states`


Api tem somente 1 end-point

- `GET /states`: Retorna todos os estados com nome criptografado.

Função  que retorna os dados:
```typescript
findAll(): Observable<State[]> {
return this.httpService.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados') // Aqui, é feita uma solicitação HTTP GET usando o serviço HTTP fornecido pelo NestJS para a URL fornecida.
.pipe(
map((response: AxiosResponse<any>) => { // Aqui, é feita uma solicitação HTTP GET usando o serviço HTTP fornecido pelo NestJS para a URL fornecida.
const states = response.data.map((estado: any) => ({ //  Para cada estado na resposta, um novo objeto State é criado com os campos id e name, onde name é criptografado usando a função encryptName.
id: estado.id,
name: encryptName(estado.nome) 
}));
states.sort((a, b) => a.name.localeCompare(b.name)); // Após o mapeamento, o array de estados é ordenado alfabeticamente com base nos nomes dos estados.
return states;
})
);
}
```

Retorno dos dados para o front-end:

```json
[
     {
        "id": 12,
        "name": "Dfuh"
    },
    {
        "id": 27,
        "name": "Dodjrdv"
    },
    {
        "id": 13,
        "name": "Dpd2rqdv"
    }
]
```

### Technologies used:
 ![Nest.js](https://img.shields.io/badge/Nest.js-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-%23000000.svg?style=for-the-badge&logo=axios&logoColor=white)  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)






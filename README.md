# express-example
## Como Usar
- Primero tener instalado Docker y Docker compose
- entrar a la carpeta y ejecutar docker-compose up
acceder desde el puerto 8080
## Uso
- ruta /users
- get: lista usuarios agregados
- post: parametros name, email ambos string

## Tests
- docker exec -it [Container-ID] /bin/bash
- npm test

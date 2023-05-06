# &#9889; Atividades de Fixação & Exercícios | Bloco 19 - Dia 03 (Seção 01)

## Exercício 01 - Missão Trybe

#### 1. Crie um arquivo HTML chamado `missao_trybe.html` que tenha a estrutura abaixo.
- Tag `<title>` com o seguinte texto “Trybe”;
- Tag `<h1>` com o seguinte texto “Missão da Trybe”;
- Tag `<p>` com o seguinte texto “Gerar oportunidade para pessoas”;
- Salve o arquivo em qualquer lugar da sua máquina com a extensão html.
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <title>Trybe</title>
  <h1>Missão da Trybe</h1>
  <p>Gerar oportunidade para pessoas</p>
</body>
</html>
```

#### 2. Crie um container para manter um servidor `httpd:2.4` Apache e vincule sua porta interna com a `porta 4545` da sua máquina local.
```
docker run -d --name trybe-mission -p 4545:80 -v "$(pwd):/usr/local/apache2/htdocs" httpd:2.4
```

#### 3. Após criar o container acesse a página HTML que está rodando no servidor em seu browser.
R.: No browser, acessar a URL `http://localhost:4545/missao_trybe.html` para verificar se aparece o conteúdo do arquivo HTML criado no passo 1.

#### 4. Acesse o arquivo `missao_trybe.html` e acrescente a tag `<p>` com o seguinte texto “Nosso negócio é GENTE! #VQV”.
```
<p>Nosso negócio é GENTE! #VQV</p>
```
- Ao atualizar a página `http://localhost:4545/missao_trybe.html`, verificaremos que o novo texto inserido estará lá.

#### 5. Obtenha o `id` do container `httpd:2.4`.
```
docker container ls -a

<!-- Retorno... -->
CONTAINER ID   IMAGE                 COMMAND                  CREATED          STATUS                      PORTS                                   NAMES
77f5a6cfff0a   httpd:2.4             "httpd-foreground"       16 minutes ago   Up 16 minutes               0.0.0.0:4545->80/tcp, :::4545->80/tcp   trybe-mission
```

#### 6. Obtenha o `Mounts` através da propriedade `Source` que deve mostrar o volume desse container no Docker Host.
```
docker container inspect trybe-mission

<!-- Retorno... -->
[...]
"Mounts": [
            {
                "Type": "bind",
                "Source": "/home/gui/Trybe/trybe-exercicios/modulo-03-back-end/bloco-19-secao-01_docker-utilizando-containers/dia-03_orquestrando-containers-docker-compose/exercise-trybe-mission",
                "Destination": "/usr/local/apache2/htdocs",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
[...]
```

#### 7. Agora pare o container `httpd:2.4`.
```
docker container stop trybe-mission
```

#### 8. Exclua o seu container.
```
docker container rm trybe-mission
```

#### 9. Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar.
```
pwd

<!-- Retorno... -->
/home/gui/Trybe/trybe-exercicios/modulo-03-back-end/bloco-19-secao-01_docker-utilizando-containers/dia-03_orquestrando-containers-docker-compose/exercise-trybe-mission
```
```
ls

<!-- Retorno... -->
missao_trybe.html
```

#### 10. Obtenha o `IMAGE ID` do servidor.
```
docker images

<!-- Retorno... -->
REPOSITORY            TAG             IMAGE ID       CREATED          SIZE
httpd                 2.4             d16a51d08814   9 days ago       145MB
```

#### 11. Depois de obter o `IMAGE ID`, exclua a imagem.
```
docker rmi d16a51d08814
```
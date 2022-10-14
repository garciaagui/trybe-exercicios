# &#9889; Atividades de Fixação & Exercícios | Bloco 19 - Dia 01 (Seção 01)

### 1. No Docker Hub, utilizando a caixa de busca, busque pela imagem da Distribuição Linux Debian.
R. Apenas pesquisa da imagem **debian** no Docker Hub...

### 2. Uma vez que encontrar a imagem oficial, acesse-a e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um contêiner para isso.
```
docker pull debian
```

### 3. Baixe a imagem utilizando a **tag: stable-slim**, que é uma versão reduzida da distribuição.
```
docker pull debian:stable-slim
```

### 4. Após baixar a imagem para seu computador local, crie e execute um contêiner no modo **interativo** utilizando essa imagem como referência.
```
docker container run -it --name docker-exercise debian:stable-slim
```

### 5. No terminal, você deve conseguir rodar o comando **cat /etc/*-release**, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do contêiner.
```
cat /etc/*-release

<!-- Retorno... -->
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```

### 6. Encerre o terminal.
```
exit
```

### 7. Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.
```
docker container ls -a

<!-- Retorno... -->
CONTAINER ID   IMAGE                 COMMAND                  CREATED              STATUS                     PORTS     NAMES
2046bde82cc3   debian:stable-slim    "bash"                   About a minute ago   Exited (0) 4 seconds ago             docker-exercise
```

### 8. Inicie o mesmo contêiner novamente, sem criar outro. Valide se ele está ativo na lista de contêiners.
```
docker container start docker-exercise
docker container ls -a

<!-- Retorno... -->
CONTAINER ID   IMAGE                 COMMAND                  CREATED         STATUS                    PORTS     NAMES
2046bde82cc3   debian:stable-slim    "bash"                   2 minutes ago   Up 2 seconds                        docker-exercise
```

### 9. Retome o contêiner que foi criado anteriormente neste exercício.
```
docker attach docker-exercise
```

### 10. Rode o comando **cat /etc/debian_version** que deve retornar a versão atual do sistema do contêiner.
```
cat /etc/*-release

<!-- Retorno... -->
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```

### 11. Encerre o terminal.
```
exit
```

### 12. Remova somente o contêiner criado para esse exercício.
```
docker container rm docker-exercise
```

### 13. (BÔNUS) Crie e rode de modo interativo em modo ‘Cleanup’, a imagem **andrius/ascii-patrol**.
```
docker run -it --rm andrius/ascii-patrol
```

### 14. (BÔNUS) Encerre o contêiner utilizando os botões [ctrl] + [c].
  
  R. Apenas utilizar o comando **clear** para limpar a tela.

# Exercícios | Bloco 01 - Dia 03

## Parte 01 - Criação de arquivos e diretórios

#### Roteiro & Resolução

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
R.:
```
mkdir unix_tests
cd unix_tests/
```
2. Crie um arquivo de texto com o nome trybe.txt.
R.:
```
touch trybe.txt
```
3. Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.
R.:
```
cp trybe.txt trybe_backup.txt
```
4. Renomeie o arquivo trybe.txt.
R.:
```
mv trybe.txt trybe1.txt
```
5. Dentro de unix_tests, crie um novo diretório chamado backup.
R.:
```
mkdir backup
```
6. Mova o arquivo trybe_backup.txt para o diretório backup.
R.:
```
mv trybe_backup.txt backup
```
7. Dentro de unix_tests, crie um novo diretório chamado backup2.
R.:
```
mkdir backup2
```
8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.
R.:
```
mv trybe_backup.txt ..
cd ..
mv trybe_backup.txt backup2
```
9. Apague a pasta backup.
R.:
```
rmdir backup
```
10. Renomeie a pasta backup2 para backup.
R.:
```
mv backup2 backup
```
11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
R.:
```
pwd
ls
```
12. Apague o diretório backup.
R.:
```
rm -rf backup/
```
- Fora utilizado a flag -rf pois o diretório backup/ possuía um arquivo. Caso contrário, o comando rmdir funcionaria.
- O "r" da flag simboliza recursividade, ou seja, força a exclusão do diretório e do seu respectivo conteúdo.
- Já o "f" da flag indica que a execução é forçada e não demanda nenhuma confirmação.
13. Limpe o terminal.
R.:
```
clear
```

- Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt:
```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

14. Mostre na tela as 5 primeiras skills do arquivo skills.txt.
R.:
```
head -5 skills.txt
```
15. Mostre na tela as 4 últimas skills do arquivo skills.txt.
R.:
```
tail -4 skills.txt
```
16. Apague todos os arquivos que terminem em .txt.
R.:
```
rm *.txt
```
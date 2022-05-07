# Exercícios | Bloco 01 - Dia 03

## Parte I - Criação de arquivos e diretórios

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
```
mkdir unix_tests
cd unix_tests/
```
2. Crie um arquivo de texto com o nome trybe.txt.
```
touch trybe.txt
```
3. Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.
```
cp trybe.txt trybe_backup.txt
```
4. Renomeie o arquivo trybe.txt.
```
mv trybe.txt trybe1.txt
```
5. Dentro de unix_tests, crie um novo diretório chamado backup.
```
mkdir backup
```
6. Mova o arquivo trybe_backup.txt para o diretório backup.
```
mv trybe_backup.txt backup
```
7. Dentro de unix_tests, crie um novo diretório chamado backup2.
```
mkdir backup2
```
8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.
```
mv trybe_backup.txt ..
cd ..
mv trybe_backup.txt backup2
```
9. Apague a pasta backup.
```
rmdir backup
```
10. Renomeie a pasta backup2 para backup.
```
mv backup2 backup
```
11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
```
pwd
ls
```
12. Apague o diretório backup.
```
rm -rf backup/
```
_Explicações..._
- Fora utilizado a flag -rf pois o diretório backup/ possuía um arquivo. Caso contrário, o comando rmdir funcionaria.
- O "r" da flag simboliza recursividade, ou seja, força a exclusão do diretório e do seu respectivo conteúdo.
- Já o "f" da flag indica que a execução é forçada e não demanda nenhuma confirmação.
13. Limpe o terminal.
```
clear
```

**Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt:**
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
```
head -5 skills.txt
```
15. Mostre na tela as 4 últimas skills do arquivo skills.txt.
```
tail -4 skills.txt
```
16. Apague todos os arquivos que terminem em .txt.
```
rm *.txt
```

## Parte II - Manipulação & Busca

1. Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
```
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```
2. Mostre todo o conteúdo do arquivo countries.txt na tela.
```
cat countries.txt
```
3. Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.
```
less countries.txt
```
_Explicações..._
- O comando less mostra o conteúdo conforme as dimensões atuais da janela do terminal.
- Ao executá-lo, o terminal entra em um modo de exibição e é possível navegar pelo conteúdo teclando "espaço".
- Para sair desse modo, é preciso teclar "Q".
- Se utilizássemos o comando cat, o conteúdo seria exibido por completo e o terminal não entraria em modo de exibição.
4. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
```
less countries.txt
/Zambia
```
_Explicações..._
- Novamente, utilizaremos o comando less, mas para encontrar o país rapidamente, aplicaremos "/Zambia" no modo de exibição.
5. Busque por Brazil no countries.txt.
```
grep 'Brazil' countries.txt
```
6. Busque novamente por brazil, mas agora utilizando o lower case.
```
grep -i 'brazil' countries.txt
```
_Explicações..._
- Como o comando grep é case sensitive, a flag -i possibilitará resultados que estão em caixa alta e baixa.

**Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.**
```
cat > phrases.txt
Whats does the fox say?
Nothing is true everything is permitted        
Break a leg  	
All roads lead to Rome                               
Shoot someone's fox
Procrastination is the thief of time
Rules were made to be broken
The work praises the man
False friends are worse than open enemies
Better to remain silent and be thought a fool than to speak and remove all doubt
```

7. Busque pelas frases que não contenham a palavra fox.
```
grep -iv 'fox' phrases.txt
```
_Explicações..._
- A flag -iv permitirá a busca pelo conteúdo que não contém intervalos ou palavaras indesejados.
8. Conte o número de palavras do arquivo phrases.txt.
```
wc -w phrases.txt
```
_Explicações..._
- Originalmente, o comando wc retorna o número de linhas, palavras e caracteres - nesta ordem.
- Ao aplicar a flag -w, limitamos o retorno a apenas o número de palavras.
9. Conte o número de linhas do arquivo phrases.txt.
```
wc -l phrases.txt
```
_Explicações..._
- Mesma lógica da questão anterior - só que agora aplicando uma flag que retorna somente o número de linhas.
10. Crie os arquivos empty.tbt e empty.pdf.
```
touch empty.tbt empty.pdf
```
11. Liste todos os arquivos do diretório unix_tests.
```
ls
```
12. Liste todos os arquivos que terminem com txt.
```
ls *.txt
```
13. Liste todos os arquivos que terminem com tbt ou txt.
```
ls *.tbt *.txt
```
14. Acesse o manual do comando ls.
```
man ls
```
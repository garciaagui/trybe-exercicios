# Exercícios | Bloco 01 - Dia 04

Obs.: Como algumas pastas e arquivos criados no dia 03 serão revisitados, criei uma cópia da pasta do dia 03.

## Parte I - Comandos de Input e Output

1. Navegue até a pasta *unix_tests*.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02$ cd unix_tests/
```

2. Crie um arquivo texto pelo terminal com o nome *skills2.txt* e adicione os valores "Internet, Unix e Bash", um em cada linha.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ cat > skills2.txt
Internet
Unix
Bash
```

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ cat >> skills2.txt 
Git
GitHub
HTML
CSS
JavaScript
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ sort skills2.txt | cat
Bash
CSS
Git
GitHub
HTML
Internet
JavaScript
Unix
```

4. Conte quantas linhas tem o arquivo *skills2.txt*.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ wc -l skills2.txt 
8 skills2.txt
```

5. Crie um arquivo chamado *top_skills.txt* usando o *skills2.txt*, contendo as 3 primeiras skills em ordem alfabética.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ sort skills2.txt | head -3 | cat > top_skills.txt
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ cat top_skills.txt 
Bash
CSS
Git
```

6. Crie um novo arquivo chamado *phrases2.txt* pelo terminal e adicione algumas frases de sua escolha.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ cat > phrases2.txt
People who live in glass houses shouldn’t throw stones  
Necessity is the mother of invention
Don’t bite the hand that feeds you
When in Rome, do as the Romans do
Cheese, wine, and friends must be old to be good              
Doubt is the beginning, not the end, of wisdom
Good talk saves the food
Learn a language, and you will avoid a war
One kind word can warm three winter months
Sticks and stones may break my bones, but words will never hurt me 
```

7. Conte o número de linhas que contêm as letras "br".
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ grep -ic 'br' phrases2.txt 
1
```
*Explicações...*
- Graças à flag -ic, é possível retornar o número de linhas nas quais o intervalo pode ser encontrado, independentemente se o intervalo está em caixa alta ou baixa.

8. Conte o número de linhas que não contêm as letras "br".
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ grep -ivc 'br' phrases2.txt 
9
```
*Explicações...*
- Acrescentamos o "v" na flag, o que permitirá o retorno do número de linhas que não contém o intervalo em questão.

9. Adicione dois nomes de países ao final do arquivo *phrases2.txt*.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ cat >> phrases2.txt 
Mónaco
Liechtenstein
```

10. Crie um novo arquivo chamado *bunch_of_things.txt* com os conteúdos dos arquivos *phrases2.txt* e *countries.txt*.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ cat phrases2.txt countries.txt > bunch_of_things.txt
```
*Explicações...*
- Por conta do tamanho do conteúdo do arquivo criado, inseri somente a linha de código de sua criação.

11. Ordene o arquivo *bunch_of_things.txt*.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ sort bunch_of_things.txt 
```
*Explicações...*
- Por conta do tamanho do conteúdo do arquivo criado, inseri somente a linha de código de sua ordenação.
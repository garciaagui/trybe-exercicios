# Exercícios | Bloco 01 - Dia 04

Observação: Como algumas pastas e arquivos criados no dia 03 serão revisitados, criei uma cópia da pasta do dia 03.

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

7. Conte o número de linhas que contém as letras "br".
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

## Parte II - Permissões

1. Navegue até a pasta *unix_tests*;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02$ cd unix_tests/
```

2. Rode o comando *ls -l* e veja quais as permissões dos arquivos;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ ls -l
total 24
-rw-rw-r-- 1 gui gui 2303 mai  7 21:00 bunch_of_things.txt
-rw-rw-r-- 1 gui gui 1842 mai  7 20:07 countries.txt
-rw-rw-r-- 1 gui gui    0 mai  7 20:07 empty.pdf
-rw-rw-r-- 1 gui gui    0 mai  7 20:07 empty.tbt
-rw-rw-r-- 1 gui gui  461 mai  7 20:59 phrases2.txt
-rw-rw-r-- 1 gui gui  333 mai  7 20:07 phrases.txt
-rw-rw-r-- 1 gui gui   50 mai  7 20:35 skills2.txt
-rw-rw-r-- 1 gui gui   13 mai  7 20:38 top_skills.txt
```

3. Mude a permissão do arquivo *bunch_of_things.txt* para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando *ls -l*;
> Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ chmod 666 bunch_of_things.txt 
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ ls -l
total 24
-rw-rw-rw- 1 gui gui 2303 mai  7 21:00 bunch_of_things.txt
-rw-rw-r-- 1 gui gui 1842 mai  7 20:07 countries.txt
-rw-rw-r-- 1 gui gui    0 mai  7 20:07 empty.pdf
-rw-rw-r-- 1 gui gui    0 mai  7 20:07 empty.tbt
-rw-rw-r-- 1 gui gui  461 mai  7 20:59 phrases2.txt
-rw-rw-r-- 1 gui gui  333 mai  7 20:07 phrases.txt
-rw-rw-r-- 1 gui gui   50 mai  7 20:35 skills2.txt
-rw-rw-r-- 1 gui gui   13 mai  7 20:38 top_skills.txt
```
_Explicações..._
- Recorri ao modo ocutal para alterar as permissões.

4. Tire a permissão de escrita do arquivo *bunch_of_things.txt* para todos os usuários, verifique se está correto com o comando *ls -l*;
> Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ chmod a-w bunch_of_things.txt 
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ ls -l
total 24
-r--r--r-- 1 gui gui 2303 mai  7 21:00 bunch_of_things.txt
-rw-rw-r-- 1 gui gui 1842 mai  7 20:07 countries.txt
-rw-rw-r-- 1 gui gui    0 mai  7 20:07 empty.pdf
-rw-rw-r-- 1 gui gui    0 mai  7 20:07 empty.tbt
-rw-rw-r-- 1 gui gui  461 mai  7 20:59 phrases2.txt
-rw-rw-r-- 1 gui gui  333 mai  7 20:07 phrases.txt
-rw-rw-r-- 1 gui gui   50 mai  7 20:35 skills2.txt
-rw-rw-r-- 1 gui gui   13 mai  7 20:38 top_skills.txt

```
_Explicações..._
- Neste caso, recorri ao método literal.

5. Volte à permissão do arquivo *bunch_of_things.txt* para a listada inicialmente utilizando o comando *chmod 644 bunch_of_things.txt*.
> Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ chmod 664 bunch_of_things.txt
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ ls -l
total 24
-rw-rw-r-- 1 gui gui 2303 mai  7 21:00 bunch_of_things.txt
-rw-rw-r-- 1 gui gui 1842 mai  7 20:07 countries.txt
-rw-rw-r-- 1 gui gui    0 mai  7 20:07 empty.pdf
-rw-rw-r-- 1 gui gui    0 mai  7 20:07 empty.tbt
-rw-rw-r-- 1 gui gui  461 mai  7 20:59 phrases2.txt
-rw-rw-r-- 1 gui gui  333 mai  7 20:07 phrases.txt
-rw-rw-r-- 1 gui gui   50 mai  7 20:35 skills2.txt
-rw-rw-r-- 1 gui gui   13 mai  7 20:38 top_skills.txt
```
_Explicações..._
- No meu caso, utilizei um comando diferente do indicado por conta das permissões originais do meu arquivo.

## Parte III - Processos & Jobs

1. Liste todos os processos;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ ps
    PID TTY          TIME CMD
  19894 pts/0    00:00:00 bash
  32578 pts/0    00:00:00 ps
```

2. Agora use o comando *sleep 30 &*.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ sleep 30 &
[1] 32715
```

3. Use a listagem de processos para encontrar o PID do processo que está executando o comando *sleep 30* e termine a sua execução ~(mate o processo)~.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ ps
    PID TTY          TIME CMD
  19894 pts/0    00:00:00 bash
  32715 pts/0    00:00:00 sleep
  32716 pts/0    00:00:00 ps
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ kill 32715
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ ps
    PID TTY          TIME CMD
  19894 pts/0    00:00:00 bash
  32718 pts/0    00:00:00 ps
[1]+  Terminado               sleep 30
```

4. Execute novamente o comando *sleep 30*, mas agora sem o *&*. Depois, faça com que ele continue executando em background.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ sleep 30
^Z
[1]+  Parado                  sleep 30
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ jobs
[1]+  Parado                  sleep 30
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ bg %1
[1]+ sleep 30 &
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ jobs
[1]+  Executando              sleep 30 &
```
_Explicações..._
- Para suspender a execução do processo, foi necessário utilizar o atalho "CTRL + Z".
- O número após o "%" pode ser encontrado nos "[ ]" (podendo ser revisto ao utilizar o comando jobs), e simboliza em qual ordem dos processos executados e/ou suspensos cada processo se encontra.
- Caso houvesse outro processo em execução ou suspenso, este teria o número "2" em seus "[ ]".

5. Crie um processo em background que rode o comando *sleep* por 300 segundos.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ sleep 300 &
[2] 33097
[1]   Concluído              sleep 30
```

6. Crie mais dois processos que rodem o comando *sleep* por 200 e 100 segundos, respectivamente.
> Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ sleep 100
^Z
[3]+  Parado                  sleep 100
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ sleep 200
^Z
[4]+  Parado                  sleep 200
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ jobs
[2]   Executando              sleep 300 &
[3]-  Parado                  sleep 100
[4]+  Parado                  sleep 200
```

7. Verifique que apenas o processo *sleep 300* está em execução com o comando *jobs*. Suspenda a execução desse processo.
> Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ jobs
[2]   Executando              sleep 300 &
[3]-  Parado                  sleep 100
[4]+  Parado                  sleep 200
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ fg %2
sleep 300
^Z
[2]+  Parado                  sleep 300
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ jobs
[2]+  Parado                  sleep 300
[3]   Parado                  sleep 100
[4]-  Parado                  sleep 200
```

8. Retome a execução do processo *sleep 100* em background com o comando *bg*.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ bg %3
[3] sleep 100 &
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ jobs
[2]+  Parado                  sleep 300
[3]   Executando              sleep 100
[4]-  Parado                  sleep 200
```

9. Termine a execução de todos os processos *sleep* ~(mate os processos)~.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ sleep 300 &
[1] 33373
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ sleep 200 &
[2] 33383
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ kill 33373
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ jobs
[1]-  Terminado               sleep 300
[2]+  Executando              sleep 200 &
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ kill 33383
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ jobs
[2]+  Terminado               sleep 200
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-01_unix-bash/dia-04_unix-bash-parte-02/unix_tests$ 
```
_Explicações..._
- São processos diferentes (em PID) dos utilizados anteriormente, mas eles são suficientes para concluir e entnder a essência da questão.
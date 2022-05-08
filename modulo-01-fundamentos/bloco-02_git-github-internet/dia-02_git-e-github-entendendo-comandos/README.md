# Exercícios | Bloco 02 - Dia 02

## Parte prática

Observação: toda vez que o exercício referenciar "arquivo .txt", leia-se *trybe-skills.txt*.

1. Navegue até a raiz do projeto com o arquivo *.txt*;
```
gui@gui-desktop:~/Trybe/trybe-exercicios$ cd modulo-01-fundamentos/
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos$ cd bloco-02_git-github-internet/
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet$ cd dia-02_git-e-github-entendendo-comandos/
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ ls
trybe-skills.txt

```

2. Verifique se não existe nada sem "commitar" utilizando *git status*:
- Caso exista algo, verifique se é necessário e faça o *commit*, ou remova-o.
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git status
No ramo master
nothing to commit, working tree clean
```

3. Crie uma nova branch com o nome *trybe-skills-changes* e faça *checkout* nela;
```
gui@gui-desktop:~/Trybe/trybe-exercicios$ git branch exercicios/2.2-trybe-skills-changes
gui@gui-desktop:~/Trybe/trybe-exercicios$ git checkout exercicios/2.2-trybe-skills-changes
Switched to branch 'exercicios/2.2-trybe-skills-changes'
gui@gui-desktop:~/Trybe/trybe-exercicios$ git branch
  exercicios/1.3
  exercicios/1.4
  exercicios/2.1
  exercicios/2.2-cp-directory
* exercicios/2.2-trybe-skills-changes
```

_Explicações_
- Para fins de organização do repositório, incluí "exercicios/2.2" no nome da branch. O mesmo será feito para outra branch que será criada nos próximos passos.

4. No arquivo *.txt*, ao final da lista de habilidades, adicione mais duas habilidades que serão desenvolvidas na Trybe:
> Exemplo:
> O que eu vou aprender na Trybe:
>
>- Unix
>- Bash
>- Git
>- HTML
>- CSS
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ cat >> trybe-skills.txt 
- JavaScript
- DOM
```

- Faça um *git add nome-do-arquivo.extensao*;
- Você pode adicionar todos os arquivos que você modificou usando *git add .*, mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git add trybe-skills.txt
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git status
No ramo exercicios/2.2-trybe-skills-changes
Mudanças a serem submetidas:
  (use "git restore --staged <file>..." to unstage)
	modified:   trybe-skills.txt
```

- Agora um *git commit -m "Mensagem que você gostaria"*;
- Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, *git commit -m "Adiciona nova skill"*;
- Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git commit -m "Add 2 novas skills em trybe-skills.txt - branch trybe-skills-changes"
[exercicios/2.2-trybe-skills-changes d1d4897] Add 2 novas skills em trybe-skills.txt - branch trybe-skills-changes
 1 file changed, 2 insertions(+)
```

- E por último um *git push -u origin trybe-skills-changes*;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git push -u origin exercicios/2.2-trybe-skills-changes
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 12 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 564 bytes | 564.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: 
remote: Create a pull request for 'exercicios/2.2-trybe-skills-changes' on GitHub by visiting:
remote:      https://github.com/garciaagui/trybe-exercicios/pull/new/exercicios/2.2-trybe-skills-changes
remote: 
To github.com:garciaagui/trybe-exercicios.git
 * [new branch]      exercicios/2.2-trybe-skills-changes -> exercicios/2.2-trybe-skills-changes
Branch 'exercicios/2.2-trybe-skills-changes' set up to track remote branch 'exercicios/2.2-trybe-skills-changes' from 'origin'.
```

5. Abra um Pull Request com uma descrição detalhada:
- Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: "Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi...";
- O merge deve ser feito apenas quando chegar no exercício 10.

_Explicações..._
- Etapa realizada integralmente no GitHub.

6. Retorne para a branch principal, master, com o comando: *git checkout master*;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git checkout master
Switched to branch 'master'
```

7. Verifique que você está na branch master, com o comando: *git branch* (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git branch 
  exercicios/1.3
  exercicios/1.4
  exercicios/2.1
  exercicios/2.2-cp-directory
  exercicios/2.2-trybe-skills-changes
* master
```

8. Crie uma nova branch *trybe-skills-updates* a partir da master e faça checkout nela;
```
gui@gui-desktop:~/Trybe/trybe-exercicios$ git branch exercicios/2.2-trybe-skills-updates
gui@gui-desktop:~/Trybe/trybe-exercicios$ git checkout exercicios/2.2-trybe-skills-updates 
Switched to branch 'exercicios/2.2-trybe-skills-updates'
gui@gui-desktop:~/Trybe/trybe-exercicios$ git branch 
  exercicios/1.3
  exercicios/1.4
  exercicios/2.1
  exercicios/2.2-cp-directory
  exercicios/2.2-trybe-skills-changes
* exercicios/2.2-trybe-skills-updates
  master
```

9. No mesmo arquivo *.txt* que você modificou no passo 4, também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
- Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ cat >> trybe-skills.txt 
- HTML 
```

- Faça um *git add nome-do-arquivo.extensao*;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git add trybe-skills.txt 
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git status
No ramo exercicios/2.2-trybe-skills-updates
Mudanças a serem submetidas:
  (use "git restore --staged <file>..." to unstage)
	modified:   trybe-skills.txt
```

- Agora um *git commit -m "Mensagem que você gostaria"*;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git commit -m "Add 1 nova skill em trybe-skills.txt - branch trybe-skills-updates"
[exercicios/2.2-trybe-skills-updates 1eddf97] Add 1 nova skill em trybe-skills.txt - branch trybe-skills-updates
 1 file changed, 1 insertion(+)
```

- e por último um *git push -u origin trybe-skills-updates*;
- Após o primeiro "push" da sua branch, você pode usar apenas o comando *git push*;
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-02_git-e-github-entendendo-comandos$ git push -u origin exercicios/2.2-trybe-skills-updates
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 12 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 553 bytes | 553.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: 
remote: Create a pull request for 'exercicios/2.2-trybe-skills-updates' on GitHub by visiting:
remote:      https://github.com/garciaagui/trybe-exercicios/pull/new/exercicios/2.2-trybe-skills-updates
remote: 
To github.com:garciaagui/trybe-exercicios.git
 * [new branch]      exercicios/2.2-trybe-skills-updates -> exercicios/2.2-trybe-skills-updates
Branch 'exercicios/2.2-trybe-skills-updates' set up to track remote branch 'exercicios/2.2-trybe-skills-updates' from 'origin'.
```

- Abra um Pull Request com uma descrição amigável:
- O merge deve ser feito apenas quando chegar no exercício 10;

_Explicações..._
- Etapa realizada integralmente no GitHub.

10. Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master, através do Pull Request:
- Primeiro, vá até a página do primeiro Pull Request (**branch trybe-skills-changes**) e faça o merge clicando no botão verde "Merge pull request";
- Agora, vá até página do outro Pull Request (**branch trybe-skills-updates**) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;
- Você terá que resolver esse conflito antes de "mergear" o Pull Request. Clique no botão "Resolve conflicts", escolha uma das duas versões do texto (**lembre-se de apagar as linhas com <<<<<<< e >>>>>>>**, elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge";
- Agora você deve conseguir "mergear" seu Pull Request normalmente.

_Explicações..._
- Etapas realizadas integralmente no GitHub.
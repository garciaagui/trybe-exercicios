# Exercícios | Bloco 02 - Dia 01

- Os exercícios propostos nas **partes 1, 2, 3 e 5** envolvem basicamente instalação e configuração do Git e GitHub. Portanto, decidi não colocá-los aqui.
- O exercício da **parte 4** é bem simples, mas como ele será reaproveitado no próximo dia, irei registrá-lo ocultando alguns passos, tendo em vista que sua proposta inicial é demonstrar o caminho do git init ao git push.

## Parte 4 - O seu repositório no GitHub
1. Para podermos simular um exercício feito, você criará um arquivo .txt com um nome de sua escolha (Exemplo: trybe-skills.txt) e utilizará o conteúdo abaixo:
> O que eu vou aprender na Trybe:
>
> - Unix
> - Bash
> - Git
```
gui@gui-desktop:~/Trybe/trybe-exercicios/modulo-01-fundamentos/bloco-02_git-github-internet/dia-01_git-e-github-o-que-é-e-para-que-serve$ cat > trybe-skills.txt
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```

2. *Simplificado* - Execute os comandos *git add .*, *git commit -m "mensagem"* e *git push*.
```
gui@gui-desktop:~/Trybe/trybe-exercicios$ git add .
gui@gui-desktop:~/Trybe/trybe-exercicios$ git status
No ramo exercicios/2.1
Your branch is up to date with 'origin/exercicios/2.1'.

Mudanças a serem submetidas:
  (use "git restore --staged <file>..." to unstage)
	modified:   "modulo-01-fundamentos/bloco-02_git-github-internet/dia-01_git-e-github-o-que-\303\251-e-para-que-serve/README.md"
	new file:   "modulo-01-fundamentos/bloco-02_git-github-internet/dia-01_git-e-github-o-que-\303\251-e-para-que-serve/trybe-skills.txt

gui@gui-desktop:~/Trybe/trybe-exercicios$ git commit -m "Realização da Parte 4 + Alterações no README do dia"
[exercicios/2.1 2f58866] Realização da Parte 4 + Alterações no README do dia
 2 files changed, 30 insertions(+), 6 deletions(-)
 rewrite "modulo-01-fundamentos/bloco-02_git-github-internet/dia-01_git-e-github-o-que-\303\251-e-para-que-serve/README.md" (66%)
 create mode 100644 "modulo-01-fundamentos/bloco-02_git-github-internet/dia-01_git-e-github-o-que-\303\251-e-para-que-serve/trybe-skills.txt"

gui@gui-desktop:~/Trybe/trybe-exercicios$ git push
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 12 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 1.18 KiB | 1.18 MiB/s, done.
Total 7 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:garciaagui/trybe-exercicios.git
   b9465a3..2f58866  exercicios/2.1 -> exercicios/2.1

```
*Explicações*
- Esse exercício é uma abordagem inicial do git init ao git push. Por conta disso, simplifiquei alguns pontos e os reuni em uma única questão.
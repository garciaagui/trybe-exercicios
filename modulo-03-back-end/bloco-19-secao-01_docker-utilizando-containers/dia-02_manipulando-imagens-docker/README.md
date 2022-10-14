# &#9889; Atividades de Fixação & Exercícios | Bloco 19 - Dia 02 (Seção 01)

### 1. Crie um `Dockerfile` utilizando a imagem chuanwen/cowsay.
```
FROM chuanwen/cowsay
```

### 2. Defina um `ENTRYPOINT` para a execução do comando.
```
ENTRYPOINT [ "/usr/games/cowsay" ]
```

### 3. Utilize o `CMD` para definir uma mensagem padrão.
```
CMD ["Hello there :)"]
```
- Visão geral do Dockerfile após os exercícios 1, 2 e 3:
```
FROM chuanwen/cowsay
ENTRYPOINT [ "/usr/games/cowsay" ]
CMD ["Hello there :)"]
```

### 4. Gere uma `build` e execute um container baseado em sua imagem sem passar nenhum comando.
```
docker image build -t cowsay-exercise .
docker container run cowsay-exercise

<!-- Retorno... -->
 ________________
< Hello there :) >
 ----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

### 5. Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção `-l `para listar outros personagens disponíveis e então executar algo como docker container `run cowsay -f dragon-and-cow "VQV TRYBE"`, para exibir um dragão junto com a vaquinha.
```
docker container run cowsay-exercise "Are you good?"

<!-- Retorno... -->
 ________________
< Hello there :) >
 ----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
```
docker container run cowsay-exercise -l

<!-- Retorno... -->

Use of chdir('') or chdir(undef) as chdir() is deprecated at /usr/games/cowsay line 95.
Cow files in /usr/share/cowsay/cows:
apt beavis.zen bong bud-frogs bunny calvin cheese cock cower daemon default
dragon dragon-and-cow duck elephant elephant-in-snake eyes flaming-sheep
ghostbusters gnu head-in hellokitty kiss kitty koala kosh luke-koala
mech-and-cow meow milk moofasa moose mutilated pony pony-smaller ren sheep
skeleton snowman sodomized-sheep stegosaurus stimpy suse three-eyes turkey
turtle tux unipony unipony-smaller vader vader-koala www
```
```
docker container run cowsay-exercise -f dragon-and-cow "VQV TRYBE"
 ___________
< VQV TRYBE >
 -----------
                       \                    ^    /^
                        \                  / \  // \
                         \   |\___/|      /   \//  .\
                          \  /O  O  \__  /    //  | \ \           *----*
                            /     /  \/_/    //   |  \  \          \   |
                            @___@`    \/_   //    |   \   \         \/\ \
                           0/0/|       \/_ //     |    \    \         \  \
                       0/0/0/0/|        \///      |     \     \       |  |
                    0/0/0/0/0/_|_ /   (  //       |      \     _\     |  /
                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\.-~       /   /
                             ,-}        _      *-.|.-~-.           .~    ~
            \     \__/        `/\      /                 ~-. _ .-~      /
             \____(oo)           *.   }            {                   /
             (    (--)          .----~-.\        \-`                 .~
             //__\\  \__ Ack!   ///.----..<        \             _ -~
            //    \\               ///-._ _ _ _ _ _ _{^ - - - - ~
```
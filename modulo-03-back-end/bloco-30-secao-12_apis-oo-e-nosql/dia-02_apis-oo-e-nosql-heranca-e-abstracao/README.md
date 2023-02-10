# ⚡ Atividades de Fixação & Exercícios | Bloco 30 - Dia 01 (Seção 12)

## ✅ Exercícios do dia

1. O que é e para que servem os Padrões de Projeto (_Design Patterns_)? Quais são as três classificações/categorizações/famílias deles?

✍️ **Resposta**: Padrões de projeto são soluções convencionais para problemas comuns em projetos de software. Ao longo dos anos, percebeu-se que existem formas similares de resolver um mesmo problema, quando estamos construindo um software. Estas podem variar de formas similares no gerenciamento de uma conexão com o banco de dados ou até mesmo no gerenciamento de estado de uma variável.

Na tradução literal de Design Patterns, pode-se subentender que é algo a ser levado à risca. Mas você não pode apenas encontrar um padrão e copiá-lo para dentro do seu programa. O padrão não é um pedaço de código específico, mas um conceito geral, uma ideia, uma filosofia, para resolver um problema em particular. Por isso nem sempre um padrão, por si só, irá resolver seu problema e, além disso, cada um tem uma serventia bem particular, podendo ser facilmente mesclados.

Podemos categorizar os padrões em três famílias: Padrões criacionais, estruturais e comportamentais.

2. Dentro da família de padrões criacionais, descreva o “Problema a ser solucionado” e o “Propósito” dos padrões Singleton e Factory Method

✍️ **Resposta**:

`Singleton`: Imagine que temos um recurso que só pode ser instanciado uma vez e que ele deve estar acessível em sua aplicação. Exemplos: música de um jogo e a conexão com banco de dados. Esses são recursos que só precisam ser instanciados uma única vez e, depois disso, precisamos apenas pegar essa instância ativa e usá-la (instanciar várias vezes a conexão com o banco de dados ou uma música em um jogo podem derrubar o servidor). Daí surge o padrão denominado Singleton, um padrão de projeto que permite a você garantir que uma classe tenha apenas uma única instância, enquanto provê um ponto de acesso global para essa instância.

`Factory Method`: Imagine que tenhamos uma aplicação que provê um tipo de serviço para a pessoa usuária final, por exemplo, cadastro de uma chave de segurança via CPF. Agora imagine que possamos cadastrar novas chaves de segurança, como telefone, e-mail e etc. A maior parte do seu código é acoplada a uma classe, e adicionar novas possibilidades à aplicação exigiria alterações em toda a base de código. Daí surge o padrão denominado Factory Method, um padrão de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

3. Dentro da família de padrões estruturais, descreva o “Problema a ser solucionado” e o “Propósito” dos padrões Adapter e Facade

✍️ **Resposta**:

`Adapter`: Imagine que você esteja escrevendo uma API Node.js com servidor Express.js e arquitetura em camadas. Após finalizar grande parte do projeto, sua equipe se depara com a mudança do framework utilizado, e agora passa a ser utilizado Hapi. Depois de algumas pesquisas, vocês percebem que a mudança maior ficará a cargo do servidor e da camada Controller. Daí surge o padrão denominado Adapter, um padrão de projeto que permite que objetos com interfaces incompatíveis colaborem entre si.

`Facade`: Imagine que você esteja terminando esta API e precise fazer seu código funcionar com um amplo conjunto de objetos que pertencem a uma sofisticada biblioteca ou framework. Normalmente, você precisaria inicializar todos aqueles objetos, rastrear as dependências, executar métodos na ordem correta, e assim por diante, acoplando firmemente toda a lógica de negócio de suas classes. Daí surge o padrão denominado Facade, um padrão de projeto que fornece uma interface simplificada para uma biblioteca, um framework ou qualquer conjunto complexo de classes. Neste caso, ao invés de instanciarmos diretamente os recursos de uma nova biblioteca em nosso código, definimos uma interface que irá mediar (padronizar) a comunicação entre seu código e essa biblioteca. O mesmo é válido se você quiser disponibilizar o seu código para outras pessoas.

4. Dentro da família de padrões comportamentais, descreva o “Problema a ser solucionado” e o “Propósito” dos padrões Strategy e Observer

✍️ **Resposta**:

`Strategy`: Imagine que você esteja construindo um e-commerce e chegou na etapa de decidir quais métodos de pagamento o e-commerce irá aceitar. Diante de tantas opções e a cada momento seu cliente pedindo para você adicionar mais uma forma de pagamento, ou bandeira de cartão e etc., você se depara com um código monstruoso e percebe que várias regras de negócio parecidas estão em lugares diferentes. Em determinado momento, o monstro se tornou algo muito difícil de se manter e, em qualquer mudança, cria-se um bug ou comportamento indesejado. Daí surge o padrão denominado Strategy, que é um padrão de projeto que permite que você defina uma família de algoritmos, coloque-os em classes separadas e faça os objetos deles intercambiáveis.

`Observer`: Imagine que agora o cliente, dono do e-commerce, chegou reclamando que os e-mails de ofertas disparados estão sendo bloqueados e dados como spam. A pessoa proprietária também diz que uma das dores que ela mais observa é o fato de o e-commerce não ter a possibilidade de favoritar produtos, impossibilitando assim seus compradores de observar o status dos produtos desejados. Daí surge o padrão denominado Observer, que permite que você defina um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.

<br/>

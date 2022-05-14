# Exercícios | Bloco 03 - Dia 04

1. Adicione um *cabeçalho* na página contendo o título "Soco a 80km/h: Conheça o Stomatopoda".
```
    <header>
        <h1 id="main-title">Soco a 80 km/h: Conheça o Stomatopoda</h1>
    </header>
```


2. Adicione um conjunto de links que representam a área de *navegação* do site.
- Crie um link chamado Página Inicial.
- Crie um link chamado Sobre.
- Crie um link chamado Contato.
```
    <header>
        <h1 id="main-title">Soco a 80 km/h: Conheça o Stomatopoda</h1>
        <nav>
          <li>
            <a href="#">Página Inicial</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </nav>
    </header>
```

3. Crie um *artigo* que vai conter os fatos interessantes sobre o Stomatopoda. O artigo terá o subtítulo "Fatos sobre o Stomatopoda".
```
<article class="main-content">

    <h2>Fatos sobre o Stomatopoda</h2>

    Odontodactylus scyllarus</em>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad totam nihil quis dolor enim autem tempora hic similique illo possimus minus perferendis, repellat quod aspernatur nisi, natus repellendus eligendi! Maiores alias distinctio consectetur inventore placeat recusandae rerum facere accusamus tempora, nisi praesentium quibusdam magnam, quas repudiandae a vitae voluptate porro consequatur autem, consequuntur velit quis esse et necessitatibus. Enim quos maxime obcaecati officiis esse voluptatibus, ab sit inventore! Corrupti, natus nulla. Nemo eligendi laudantium non quo. Accusamus quasi perspiciatis tenetur ea adipisci sint nulla vitae quam! Unde corrupti dolore, quae saepe neque fuga a pariatur totam cumque accusamus obcaecati, at laborum illo, quia optio? Excepturi, tempora ipsum, neque quos animi, earum provident possimus laborum beatae saepe debitis sapiente similique amet suscipit ducimus id accusamus quae molestiae corporis incidunt quo. Officia numquam dolorem esse laborum dolore ex tempora quia in repudiandae, cumque odio autem. Ullam natus hic libero assumenda, ea molestias, fugiat impedit quae, culpa laborum fugit enim nesciunt quibusdam tenetur eligendi numquam commodi provident cupiditate fuga suscipit. Numquam ea ipsum eveniet vel, quia quibusdam itaque illo, consequuntur eius, maiores repellat modi cum molestiae distinctio earum! Adipisci alias eos qui mollitia. Sunt perferendis corporis provident cupiditate illo iure repellendus placeat sit.

</article>
```

4. Divida o artigo em seções, organizando-o da seguinte forma:
- Uma primeira *seção* contendo informações gerais a respeito do animal. O *subtítulo* para essa seção fica a seu critério. É necessário que conste nessa seção seu nome científico, que é Odontodactylus scyllarus, em itálico. Além disso, é preciso que haja *informação tabular* a respeito de sua classificação científica, em específico: Reino, Filo, Subfilo, Classe, Subclasse e Ordem. Tais informações você consegue obter na Wikipedia.
```
<article class="main-content">  
    <section>
        <h3>Informações Gerais</h3>
        <p id="info-content">
            O nome científico do Stomatopoda é <em>Odontodactylus scyllarus</em>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad totam nihil quis dolor enim autem tempora hic similique illo possimus minus perferendis, repellat quod aspernatur nisi, natus repellendus eligendi! Maiores alias distinctio consectetur inventore placeat recusandae rerum facere accusamus tempora, nisi praesentium quibusdam magnam, quas repudiandae a vitae voluptate porro consequatur autem, consequuntur velit quis esse et necessitatibus. Enim quos maxime obcaecati officiis esse voluptatibus, ab sit inventore! Corrupti, natus nulla. Nemo eligendi laudantium non quo. Accusamus quasi perspiciatis tenetur ea adipisci sint nulla vitae quam! Unde corrupti dolore, quae saepe neque fuga a pariatur totam cumque accusamus obcaecati, at laborum illo, quia optio? Excepturi, tempora ipsum, neque quos animi, earum provident possimus laborum beatae saepe debitis sapiente similique amet suscipit ducimus id accusamus quae molestiae corporis incidunt quo. Officia numquam dolorem esse laborum dolore ex tempora quia in repudiandae, cumque odio autem. Ullam natus hic libero assumenda, ea molestias, fugiat impedit quae, culpa laborum fugit enim nesciunt quibusdam tenetur eligendi numquam commodi provident cupiditate fuga suscipit. Numquam ea ipsum eveniet vel, quia quibusdam itaque illo, consequuntur eius, maiores repellat modi cum molestiae distinctio earum! Adipisci alias eos qui mollitia. Sunt perferendis corporis provident cupiditate illo iure repellendus placeat sit.
        </p>
        <table>
            <thead>
                <tr>
                    <th colspan="2">Classificação Científica</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Reino</td>
                    <td>Animalia</td>
                </tr>
                <tr>
                <td>Filo</td>
                <td>Arthropoda</td>
                </tr>
                <tr>
                <td>Subfilo</td>
                <td>Crustacea</td>
                </tr>
                <tr>
                <td>Classe</td>
                <td>Malacostraca</td>
                </tr>
                <tr>
                <td>Subclasse</td>
                <td>Hoplocarida</td>
                </tr>
                <tr>
                <td>Ordem</td>
                <td>Stomatopoda</td>
                </tr>
            </tbody>
        </table>
    </section>
</article>
```

- As outras seções dizem respeito aos fatos interessantes que você escolheu acerca do animal. Para cada fato escolhido você vai criar uma seção.
- Adicione, para cada seção, um subtítulo referente ao fato escolhido.
- Adicione, para cada seção, parágrafo(s) descrevendo o fato escolhido. Destaque características impressionantes referentes ao fato que você escolheu, de forma a reforçar a unicidade do Stomatopoda. Por exemplo: se você criar uma seção detalhando o soco potente do animal, seria interessante destacar a velocidade desse soco (80km/h) em negrito.
- Adicione, para cada seção, uma imagem, como forma de ilustrar o fato.
```
<article class="main-content">
    <section>
        <h3>Fato Interessante 1</h3>
        <img class="facts-photos" src="/foto_fato-01.jpg" alt="Foto Fato 01">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eum provident numquam soluta ipsam cum dolore nemo, enim quidem illo quos non cumque maxime eos dignissimos aliquam vel. Dolorum ab quisquam temporibus quis est. Vitae dicta, et fugit earum illo aliquam explicabo. Nihil facere ipsum necessitatibus autem porro asperiores excepturi placeat amet unde, iste commodi sequi accusamus, nulla ex? Maiores quo id ducimus eius unde ipsum odio illum obcaecati quidem, culpa sint minus. Obcaecati natus aliquid tempore accusamus aut reprehenderit exercitationem, iure rerum voluptates qui doloribus? Nulla inventore voluptate unde quia, architecto sint placeat aperiam quis error iusto odit id.</p>
    </section>
    <section>
        <h3>Fato Interessante 2</h3>
        <img class="facts-photos" src="/foto_fato-02.jpg" alt="Foto Fato 02">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic amet cupiditate. Voluptate fugit eos soluta accusamus sapiente maxime voluptatibus id illum quibusdam sed veniam reprehenderit facilis minima alias eum distinctio, nesciunt similique quos ipsa exercitationem voluptatum. Minus nam velit aliquid dolor laborum totam provident ea quod distinctio alias animi enim, omnis odio aperiam exercitationem illo, eius autem qui. Minus saepe quasi fugit praesentium, illo adipisci natus! Sequi possimus enim exercitationem dolorem magnam, recusandae eligendi soluta quas hic porro expedita tempore mollitia quo quos deserunt cumque sapiente rerum aperiam, delectus doloribus illo! Commodi iste dolores debitis dolorem ipsam! Voluptatum, beatae!</p>
    </section>
</article>
```

- Adicione, por fim, uma seção de referências bibliográficas, contendo uma lista de todos os links que foram usados como base para compilar a página em questão.
```
<article class="main-content">
    <section>
        <h3>Referências Bibliográficas</h3>
        <ul>
        <li>
            <a href="https://pt.wikipedia.org/wiki/Stomatopoda" target="_blank">Wikipedia</a>
        </li>
        <li>
            <a href="https://theoatmeal.com/comics/mantis_shrimp" target="_blank">The Oatmeal</a>
        </li>
        <li>
            <a href="https://unsplash.com/s/photos/mantis-shrimp" target="_blank">Fotos - Unsplash</a>
        </li>
        </ul>
    </section>
</article>
```

5. Adicione um conteúdo adjacente ao artigo, disponibilizando um link para este vídeo, que mostra o animal em ação.

6. Adicione um rodapé na página, mostrando algo do gênero:

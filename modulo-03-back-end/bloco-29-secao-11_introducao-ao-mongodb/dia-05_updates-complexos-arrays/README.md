# ⚡ Atividades de Fixação & Exercícios | Bloco 29 - Dia 05 (Seção 11)

## ✅ Exercícios do dia

- Obs.: Os exercícios a seguir consideram a coleção *movies* (arquivo `movies.json`) e o db *cinema*.

1. Adicione a categoria "superhero" ao filme *Batman*.
```
db.movies.updateOne(
  { title: 'Batman' },
  { $push: { category: "superhero" } },
)
```

2. Utilizando o modificador `$each`, adicione as categorias "villain" e "comic-based" ao filme *Batman*.
```
db.movies.updateOne(
  { title: 'Batman' },
  { $push: {
      category: {
        $each: [ "villain", "comic-based" ],
      },
    },
  },
)
```

3. Remova a categoria "action" do filme *Batman*.
```
db.movies.updateOne(
  { title: 'Batman' },
  { $pop: { category: -1 } },
)

<!-- OU -->

db.movies.updateOne(
  { title: 'Batman' },
  { $pull: { category: "action" } },
)
```

4. Remova o primeiro elemento do array `category` do filme *Batman*.
```
db.movies.updateOne(
  { title: 'Batman' },
  { $pop: { category: -1 } },
)
```

5. Remova o último elemento do array `category` do filme *Batman*.
```
db.movies.updateOne(
  { title: 'Batman' },
  { $pop: { category: 1 } },
)
```

6. Adicione o elemento "action" ao array `category` do filme *Batman*, garantindo que esse valor não se duplique.
```
db.movies.updateOne(
  { title: 'Batman' },
  { $addToSet: { category: "action" } },
)
```

7. Adicione a categoria "90's" aos filmes *Batman* e *Home Alone*.
```
db.movies.updateMany(
  { title: { $in: [ "Batman", "Home Alone" ] } },
  { $push: { category: "90's" } },
)
```

8. Crie um array de documentos chamado `cast` para o filme *Home Alone* com os seguintes dados:
```
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```
- Resposta...
```
db.movies.updateOne(
  { title: "Home Alone" },
  { $push: {
      cast: {
        $each: [ 
          { actor: "Macaulay Culkin", character: "Kevin" },
          { actor: "Joe Pesci", character: "Harry" },
          { actor: "Daniel Stern" }
         ],
      },
    },
  },
)
```

9. Adicione o campo `character` com o valor "Marv" ao array de `cast` em que o campo `actor` seja igual a "Daniel Stern" no filme *Home Alone*.
```
db.movies.updateOne(
  { title: "Home Alone", "cast.actor": "Daniel Stern" },
  { $set: { "cast.$.character" : "Marv" } }
)
```

10. Crie um array de documentos chamado `cast` para o filme *Batman* com os seguintes dados.
```
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```
- Resposta...
```
db.movies.updateOne(
  { title: "Batman" },
  { $push: {
      cast: {
        $each: [ 
              { "character": "Batman" },
              { "character": "Alfred" },
              { "character": "Coringa" }
         ],
      },
    },
  },
)
```

11. Produza três `queries` para o filme *Batman*.
- Adicione o campo `actor`, que deve ser um array com o valor "Christian Bale", ao array de `cast` em que o campo `character` seja igual a Batman;

- Adicione o campo `actor`, que deve ser um array com o valor "Michael Caine", ao array de `cast` em que o campo `character` seja igual a "Alfred";

- Adicione o campo `actor`, que deve ser um array com o valor "Heath Ledger", ao array de `cast` em que o campo `character` seja igual a "Coringa".
```
db.movies.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  { $set: { "cast.$.actor" : [ "Christian Bale" ] } }
)

db.movies.updateOne(
  { title: "Batman", "cast.character": "Alfred" },
  { $set: { "cast.$.actor" : [ "Michael Caine" ] } }
)

db.movies.updateOne(
  { title: "Batman", "cast.character": "Coringa" },
  { $set: { "cast.$.actor" : [ "Heath Ledger" ] } }
)

<!-- Poderia ser usado o $push no lugar do $set, como no seguinte exemplo: $push: { "cast.$.actor": "Christian Bale" } -->
```

12. Adicione aos atores de `cast` do `character` "Batman" do filme *Batman* os valores "Michael Keaton", "Val Kilmer" e "George Clooney", e deixe o array em ordem alfabética.
```
db.movies.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  { $push: {
    "cast.$.actor": {
      $each: [ "Michael Keaton", "Val Kilmer", "George Clooney" ],
      $sort: 1,
      }
    } 
  }
)
```
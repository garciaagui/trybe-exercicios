# ⚡ Atividades de Fixação & Exercícios | Bloco 29 - Dia 04 (Seção 11)

## ✅ Exercícios do dia

- Obs.: Os exercícios a seguir consideram a coleção *movies* (arquivo `./data/movies.json`) e o db *class*.

1. Altere o `imdbRating` para 7.7 no filme "Batman".
```
db.movies.updateOne(
  { title: "Batman" },
  { $set: { imdbRating: 7.7 } },
)
```

2. Altere `budget` para 1 no filme "Godzilla".
```
db.movies.updateOne(
  { title: "Godzilla" },
  { $set: { budget: 1 } },
)
```

3. Altere `budget` para 15 e `imdbRating` para 5.5 no filme "Home Alone".
```
db.movies.updateOne(
  { title: "Home Alone" },
  { $set: { imdbRating: 5.5, budget: 15 } },
)
```

4. Aumente em 2 o `imdbRating` do filme "Batman".
```
db.movies.updateOne(
  { title: "Batman" },
  { $inc: { imdbRating: 2 } },
)
```

5. Aumente em 5 o `budget` do filme "Home Alone".
```
db.movies.updateOne(
  { title: "Home Alone" },
  { $inc: { budget: 5 } },
)
```

6. Multiplique por 4 o `imdbRating` do filme "Batman".
```
db.movies.updateOne(
  { title: "Batman" },
  { $mul: { imdbRating: 4 } },
)
```

7. Renomeie o campo `budget` para `estimatedBudget` do filme "Batman".
```
db.movies.updateOne(
  { title: "Batman" },
  { $rename: { budget: "estimatedBudget" } },
)
```

8. Utilize o operador `$min` para alterar o `budget` para 5 do filme "Home Alone".
```
db.movies.updateOne(
  { title: "Home Alone" },
  { $min: { budget: 5 } },
)
```

9. Utilize o operador `$max` para alterar o `imdbRating` para 8.6 do filme Godzilla. Além disso, altere a categoria "adventure" para "thriller" do filme Godzilla.
```
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $max: { imdbRating: 8.6 },
    $set: { "category.1": "thriller" },
  },
)
```

10. Utilizando o operador `$currentDate`, crie um campo chamado lastUpdated com o tipo timestamp no filme "Home Alone".
```
db.movies.updateOne(
  { title: "Home Alone" },
  { $currentDate: { lastUpdate: { $type: 'timestamp' } } },
)
```

11. Utilizando uma única operação, crie um campo chamado `sequels` e atribua a ele o valor 0 em todos os documentos.
```
db.movies.updateMany(
  {},
  { $set: { sequels: 0 } },
)
```

12. Utilizando uma única operação, remova os campos `budget` e `estimatedBudget` em todos os documentos.
```
db.movies.updateMany(
  {},
  { $unset: { budget: "", estimatedBudget: "" } },
)
```

13. Para os filmes Batman ou "Home Alone", atribua a `imdbRating` o valor 17, caso o valor de imdbRating seja menor que 17.
```
db.movies.updateMany(
  { title: { $in: [ "Batman", "Home Alone" ] } },
  { $max: { imdbRating: 17 } },
)
```

## ✅ Exercícios bônus

- Obs. 1: Os exercícios a seguir consideram a coleção *xmen* (arquivo `./data/xmen.json`) e o db *class*.

- Obs. 2: Para todas as alterações realizadas, deve-se sempre atualizar ou adicionar o campo `lastUpdate`, que armazena a data da última alteração com o **tipo `timestamp`**.

14. Remova o campo `class` dos documentos que possuem esse campo com o valor "unknown".
```
db.xmen.updateMany(
  { class: "unknown" },
  { 
    $unset: { class: "" },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  }
)
```

15. Produza uma query que renomeie os campos de `name` para `hero_name`, e de `true_name` para `full_name`; Adicione o campo `power` com valor 100, em todos os documentos.
```
db.xmen.updateMany(
  {},
  { 
    $rename: { name: "hero_name", true_name: "full_name" },
    $set: { power: 100 },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  }
)
```

16. Produza uma query onde os mutantes `class` omega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500.
```
db.xmen.updateMany(
  { class: { $in: [ "omega", "gama" ] } },
  { 
    $max: { power: 500 },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  }
)
```

17. Produza uma query onde os mutantes `class` gama passam a ter seu poder de 300 somente se seu poder for maior que 300.
```
db.xmen.updateMany(
  { class: "gama" },
  { 
    $min: { power: 300 },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  }
)
```

18. Decremente em 100 o poder dos mutantes que não possuem a propriedade `class`.
```
db.xmen.updateMany(
  { class: undefined },
  { 
    $inc: { power: -100 },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  }
)

<!-- OU -->

db.xmen.updateMany(
  { class: { $exists: false } },
  { 
    $inc: { power: -100 },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  }
)
```

19. Em apenas uma query adicione o campo `areas` com o seguinte array como valor: ["Students Room"] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.
```
db.xmen.updateMany(
  { $or: [
    { $and: [ { occupation: "Senior Staff" }, { power: { $gt: 100 } } ] },
    { $and: [ { occupation: "Junior Staff" }, { power: { $gt: 200 } } ] },
  ] },
  { 
    $set: { areas: [ "Students Room" ] },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  }
)

<!-- OU -->

db.xmen.updateMany(
  { $or: [
    { occupation: "Senior Staff", power: { $gt: 100 } },
    { occupation: "Junior Staff", power: { $gt: 200 } },
  ] },
  { 
    $set: { areas: [ "Students Room" ] },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  }
)
```

20. Em apenas uma query, adicione o campo areas com ["Outside"] a todos os Junior Staff que não tenham o campo areas definido.
```
db.xmen.updateMany(
  { occupation: "Junior Staff", areas: { $exists: false } },
  { 
    $set: { areas: [ "Outside" ] },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  }
)
```
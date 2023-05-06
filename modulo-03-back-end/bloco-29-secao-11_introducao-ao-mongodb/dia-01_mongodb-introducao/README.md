# ⚡ Atividades de Fixação & Exercícios | Bloco 29 - Dia 01 (Seção 11)

## ✅ Exercícios do dia

- Obs.: Os exercícios a seguir consideram a coleção [bios](https://www.mongodb.com/docs/manual/reference/bios-example-collection/).

1. Retorne o documento com o `_id` igual a 8.
```
db.bios.find({ _id: 8 })
```

2. Retorne o documento com o `_id` igual a 8, mas só exiba os atributos `_id` e `name`.
```
db.bios.find({ _id: 8 }, { _id: 1, name: 1 })
```

3. Retorne **apenas** os atributos `name` e `birth` do documento com o `_id` igual a 8.
```
db.bios.find({ _id: 8 }, { _id: 0, name: 1, birth: 1 })
```

4. Retorne todos os documentos em que o atributo `name.first` seja igual a "John", utilizando o método `pretty()`.
```
db.bios.find({ "name.first": "John" }).pretty()
```

5. Retorne os 3 primeiros documentos da coleção *bios* utilizando o método `pretty()`.
```
db.bios.find().limit(3).pretty()
```

6. Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.
```
db.bios.find().limit(2).skip(5)
```

Utilizando o `mongoimport`, importe o arquivo `books.json` para a sua instância local do MongoDB e utilize a coleção books para construir as seguintes consultas.
- Obs.: Processo realizado utilizado docker. Nome do container: mongo-test.
```
docker cp ./books.json mongo-test:/tmp/books.json

docker exec mongo-test mongoimport -d exercises -c books --file /tmp/books.json --jsonArray
```

7. Retorne a quantidade de documentos da coleção *books*.
```
db.books.countDocuments({})
```

8. Conte quantos livros existem com o `status` = "PUBLISH".
```
db.books.countDocuments({ status: "PUBLISH" })
```

9. Exiba os atributos `title`, `isbn` e `pageCount` dos 3 primeiros livros. **NÃO** retorne o atributo `_id`.
```
db.books.find({}, { _id: 0, title: 1, isbn: 1, pageCount: 1 }).limit(3)
```

10. Pule 5 documentos e exiba os atributos `_id`, `title`, `authors` e `status` dos livros com o `status` = "MEAP", limitando-se a 10 documentos.
```
db.books.find({ status: "MEAP" }, { title: 1, authors: 1, status: 1 }).skip(5).limit(10)
```
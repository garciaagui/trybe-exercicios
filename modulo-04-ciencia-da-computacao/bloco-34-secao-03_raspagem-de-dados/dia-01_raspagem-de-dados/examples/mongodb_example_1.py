from pymongo import MongoClient

# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")
client = MongoClient()


# o banco de dados catalogue será criado se não existir
db = client.catalogue

# dropa a collection, caso exista uma com o nome 'books'
db.books.drop()

documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]

# insere vários documentos de uma vez
db.books.insert_many(documents)

# busca um documento da coleção, sem filtros
print(db.books.find_one())

# busca utilizando filtros
for book in db.books.find({"title": {"$regex": "t"}}):
    print(book["title"])

client.close()  # fecha a conexão com o banco de dados

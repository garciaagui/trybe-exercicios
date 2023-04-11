# ⚡ Atividades de Fixação & Exercícios | Bloco 34 - Dia 01 (Seção 03 - CS)

## ✅ Exercícios do dia

1. Faça uma requisição ao site `https://httpbin.org/encoding/utf8` e exiba seu conteúdo de forma legível.

```
import requests

response = requests.get("https://httpbin.org/encoding/utf8")

print(response.text)
```

2. Faça uma requisição ao recurso usuários da API do Github (`https://api.github.com/users`), exibindo o **username** e **url** de todos os usuários retornados, conforme o exemplo abaixo.

```
mojombo https://api.github.com/users/mojombo
defunkt https://api.github.com/users/defunkt
pjhyett https://api.github.com/users/pjhyett
wycats https://api.github.com/users/wycats
...
```

- **Resposta...**

```
import requests

response = requests.get("https://api.github.com/users")

for row in response.json():
    username = row["login"]
    url = row["url"]

    print(f"{username} {url}")
```

3. Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP como o navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador. Faça uma requisição a `https://scrapethissite.com/pages/advanced/?gotcha=headers` e verifique se foi bem sucedida.

```
import requests

response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"Accept": "text/html", "User-Agent": "Mozilla/5.0"},
)

print(response.text)
```

4. Baseando-se em uma página contendo detalhes sobre um livro (`http://books.toscrape.com/catalogue/the-grand-design_405/index.html`), faça a extração dos campos **título**, **preço**, **descrição** e **url** contendo a imagem de capa do livro, conforme exemplo abaixo.

- O preço deve vir somente valores numéricos e ponto. Ex: `Â£13.76 -> 13.76`;
- A descrição de ter o sufixo “more…” removido quando existir;
- Os campos extraídos devem ser apresentados separados por vírgula.

```
The Grand Design,13.76,THE FIRST MAJOR WORK IN NEARLY A DECADE BY ONE OF THE WORLDâS GREAT THINKERSâA MARVELOUSLY CONCISE BOOK WITH NEW ANSWERS TO THE ULTIMATE QUESTIONS OF LIFEWhen and howdid the universe begin? Why are we here? Why is there something rather than nothing? What is the nature of reality? Why are the laws of nature so finely tuned as to allow for the existenceof beings like ours THE FIRST MAJOR WORK IN NEARLY A DECADE BY ONE OF THE WORLDâS GREAT THINKERSâA MARVELOUSLY CONCISE BOOK WITH NEW ANSWERS TO THE ULTIMATE QUESTIONS OF LIFEÂ When and howdid the universe begin? Why are we here? Why is there something rather than nothing? What is the nature of reality? Why are the laws of nature so finely tuned as to allow for the existenceof beings like ourselves? And, finally, is the apparent âgrand designâor does science offer another explanation? The most fundamental questions about the origins of the universe and of lifeitself, once the province of philosophy, now occupy the territory where scientists, philosophers, and theologians meetâif only to disagree. In their new book, Stephen Hawking and LeonardMlodinow present the most recent scientific thinking about the mysteries of the universe, in nontechnical language marked by both brilliance and simplicity. In The Grand Design they explainthat according to quantum theory, the cosmos does not have just a single existence or history, but rather that every possible history of the universe exists simultaneously. When applied tothe universe as a whole, this idea calls into question the very notion of cause and effect. But the âtop-downâmultiverseâthe idea that ours is just one of many universes that appearedspontaneously out of nothing, each with different laws of nature.Along the way Hawking and Mlodinow question the conventional concept of reality, posing a âmodel-dependentâtheory ofeverything.âand provokeâlike no other. ,http://books.toscrape.com/catalogue/../../media/cache/9b/69/9b696c2064d6ee387774b6121bb4be91.jpg
```

- **Resposta...**

```
import requests
from parsel import Selector

BASE_URL = "http://books.toscrape.com/catalogue/"

response = requests.get(BASE_URL + "the-grand-design_405/index.html")
selector = Selector(text=response.text)

title = selector.css(".product_main > h1::text").get()
price = selector.css(".product_main > .price_color::text").re_first(
    r"\d+\.\d{2}"
)
description = selector.css("#product_description ~ p::text").get()[
    : -len("...more")
]
cover_url = BASE_URL + selector.css(".active > img::attr(src)").get()


print(title, price, description, cover_url, sep=" | ")
```

5. Modifique o exercício anterior para retornar também quantos livros estão disponíveis, apresentando como último campo no retorno.

```
import requests
from parsel import Selector

BASE_URL = "http://books.toscrape.com/catalogue/"

response = requests.get(BASE_URL + "the-grand-design_405/index.html")
selector = Selector(text=response.text)

title = selector.css(".product_main > h1::text").get()
price = selector.css(".product_main > .price_color::text").re_first(
    r"\d+\.\d{2}"
)
description = selector.css("#product_description ~ p::text").get()[
    : -len("...more")
]
cover_url = BASE_URL + selector.css(".active > img::attr(src)").get()
stock = selector.css(".product_main > .availability::text").re_first(r"\d")

print(title, price, description, cover_url, stock, sep=" | ")
```

6. Considerando o arquivo `books,json`, escreva um programa que se conecte ao banco de dados `library` e liste os livros da coleção `books` para uma determinada categoria recebida por uma pessoa usuária. Somente o título dos livros deve ser exibido.

```
from pymongo import MongoClient


def find_books_by_category(category):
    with MongoClient() as client:
        db = client.library

        books_by_category = list(db.books.find({"categories": category}))

        if not len(books_by_category):
            return print("No books found")

        for book in books_by_category:
            print(book["title"])
```

7. Considerando o arquivo `books,json`, faça o cálculo de quantos livros publicados (`status = PUBLISH`) temos em nosso banco de dados por categoria. Ordene-os de forma decrescente de acordo com a quantidade, conforme exemplo abaixo.

```
Java 95
Internet 41
Microsoft .NET 33
Web Development 16
Software Engineering 15
Business 12
Programming 12
Client-Server 11
Microsoft 8
Theory 7
...
```

- **Resposta...**

```
from pymongo import MongoClient


with MongoClient() as client:
    db = client.library

    published_books = list(db.books.find({"status": "PUBLISH"}))
    unique_categories = set()

    for book in published_books:
        if len(book["categories"]):
            unique_categories.update(book["categories"])

    for category in unique_categories:
        books_count = db.books.count_documents(
            {"status": "PUBLISH", "categories": category}
        )
        print(f"{category}: {books_count}")
```

## ✅ Exercícios bônus

8. Vá ao site `https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags` e recupere as imagens de todas as bandeiras.

```
import requests
from parsel import Selector

URL = "https://en.m.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response = requests.get(URL)
selector = Selector(text=response.text)

raw_images_url = selector.css(".gallerybox .image img::attr(src)").getall()
fixed_images_url = list()

for url in raw_images_url:
    fixed_images_url.append(url[2:])
```

9. Alguns sites possuem paginação feita através de rolagem infinita. Descubra como funciona a rolagem infinita e extraia todas as citações do seguinte site: `http://quotes.toscrape.com/scroll`.

```
import requests


BASE_URL = "http://quotes.toscrape.com/api/quotes?page="

has_next = True
page = 1
counter = 0


while has_next:
    response = requests.get(f"{BASE_URL}{page}").json()

    for quote in response["quotes"]:
        print(quote["text"])
        counter += 1

    has_next = response["has_next"]
    page = response["page"] + 1
```

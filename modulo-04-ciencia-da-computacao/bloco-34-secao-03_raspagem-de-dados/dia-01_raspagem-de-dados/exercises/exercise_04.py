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

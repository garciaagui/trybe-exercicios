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

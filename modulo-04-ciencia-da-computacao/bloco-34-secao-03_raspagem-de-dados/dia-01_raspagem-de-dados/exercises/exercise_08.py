import requests
from parsel import Selector

URL = "https://en.m.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response = requests.get(URL)
selector = Selector(text=response.text)

raw_images_url = selector.css(".gallerybox .image img::attr(src)").getall()
fixed_images_url = list()

for url in raw_images_url:
    fixed_images_url.append(url[2:])

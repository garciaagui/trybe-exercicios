import requests

response = requests.get("https://api.github.com/users")

for row in response.json():
    username = row["login"]
    url = row["url"]

    print(f"{username} {url}")

import requests
import time


# A partir da décima requisição somos bloqueados de acessar o recurso
# Código de status 429: Too Many Requests
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)


# Coloca uma pausa de 6 segundos a cada requisição (boa prática!)
# Obs: este site de exemplo tem um rate limit de 10 requisições por minuto
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response)
    time.sleep(6)


try:
    # Ás vezes pedimos um recurso ao servidor, mas caso o nosso tráfego de rede esteja lento ou exista um problema interno do servidor, nossa resposta pode demorar ou até mesmo ficar travada indefinidamente.
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
    # recurso demora muito a responder

except requests.ReadTimeout:
    # Podemos definir um tempo limite (timeout) para que, após este tempo, possamos tomar alguma atitude, como por exemplo, realizar uma nova tentativa.
    response = requests.get("http://httpbin.org/delay/1", timeout=2)

finally:
    print(response.status_code)

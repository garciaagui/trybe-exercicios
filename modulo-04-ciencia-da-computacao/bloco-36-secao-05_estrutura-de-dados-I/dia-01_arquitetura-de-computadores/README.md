# ⚡ Atividades de Fixação & Exercícios | Bloco 36 - Dia 01 (Seção 05 - CS)

## ✅ Exercícios

1. Crie um projeto que simulará a arquitetura que vimos em aula. Ele deverá ter um arquivo principal para a execução do programa que representará nosso Sistema Operacional e duas classes, que representarão a Memória Principal e a Secundária.

- Vamos começar a nossa memória principal, ou memória RAM: para isso crie um arquivo `main_memory.py`. Implemente os métodos `get` e `load`.
  - No `load` você adicionará (`append`) o elemento passado (`value`) à lista `loaded_memory`.
  - No `get` você retornará o valor presente na posição dada (`index`) na lista `loaded_memory`. Se o valor não existir ou não for numérico, retorne 0.

```
class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        try:
            return float(self.loaded_memory[index])

        except IndexError:
            return 0

    def clean(self):
        self.loaded_memory = []

```

- Crie um arquivo `secondary_memory.py` para ser a nossa memória secundária. Mais uma vez, você será responsável pela implementação dos métodos `get` e `load` porém agora você deverá utilizar a função `open`, para persistir esses dados em disco.
  - No `load`, utilizando o método `open`, escreva um código que crie um novo arquivo utilizando `next_file_name` como `path` e salve o `value` no conteúdo deste novo arquivo.
  - No `get`, também utilizando o método `open`, retorne o conteúdo do arquivo `file_name`. Não esqueça de converter o valor para numérico (`float` ou `int`).

```
from os import mkdir, listdir
from os.path import join
from shutil import rmtree

DISK_PATH = "./disk"


class SecondaryMemory:
    def __init__(self, disk_path=DISK_PATH):
        self.disk_path = disk_path
        try:
            mkdir(self.disk_path)
        except FileExistsError:
            pass

    def load(self, value):
        value = str(value)
        next_index = str(len(listdir(self.disk_path)))
        next_file_name = join(self.disk_path, next_index)
        with open(next_file_name, "w", encoding="UTF-8") as f:
            f.write(value)

    def get(self, index):
        index = str(index)
        file_name = join(self.disk_path, index)
        with open(file_name, "r") as f:
            return float(f.read())

    def clean(self):
        rmtree(self.disk_path)
        mkdir(self.disk_path)
```

- Vamos criar nosso arquivo principal para gerenciar as “memórias” que criamos. Para isso, crie um novo arquivo `operating_system.py` e coloque o seguinte conteúdo. Perceba que o script do nosso Sistema Operacional faz a medição do tempo que cada uma das três operações (`load`, `get` e `clean`) leva para acontecer tanto na memória principal quanto na secundária. Além disso, as operações são testadas com uma lista de valores (`RANDOM_NUMBERS`).

```
from time import perf_counter

from main_memory import MainMemory
from secondary_memory import SecondaryMemory

main = MainMemory()
secondary = SecondaryMemory()

# Números aleatórios a serem somados
RANDOM_NUMBERS = ["36912", "84300"] * 100


def timer(string, initial_time):
    """Função auxiliar para print temporizado"""
    print(string)
    print(
        f"Tempo para a tarefa terminar: {perf_counter() - initial_time:6f}\n"
    )


# Desempenho da memória primária
main_load_init_time = perf_counter()
for number in RANDOM_NUMBERS:
    main.load(number)
timer("Números carregados na memória principal", main_load_init_time)

main_get_init_time = perf_counter()
main_sum = sum([main.get(i) for i in range(len(RANDOM_NUMBERS))])
timer(f"Soma na memória principal: {main_sum}", main_get_init_time)

main_clean_init_time = perf_counter()
main.clean()
timer("Clean na memória principal", main_clean_init_time)


# Desempenho da memória secundária
secondary_load_initial_time = perf_counter()
for number in RANDOM_NUMBERS:
    secondary.load(number)
timer("Números carregados na memória secundária", secondary_load_initial_time)

secondary_get_init_time = perf_counter()
secondary_sum = sum([secondary.get(i) for i in range(len(RANDOM_NUMBERS))])
timer(f"Soma na memória secundária: {secondary_sum}", secondary_get_init_time)

secondary_clean_init_time = perf_counter()
secondary.clean()
timer("Clean na memória secundária", secondary_clean_init_time)

```

2. Agora vamos explorar o sistema que estamos utilizando. Crie um script chamado `my_platform.py` e utilize-o para exibir no console as informações solicitadas abaixo. Para isso, utilize o módulo `platform` do Python.

- A plataforma que está sendo utilizada (linux, win32, darwin, etc);
- A versão (release);
- A arquitetura (x32 ou x64);

```
import platform


def get_my_platform_info():
    p = platform.system()
    v = platform.release()
    a = platform.architecture()[0]

    print(f"Platform: {p}\n" f"Version: {v}\n" f"Architecture: {a}")
```

3. Agora vamos tanto explorar o hardware que estamos utilizando quanto aprender algo interessante: enviar programaticamente comandos para o `shell`. Crie um script chamado `resources.py` e utilize-o para exibir no console as informações solicitadas abaixo. Para isso, utilize o método `check_output` do módulo `subprocess` do Python.

- Informações sobre a sua CPU:

  - O modelo;
  - A quantidade de cores;
  - A velocidade em Megahertz - MHz;
  - A quantidade de cache (L1, L2, L3).

- Informações sobre a memória RAM:

  - A quantidade total de memória RAM disponível em sua máquina em megabytes - MB (faça a conversão também).
  - A quantidade total de memória RAM que está sendo utilizada em megabytes - MB.

```
from subprocess import check_output

# Processador
cpu_information = check_output("lscpu").decode("UTF-8").split("\n")
desired_cpu_information = {
    "model name": "Modelo",
    "cpu(s)": "Cores",
    "cpu mhz": "Velocidade (MHz)",
    "l1d": "Cache L1d",
    "l1i": "Cache L1i",
    "l2": "Cache L2",
    "l3": "Cache L3",
}
for desired_name, desired_description in desired_cpu_information.items():
    for information in cpu_information:
        if information.lower().startswith(desired_name):
            information = information.split("  ")
            information = information[-1].strip()
            print(f"{desired_description}: {information}")

# Memória
memory_information = [
    information
    for information in check_output("free")
    .decode("UTF-8")
    .split("\n")[1]
    .split(" ")
    if information != ""
]
total_memory = int(memory_information[1]) / 1000
used_memory = int(memory_information[2]) / 1000
print(
    f"Memória total: {total_memory:.0f}MB\n"
    f"Memória utilizada: {used_memory:.0f}MB"
)
```

4. Faça um script (`memory_per_sec.py`) que, a cada intervalo de segundo, mostre no console a memória utilizada do sistema operacional vs a memória total (ambos em megabytes - MB). Lembre-se que você pode se basear no script do exercício anterior.

```
from subprocess import check_output
from time import sleep


while True:
    memory_information = [
        information
        for information in check_output("free")
        .decode("UTF-8")
        .split("\n")[1]
        .split(" ")
        if information != ""
    ]
    total_memory = int(memory_information[1]) / 1000
    used_memory = int(memory_information[2]) / 1000
    print(
        f"\nMemória total: {total_memory:.0f}MB\n"
        f"Memória utilizada: {used_memory:.0f}MB"
    )
    sleep(1)

```

5. Faça um script (`process_id.py`) que exibe o seu respectivo `process id` utilizando o módulo `os` do Python e então fique em execução por um determinado tempo. Agora utilizando os comandos de monitoramento visto no conteúdo, exiba os processos em execução e então identifique o seu processo.

```
from time import sleep
from os import getpid


print(getpid())
sleep(20)

```

```
ps aux | grep <PROCESS ID>
```

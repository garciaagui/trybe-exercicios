# ⚡ Atividades de Fixação & Exercícios | Bloco 36 - Dia 02 (Seção 05 - CS)

## ✅ Atividades de Fixação

1. No modelo ISO/OSI, qual é a responsabilidade de suas camadas?

**Resposta:** Cada camada é responsável pela inserção de uma funcionalidade ao modelo, de forma que a informação passa por uma primeira camada, sendo formatada e tendo informações adicionadas de acordo com sua regra. Em seguida, o resultado desse primeiro encapsulamento é passado para a outra camada, onde a informação é novamente tratada e são adicionadas as informações pertinentes àquela camada. Esse processo é repetido por todas as camadas até que os dados estejam aptos para serem trafegados ao seu destino. Da maneira inversa, o destinatário realiza o desencapsulamento, compreendendo os dados de cada camada e então prosseguindo para a camada seguinte.

2. Sabemos que nós, seres humanos, temos domínio para lidar com nomes, como por exemplo `www.betrybe.com`, e as máquinas por sua vez trabalham com números. Sabendo disso, qual o nome do serviço usado para converter nomes legíveis por humanos em endereços IP lidos pelas máquinas?

**Resposta:** Serviço DNS.

3. Cite dois conceitos comumente utilizados em segurança nas redes.

**Resposta:** Criptografia e certificados de segurança.

4. Cite recursos que podemos utilizar para minimizar os riscos de ataques.

**Resposta:** Senhas fortes, uso de 2FA (_two-factor authentication_) e configuração de camadas extras de proteção (_firewall_).

5. É verdade que os _Firewalls_ são usados apenas para impedir a entrada de tráfegos em uma rede?

**Resposta:** Não, eles impedem ou permitem tanto a entrada quanto a saída de tráfegos em uma rede.

6. Como funciona o _Fail2ban_?

**Resposta:** É um IPS que monitora os _logs_ da rede e cria regras no _iptables_ ao detectar comportamento suspeito, como diversas requisições de um mesmo IP ou diversas tentativas de login SSH, de modo a rejeitar aquele endereço de IP específico por determinado tempo.

7. Agora que você sabe para que serve o Proxy, dê exemplos de seu uso na vida real.

**Resposta:** Controle parental e bloqueio de determinados sites nos ambientes corporativos.

## ✅ Exercícios

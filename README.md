## &#128161; Teste Frontend &#128161;

### O projeto consiste em fazer a extração de dados de uma conta de energia em formato PDF e, em seguida, inserir esses dados no banco de dados.

Ao utilizar uma biblioteca de conversão de PDF no Node.js, observei dificuldade para extrair alguns campos, como o "Nº DO CLIENTE" e o "Mês de referência". Para contornar essa questão, optei por usar a biblioteca OCR (Reconhecimento Óptico de Caracteres) chamada Tesseract.js. No entanto, descobri que o Tesseract.js não trabalha diretamente com PDFs, então foi necessário converter o PDF em uma imagem e, em seguida, fazer a digitalização (scan) da imagem para extrair o texto. Após esse processo, utilizei funções com expressões regulares (regex) em JavaScript para extrair as strings desejadas, ou seja, o "Nº DO CLIENTE" e o "Mês de referência".

Primeiro, você adiciona o PDF da conta de energia e, em seguida, realiza o escaneamento do PDF usando OCR com redes neurais para extrair informações relevantes. É importante observar que o processo pode levar um pouco mais de tempo devido à complexidade do reconhecimento de caracteres com redes neurais.

<img src="front1.jpg" alt="drawing" width="600"/>

Após o processo de escaneamento com OCR, o texto resultante é exibido para visualização. Esse texto contém as informações extraídas da conta de energia

<img src="front2.jpg" alt="drawing" width="600"/>

Após a extração dos dados da conta de energia e a obtenção das informações desejadas, os dados são enviados para o banco de dados. Em seguida, o sistema redireciona o usuário para uma lista que contém as informações armazenadas previamente no banco de dados.

<img src="front3.jpg" alt="drawing" width="600"/>

Após o envio dos dados da conta de energia para o banco de dados, o sistema exibe uma lista com todas as faturas cadastradas. A lista contém informações detalhadas sobre cada fatura, como o número do cliente, mês de referência, consumo e valor. O usuário pode visualizar todas as faturas previamente cadastradas e realizar ações adicionais, como editar ou excluir faturas, se necessário. Essa lista oferece uma visão geral de todas as faturas armazenadas no banco de dados, facilitando o gerenciamento e acompanhamento das contas de energia.

<img src="front4.jpg" alt="drawing" width="600"/>

Após a extração dos dados da conta de energia e a obtenção das informações relevantes, o sistema exibe um gráfico que mostra o consumo e o valor por mês de referência. O gráfico fornece uma visualização clara e compreensível das variações no consumo e nos valores ao longo do tempo, permitindo ao usuário analisar e entender melhor os padrões e tendências de uso de energia. Isso pode ajudar o usuário a tomar decisões mais informadas e conscientes em relação ao consumo de energia.

<img src="front5.jpg" alt="drawing" width="600"/>

## 🔨 Instalação

1. Clone o repositório para o seu computador:

`git clone https://github.com/brunokobi/testeFront.git`
`cd testeFront`

2. Instale as dependências do projeto:

`npm install`

## &#128204; Uso

Após a instalação, você pode iniciar o servidor executando o seguinte comando:

`npm start`

Isso iniciará o servidor em http://localhost:3000.

### Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades para este projeto. Abra uma pull request e teremos prazer em revisá-la.

### Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

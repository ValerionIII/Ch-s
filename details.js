import { ScrollView, View, Text, StyleSheet } from 'react-native';

export function DetailsScreen() {
  return (
    <ScrollView>
      <View style={styles.Design}>
        <Text style={styles.Text2}>"A história do chá no Brasil começa bem antes de sua chegada em nossas terras, seu início ocorre em um país próximo, em Portugal. Durante a época das grandes navegações, havia a procura constante dos portugueses por especiarias que pudessem ser comercializadas.

Durante uma das viagens feitas com o intuito de encontrar essas especiarias, os portugueses tiveram seu primeiro contato com a planta Camellia Sinensis, quando desembarcaram na China. Quando experimentaram a bebida feita a partir da infusão das folhas da planta, se apaixonaram instantaneamente. 

Foi nesse momento que resolveram estabelecer uma rota de comércio entre Portugal e a China. Durante o planejamento da rota, decidiram que ela seria feita pelo porto de Macau e entre as especiarias transportadas, estaria a Camellia. 

Esse é o início da história do chá no Brasil e nessa época, nosso país já havia sido tomado pelos portugueses, que planejavam cultivar plantas em nosso território. Após estudos que comprovaram o potencial agronômico de nossas terras, os portugueses começaram a se preparar para o cultivo. 

A história do chá no Brasil - A chegada das mudas em nosso território
Em 1810, chegaram em território brasileiro as primeiras mudas da Camellia Sinensis. Junto com algumas sementes enviadas para dar início ao cultivo, veio também a mão de obra chinesa que iria auxiliar no desenvolvimento dessa produção. 

Com o destino final decidido: Jardim Botânico do Rio de Janeiro, iniciou-se a produção das mudas da Camellia. Durante o cultivo da planta, foram realizados testes de adaptação e desenvolvimento das mudas. Diante desses estudos, a história do chá no Brasil começou a ganhar forma.

Em 1822, nosso país já somava um total de 6 mil pés de chá em seu território, o que possibilitava 3 colheitas por ano. Mas, é claro que isso no Rio de Janeiro, pois quando a produção chegou à São Paulo, o estado chegou a ter 44 mil pés da planta.

Uma curiosidade: O viaduto do chá, localizado em São Paulo, recebeu esse nome graças a extensa plantação que havia na região.  

A história do Chá no Brasil - Para finalizar 
Não dá para negar que a história do chá no Brasil é cheia de fatos importantes para a história e cultura do nosso país. Nem pouco podemos dizer que o início dessa produção em território brasileiro não foi necessária para cultivar o hábito do consumo de chá em nosso país.

Até porque, atualmente, o chá é uma das bebidas mais famosas, procuradas e apreciadas pelos brasileiros. Em outras palavras, foram pequenas situações, momentos e conquistas da história do chá no Brasil, que fizeram dessa bebida, tudo o que ela é, e representa atualmente. 

Aqui na Chás Real, o nosso maior objetivo é levar até a mesa dos brasileiros, sabores de chás variados e que despertam bons sentimentos. Com esse propósito em mente, realizamos cada etapa da produção das caixinhas com foco na qualidade e na satisfação do consumidor final. 

Quer saber mais sobre nosso trabalho, conhecer nossos produtos ou, até mesmo, ler outros conteúdos em nosso blog? Para isso, continue aqui em nosso site e confira outras de nossas páginas. 

Leia também: Qual o melhor chá para quem faz yoga?"

        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  Design: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },

  Text2: {
    textAlign: 'justify',
    marginLeft: 10,
    marginEnd: 10,
  }
});
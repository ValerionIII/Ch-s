import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';


export function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ justifyContent: 'space-around', alignItems: 'center', justifyContent: 'center', }}>
        <Text style={styles.Design} > A HISTORIA DO CHÁ {'\n'} </Text>
        <Text style={styles.Text2}>

          "O costume de usar as folhas de chá para dar um bom sabor à água fervida,deu-se pela primeira vez na China em meados de 250 a.C.

O imperador Shen-Nung descobriu esta bebida acidentalmente quando estava fervendo água à sombra de uma árvore silvestre que balançava cadenciosamente com os ares da primavera.

Casualmente umas folhas caíram na panela do imperador que bebeu a infusão resultante. Sentiu-se reconfortado e com uma especial sensação de bem-estar. Assim nasceu o chá.

Os indianos atribuem o descobrimento ao Príncipe Bodhi-Dharma, filho do Rei Kosjuwo.


Um dia partiu em peregrinação rumo ao norte da Índia com o propósito de pregar o budismo ao longo do caminho. No final do quinto ano, estava doente e fraco.


Ouvindo a sugestão dos sábios recolheu algumas folhas de uma árvore especial, saboreou sua infusão, curou-se e obviamente o remédio foi o chá.


Suas extraordinárias propriedades permitiram-lhe cumprir sua promessa. A lenda japonesa acrescenta um toque sensual.


Contam que no final dos três primeiros anos da peregrinação, o Príncipe Bodhi-Dharma um dia sonhou com todas as mulheres que havia amado. Dizem que era um conquistador e, ao despertar, envergonhou-se de sua travessa libido e não lhe ocorreu nada melhor que fazer uma promessa impossível de cumprir; não voltar a dormir e desta maneira, não poderia ter seus sonhos pecaminosos. Quando estava a ponto de sucumbir e quebrar a promessa porque o sono e o cansaço o  atacavam, encontrou um lindo arbusto, mastigou algumas das folhas de chá e descobriu que tinham a propriedade de manter seus olhos bem abertos e longe das lembranças pecaminosas.


Obviamente, trata-se apenas de uma lenda, já que dormir e sonhar são parte substancial da vida.


Acompanhe-nos em uma breve caminhada para entender como o chá se desenvolveu ao longo destes 5000 anos de história…


Ano 2737 a.C.
O imperador chinês Shen Nung foi quem impulsionou a agricultura chinesa em geral e o chá em particular. O chá nestes anos tomava-se como bebida medicinal e sua origem é preciso buscá-la no velho vale de Assam, entre a China e a Índia, às margens do rio Bhramaputra.


Ano 200 d.C.
Nesta data, o chá é uma decocção. As folhas maceradas eram fervidas com leite e casca de laranja. Em um dado momento da Dinastia Ming, o chá deixa de ser uma decocção para converter-se em uma infusão: moem-se finamente as folhas secas, acrescenta-se água fervente e agita-se com uma varinha de bambu.


Ano 375 d.C.
O chá é a bebida mais popular na China. As três etapas principais de desenvolvimento são:

chá fervido
chá esmagadochá em infusão
Cada etapa corresponde a diferentes “escolas” de pensamento, que correspondem às dinastias Tang, Song e Ming.


Ano 478
Um documento desta data mostra que na China utilizavam-se tijolos prensados, elaboradas com folhas verdes de chá fervidas ao vapor. Logo eram utilizadas nas relações comerciais com os turcos.


Ano 650
O chá no Tibete. O chá nesta época é importado da China, utilizando caravanas de iaques e o ponto de partida é a cidade Dajion Lu na fronteira. O chá carregado é produzido em Yunnan e em Szechuan. O destino é Lhasa (capital do Tibete). O caminho percorre 1.500 quilômetros com alturas que ultrapassam os 5000m acima do nível do mar. A viagem dura muitos meses e para assegurar a boa conservação, são transportados em tijolos.


Ano 660
O estilo tibetano de tomar chá. Em esta época em o Tibete se preparava o chá de maneira especial. Os tijolos de chá eram triturados em um pilão e logo em seguida fervidos.


Ano 729
O chá chega ao Japão. Somente o imperador consumia chá nesta época, sendo muito valioso por ser importado da China.

[izquierda]


Ano 783
Um grupo de funcionários e comerciantes Chineses contratou o escritor e filosofo Lu Yu (733-804) para que escrevesse o primeiro livro sobre o chá.

Este famoso trabalho é conhecido como “Arte Clássica do Chá” o “Cha Sing” e constituiu-se como o livro sagrado do chá. Nele, descreve-se poeticamente a forma de preparar o chá.


Ano 790
O chá se converte em uma forma de pagamento para os chineses.


Ano 800
São levadas as primeiras sementes ao Império do Sol Nascente. Para os japoneses, o chá é algo mais que uma bebida. Desenvolvem uma cerimônia especial para tomar chá cujo objetivo é ajudar a espírito a encontrar a paz. Esta prática atravessou séculos e fronteiras. Nesta época os monges mendicantes budistas levaram-no escondido
em suas túnicas, roubando das plantações Chinesas. Os imperadores japoneses logo tiveram o monopólio. Suas plantações foram protegidas por grandes muralhas, e quando era realizada a colheita, praticava-se com as mãos cobertas por luvas muito finas. Sendo a bebida da família imperial e da aristocracia passou a ser
a bebida nacional. A cerimônia completa do chá durava aproximadamente três horas e é praticada ainda hoje em dia, mas habitualmente em formato simplificado.


Ano 828
O chá chega à Coréia. O embaixador do rei de Coréia leva a seu país uma planta de chá que lhe haviam presenteado na corte imperial da Dinastia Tang (China).


Ano 1280
A história do chá na Índia mostra como Marco Polo, o famoso aventureiro veneziano, levou o chá da China à corte do imperador indiano Harsha Vardhana." {'\n'}
        </Text>

        <Button
          title= "BRASIL"
          onPress={() => navigation.navigate('HISTORIA DO BRASIL')}
        />

        <Text>{'\n'}</Text>

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
import { Text, View, Image, StyleSheet, FlatList, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigator } from './src/navigation/stackNavigator';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeScreen } from './src/pages/home'
import { useState } from 'react';
import { Fontisto } from '@expo/vector-icons';


function Profile() {



  const [vari, setvari] = useState([
  {nome: 'O Chá de boldo, preparado com as folhas secas do boldo do Chile ou folhas frescas boldo brasileiro, é rico em boldina, ácido rosmarínico e forscolina, com propriedades desintoxicantes, que ajudam a limpar o fígado e aliviar a dor de cabeça, especialmente causada por má digestão ou ressaca. Além disso, o chá de boldo tem um efeito calmante e relaxante, sendo uma boa opção de remédio caseiro para dor de cabeça. ", preparo: "Ingredientes: \n \n1 xícara de água; \n1 colher de chá de folhas frescas de boldo picadas.', key:1 },
  {nome: 'O Chá de orégano tem propriedades calmantes e anti-inflamatórias devido à presença do carvacrol na sua composição, composto bioativo que ajuda a aliviar a dor de cabeça.", preparo: "Ingredientes: \n \n1 colher (de sopa) de folhas ou flores de orégano fresco ou seco;\n 1 xícara de água fervente.', key:2},
  {nome: 'Chá de Hortelã-pimenta: Possui propriedades antissépticas, calmantes e analgésicas, ajudando a aliviar sintomas de problemas gastrointestinais, como dor de barriga, náuseas e vômitos.', key:3},
  {nome: 'Chá de Maracujá com Maçã e Canela: Reduz os sintomas da depressão e ansiedade, auxilia no tratamento da insônia, diminui dores de cabeça e dores menstruais, regula a pressão arterial, previne a diabetes, melhora o funcionamento do sistema digestivo, previne o envelhecimento celular e auxilia no emagrecimento. Rico em Vitamina A e C, e possui ação antioxidante, calmante, sedativa, tônica, refrescante, diurética e analgésica', key:4},
  {nome: 'Chá de Limão: É uma bebida deliciosa que pode ser consumida quente ou gelada! Tome um chá de limão quente com mel para aliviar dores de garganta ou refresque-se com um copo da bebida gelada em um dia abafado de verão. Depois de aprender o básico, você pode fazer receitas personalizadas e combinações variadas com frutas frescas, caldas ou até o mesmo um licor.', key:5},
  ])

  

  return (
    <View style={styles.Design}>
      <Text>Os Chás mais indicados. {'\n'}{'\n'}</Text>
      <Text style={styles.Text2}>Os chás são poderosas fontes de nutrientes para a saúde, isso grande parte das pessoas sabe. Mas, dentre os inúmeros tipos, versões sabores e combinações dessa bebida, quais são os seus principais benefícios para o bom funcionamento do nosso corpo? Sempre associados à paz, equilíbrio e relaxamento mental, o consumo regular dessas iguarias também é ótima alternativa para manter o organismo ativo e a pleno vapor. {'\n'}{'\n'}

        <FlatList
        numColumns={1}
        keyExtractor={(item) => item.key}
        data={vari}
        renderItem={({ item }) => ( 
         <Text style={styles.item}>{item.nome}</Text> 
           )}
        />
      </Text>

      <Image
        source={require('./assets/Chás.jpg')}
        style={{ width: 450, height: 350, resizeMode: 'contain', marginTop: 15, }}
      />
    </View>
  );
}

function Notifications() {
  return (
    <View style={styles.Design}>
      <Text style={styles.Text2}>Loja Oficial de Chás Medicinais {'\n'}{'\n'}</Text>
      <Text style={styles.Text2}>O intuito de nossa loja é facilitar e melhorar a vida de nossos compradores com chás medicinais,que promovem um universo vasto de sabores e bem estar do corpo humano,venha conhecer ..Tea For Life.. e transforme sua percepção sobre a segunda bebida mais consumida no mundo:{'\n'} {'\n'}
      
      -Nossos chás de folhas são preparados de maneira artesanal,para que não perca seu aroma,nem nenhuma de suas propriedades,para isso,se é utilizado folhas novas,pois com elas se é possível extrair suas propriedades de maneira mais rápida e eficaz.Um dos chás mais conhecidos,é o Chá de Boldo,que possui a característica de ser um desintoxicante,outro bom exemplo é o chá de Hortelã,que para as mulheres,seria de muito bom uso,pois pode ajudar em casos de cólica menstrual,seu consumo tbm ajuda em casos de resfriado,refluxo,alivia a asma,sinusite e entupimento nasal.Com isso,recomendamos o consumo de nossos produtos,pois com eles,sua vida pode melhorar. {'\n'}
      </Text>
    </View>
  );
}
 



function Venda() {
  const exibirAviso = () => {
    alert('Futuramente abriremos as vendas online');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Comprar" onPress={exibirAviso} />
    </View>
  );
}
//arrumar  os simbolos das barras de tarrefas 
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#3267F5',
      }}
    >
<Tab.Screen
  name="Feed"
  component={StackNavigator}
  options={{
    tabBarLabel: 'Inicio',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="home" color={color} size={size} />
    ),
    headerShown: false,
    tabBarLabelStyle: styles.tabBarLabel, // Adicione esta linha
  }}
/>
<Tab.Screen
  name="Chás"
  component={Profile}
  options={{
    tabBarLabel: 'Chás',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="tea" size={24} color={color} />
    ),
    tabBarLabelStyle: styles.tabBarLabel, // Adicione esta linha
  }}
/>
<Tab.Screen
  name="loja"
  component={Notifications}
  options={{
    tabBarLabel: 'loja',
    tabBarIcon: ({ color, size }) => (
      <Fontisto name="shopping-store" size={24} color={color} />
    ),
    tabBarLabelStyle: styles.tabBarLabel, // Adicione esta linha
  }}
/>
<Tab.Screen
  name="Venda"
  component={Venda}
  options={{
    tabBarLabel: 'Venda',
    tabBarIcon: ({ color, size }) => (
      <Fontisto name="shopify" size={24} color={color} />
    ),
    tabBarLabelStyle: styles.tabBarLabel, // Adicione esta linha
  }}
/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  tabBarLabel: {
    fontWeight: 'bold',
    color: 'green',
  },


  Design: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },

  Text2: {
    textAlign: 'justify',
    marginLeft: 10,
    marginEnd: 10,
  },

  item:{
    fontSize:14,
    textAlign: 'justify',
  }

  


});
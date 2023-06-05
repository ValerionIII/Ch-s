const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: '123321',
    database: 'lost',
    port: 3308,

})

app.get("/", (req, res) => {

    
    let SQL = "INSERT INTO listaItens ( itens ) VALUE ( 'vender chá' )";

    db.query(SQL, (err, result) => {

        console.log(err);

    })

    res.send('acesso concedido')

});

app.listen(3001, () => {

    console.log('rodando servidor');

});
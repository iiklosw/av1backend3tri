const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const bancoHorarios = {
    "segunda": [
        { componente: "Programação Back End" },
        { componente: "Programação Back End" },
        { componente: "Português" },
        { componente: "Sociologia" },
        { componente: "Banco de Dados" },
        { componente: "Português" }
    ],
    "terça": [
        { componente: "Física" },
        { componente: "Filosofia" },
        { componente: "Física" },
        { componente: "Sociologia" },
        { componente: "Banco de Dados" },
        { componente: "Banco de Dados" }
    ],
    "quarta": [
        { componente: "Português" },
        { componente: "Inglês" },
        { componente: "Educação Física" },
        { componente: "Matemática" },
        { componente: "Educação Física" },
        { componente: "Educação Financeira" }
    ],
    "quinta": [
        { componente: "Inovação Tec E Empreend " },
        { componente: "Filosofia" },
        { componente: "Matemática" },
        { componente: "Programação Front End" },
        { componente: "Inglês" },
        { componente: "Programação Back End" }
    ],
    "sexta": [
        { componente: "Inovação Tec E Empreend " },
        { componente: "Inovação Tec E Empreend " },
        { componente: "História" },
        { componente: "História" },
        { componente: "Programação Front End" },
        { componente: "Programação Front End" }
    ]
};

app.get('/horario/:dia', (req, res) => {
    const dia = req.params.dia.toLowerCase();
    const aulas = bancoHorarios[dia] || [];
    res.json(aulas);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
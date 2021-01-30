
import {Cliente} from "./Conta/Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./Funcionario/SistemaAutenticacao.js"


const diretor = new Diretor('Rodrigo',1000,'123456789')
diretor.cadastrarSenha('123456')
const gerente = new Gerente('Ricardo',5000,12378945601)
gerente.cadastrarSenha('123')

const cliente = new Cliente('Lais',789456123,'456')
const diretorEstaLogado = SistemaAutenticacao.login(diretor,'123456')
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,'123')



const clienteEstaLogado = SistemaAutenticacao.login(cliente,'456')

console.log(gerenteEstaLogado,diretorEstaLogado)

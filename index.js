
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./Funcionario/SistemaAutenticacao.js"    


const diretor = new Diretor ('Rodrigo', 10000,123455900)
diretor.cadastrarSenha('123456789')
const gerente = new Gerente ('Ricarod', 5000,12345601)

 const gerenteEstaLogado = SistemaAutenticacao.login(diretor,'123456789')
 const diretorEstaLogado = SistemaAutenticacao.login(diretor,'123456789')

console.log(estaLogado)
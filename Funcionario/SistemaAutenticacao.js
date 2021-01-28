/*
Ser autenticácvel significa ter o método autenricar
*/
    
export class SistemaAutenticacao{
    static login(autenticavel,senha){
        return autenticavel.autenticar(senha)


    }
}
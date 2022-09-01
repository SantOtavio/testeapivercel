const crud = require("../../crud/server");

const tabelaEntrada_De_Fio = "entrada_de_fio";

async function buscarEntradas_De_Fios() {
    return await crud.buscar(tabelaEntrada_De_Fio);
}

async function buscarEntrada_De_Fio(id) {
    if (await idExiste(id))
        return await crud.buscarPorId(tabelaEntrada_De_Fio, id);
    return `ID inválido!`
}

async function criarEntrada_De_Fio(entrada_de_fio) {
    if (entrada_de_fioTemPropriedades(entrada_de_fio) && Object.values(entrada_de_fio).length != 8)
        return `Para cadastrar um entrada_de_fio é preciso ter os seguintes campos: qtd_caixa, qtd_kg, subtotal, qtd_rolos_por_caixa, arquivo_nf, idFornecedor, idFio, idCliente!`
    
    if (!await chaveSecundariaValida(entrada_de_fio))
        return `Há chaves secundárias inválidas!`
        
    return await crud.salvar(tabelaEntrada_De_Fio, null, entrada_de_fio);
}

async function atualizarEntrada_De_Fio(id, entrada_de_fio) {
    if (!await idExiste(id))
        return `ID inválido!`

    if (entrada_de_fioTemPropriedades(entrada_de_fio) && Object.values(entrada_de_fio).length != 8)
        return `Para atualizar um entrada_de_fio é preciso ter os seguintes campos: qtd_caixa, qtd_kg, subtotal, qtd_rolos_por_caixa, arquivo_nf, idFornecedor, idFio, idCliente!`
    
    if (!await chaveSecundariaValida(entrada_de_fio))
        return `Há chaves secundárias inválidas!`

    return await crud.salvar(tabelaEntrada_De_Fio, id, entrada_de_fio);
}

async function deletarEntrada_De_Fio(id) {
    if (!await idExiste(id))
        return `ID inválido!`
        
    return await crud.remover(tabelaEntrada_De_Fio, id);
}

async function entrada_de_fioTemPropriedades(entrada_de_fio) {
    if (
        entrada_de_fio.qtd_caixa && entrada_de_fio.qtd_kg && entrada_de_fio.subtotal
        && entrada_de_fio.qtd_rolos_por_caixa && entrada_de_fio.arquivo_nf
        && entrada_de_fio.idFornecedor && entrada_de_fio.idFio
        && entrada_de_fio.idCliente
    ) {
        return true;
    }
    return false;
}

async function idExiste(id) {
    const listaEntradasFios = await crud.buscar(tabelaEntrada_De_Fio);

    const existe = listaEntradasFios.some((element) => {
        return element.id == id
    });

    return existe;
}

async function chaveSecundariaValida(entrada_de_fio) {
    const listaFornecedores = await crud.buscar("fornecedor");
    const listaFios = await crud.buscar("fio");
    const listaClientes = await crud.buscar("cliente");

    const existeFornecedor = listaFornecedores.some((element) => {
        return element.id == entrada_de_fio.idFornecedor
    });

    const existeFio = listaFios.some((element) => {
        return element.id == entrada_de_fio.idFio
    });

    const existeCliente = listaClientes.some((element) => {
        return element.id == entrada_de_fio.idCliente
    });

    if (existeFornecedor && existeFio && existeCliente)
        return true;
    return false;
}

module.exports = {
    buscarEntradas_De_Fios,
    buscarEntrada_De_Fio,
    criarEntrada_De_Fio,
    atualizarEntrada_De_Fio,
    deletarEntrada_De_Fio,
}
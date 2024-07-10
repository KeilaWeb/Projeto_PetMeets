const RegisterClient = () => {
    return (
      <div class="conteudo">
        <div class="cliente-geral">
            <h2 class="texto-H2">Lista de Clientes</h2>
        </div>
      <div class="tabela-cliente">
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
        </table>
        <table>
          <tbody>
            <tr v-for="venda in vendas">
              <td class="pontaInicio"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="pontaFinal">
                  <a href="#" class="delete-cliente"> Deletar </a>
                  <a href="#" class="editar-cliente"> Editar  </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisterClient;

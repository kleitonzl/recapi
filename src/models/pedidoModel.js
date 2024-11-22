module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
      status: {
        type: DataTypes.STRING,
        defaultValue: 'em andamento',
        allowNull: false
      },
      dataPedido: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  
    Pedido.associate = models => {
      Pedido.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'cliente'
      });
      Pedido.belongsToMany(models.Produto, {
        through: 'PedidoProdutos',
        as: 'produtos',
        foreignKey: 'pedidoId'
      });
    };
  
    return Pedido;
  };
  
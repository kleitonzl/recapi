module.exports = (sequelize, DataTypes) => {
    const PedidoProduto = sequelize.define('PedidoProduto', {
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return PedidoProduto;
  };
  
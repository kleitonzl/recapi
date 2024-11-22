module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Cliente;
  };
  
const dataTypes = require('sequelize').DataTypes;
const db = require('./index');

module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('pedido', {
    id: {
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    createdAt: {
      type: dataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: dataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pedido',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'pedido_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      }
    ]
  });
  return Pedido;
}

const dataTypes = require("sequelize").DataTypes;
const db = require("./index");

module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    "produto",
    {
      id: {
        autoIncrement: true,
        type: dataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      descricao: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      preco: {
        type: dataTypes.DECIMAL,
        allowNull: false,
      },
      categoria_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categoria",
          key: "id",
        },
      },
      createdAt: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: dataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "produto",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "produto_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
  return Produto;
};

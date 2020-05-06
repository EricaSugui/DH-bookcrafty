const Produto = (sequelize, DataTypes) => {
    return sequelize.define('Produto', {
        id_produto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: DataTypes.STRING,
        descricao: DataTypes.INTEGER,
        preco: DataTypes.FLOAT,
        fk_categoria: DataTypes.INTEGER,
        imagem: DataTypes.STRING,
        fk_editora: DataTypes.INTEGER
    })
}

module.exports = Produto;
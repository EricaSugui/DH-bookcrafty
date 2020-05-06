const Produto = (sequelize, DataTypes) => {
    let produto = sequelize.define('Produto', {
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
    },
    {
        tableName: "produto",
        timestamps: false
    });

    produto.associate = models => {
        produto.belongsTo(models.Editora, { foreignKey: 'id_editora', as: 'editora'});
        produto.belongsTo(models.Categoria, { foreignKey: 'id_categoria', as: 'categoria'})
    }

    return produto;
}

module.exports = Produto;
const Categoria = (sequelize, DataTypes) => {
    return sequelize.define('Categoria', {
        id_categoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: DataTypes.STRING
    })
}

module.exports = Categoria;
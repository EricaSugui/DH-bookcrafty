const Editora = (sequelize, DataTypes) => {
    return sequelize.define('Editora', {
        id_editora: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: DataTypes.STRING
    })
}

module.exports = Editora;
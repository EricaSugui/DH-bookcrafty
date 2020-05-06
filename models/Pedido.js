const Pedido = (sequelize, DataTypes) => {
    return sequelize.define('Pedido', {
        id_pedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        status: DataTypes.STRING,
        fk_usuario: DataTypes.INTEGER
    })
}

module.exports = Pedido;
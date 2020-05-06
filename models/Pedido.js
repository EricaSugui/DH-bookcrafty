const Pedido = (sequelize, DataTypes) => {
    let pedido =  sequelize.define('Pedido', {
        id_pedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        status: DataTypes.STRING,
        fk_usuario: DataTypes.INTEGER
    },
    {
        tableName: "pedido",
        timestamps: false
    });

    pedido.associate = models => {
        pedido.belongsTo(models.Usuario, { foreignKey: 'id_usuario', as: 'usuario'});
    }

    return pedido;
}

module.exports = Pedido;
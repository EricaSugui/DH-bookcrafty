const Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define('Usuario', {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING
    },
    {
        tableName: "usuario",
        timestamps: false
    });

    usuario.associate = models => {
        usuario.hasMany(models.Endereco, { foreignKey: 'fk_usuario', as: 'endereco'});
        usuario.hasMany(models.Pedido, { foreignKey: 'fk_usuario', as: 'pedido'})
    }

    return usuario;
}

module.exports = Usuario;
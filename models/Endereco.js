const Endereco = (sequelize, DataTypes) => {
    let endereco = sequelize.define('Endereco', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        endereco: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        complemento: DataTypes.STRING,
        cep: DataTypes.INTEGER,
        uf: DataTypes.STRING,
        fk_usuario: DataTypes.INTEGER
    },
    {
        tableName: "endereco",
        timestamps: false
    });

    endereco.associate = models => {
        endereco.belongsTo(models.Usuario, { foreignKey: 'id_usuario', as: 'usuario'});
    }

    return endereco;
}

module.exports = Endereco;
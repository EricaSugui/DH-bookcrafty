const Endereco = (sequelize, DataTypes) => {
    return sequelize.define('Endereco', {
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
    })
}

module.exports = Endereco;
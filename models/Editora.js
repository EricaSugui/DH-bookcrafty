const Editora = (sequelize, DataTypes) => {
    let editora = sequelize.define('Editora', {
        id_editora: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: DataTypes.STRING
    },
    {
        tableName: "editora",
        timestamps: false
    });

    editora.associate = models => {
        editora.hasMany(models.Produto, { foreignKey: 'fk_editora', as: 'produto'});
    }

    return editora;
}

module.exports = Editora;
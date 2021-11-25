module.exports = function (sequelize, dataTypes) {
	let alias = 'CategoriaUsuario';
	let cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncremen: true,
		},
		categoria: {type: dataTypes.STRING},
	};

	let config = {
		tablename: 'categorias_users',
		timestamps: false,
	};
	let categoriaUsuario = sequelize.define(alias, cols, config);

	//categoriaUsuario.associate = function (models) {
	//categoriaUsuario.hasOne(models.Usuario, {
	// as: "CategoriaUsuario",
	//foreignKey: "categoriaUser_id",
	//});
	// };
	return categoriaUsuario;
};

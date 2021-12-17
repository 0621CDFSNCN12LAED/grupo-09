module.exports = function (sequelize, dataTypes) {
	let alias = 'CategoriaUser';
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
	//	categoriaUsuario.hasMany(models.Usuario, {
	//		as: 'categoriaUsuario',
	//		foreignKey: 'categoriaUsers_id',
	//	});
	//};
	return categoriaUsuario;
};

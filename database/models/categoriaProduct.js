module.exports = function (sequelize, dataTypes) {
	let alias = 'CategoriaProducto';
	let cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncremen: true,
		},
		categoria: {type: dataTypes.STRING},
	};

	let config = {
		tablename: 'ccategorias_products',
		timestamps: false,
	};
	let categoriaProducto = sequelize.define(alias, cols, config);

	categoriaProducto.associate = function (models) {
		categoriaProducto.hasOne(models.Productos, {
			as: 'productos',
			foreignKey: 'categoriaProducts_id',
		});
	};
	return categoriaProducto;
};

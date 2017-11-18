const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('StatData',{
				StatID:{
					type : Sequelize.STRING(50),
					primaryKey : true,
					defaultValue : DataTypes.UUIDV4
				},
				CategoryName:{
					type : Sequelize.STRING
				},
				CountNum:{
					type : Sequelize.BIGINT
				},
				Fields:{
					type : Sequelize.STRING(4000)
				},
				Groups:{
					type : Sequelize.STRING(100)
				}
			},{
				freezeTableName : true
			});
}
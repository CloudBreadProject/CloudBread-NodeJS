const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('ServerInfo',{
				InfoID:{
					type : Sequelize.STRING(128),
					primaryKey : true
				},
				ServerLists:{
					type : Sequelize.STRING
				},
				Version:{
					type : Sequelize.STRING(50)
				},
				ResourceLink:{
					type : Sequelize.STRING(4000)
				},
				EULAText:{
					type : Sequelize.STRING(8000)
				},
				DataFromRegion:{
					type : Sequelize.STRING(64),
					allowNull : false
				},
				DataFromRegionDT:{
					type : Sequelize.DATE,
					allowNull : false
				}	
			},{
				freezeTableName : true
			});
}
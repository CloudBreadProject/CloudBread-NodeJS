const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('MemberGameInfo',{
				MemberID:{
					type : Sequelize.STRING,
					primaryKey : true
				},
				Level:{
					type : Sequelize.STRING(40)
				},
				Exps:{
					type : Sequelize.STRING(50)
				},
				Points:{
					type : Sequelize.STRING(50)
				},
				UserSTAT1:{
					type : Sequelize.STRING
				},
				UserSTAT2:{
					type : Sequelize.STRING
				},
				UserSTAT3:{
					type : Sequelize.STRING
				},
				UserSTAT4:{
					type : Sequelize.STRING
				},
				UserSTAT5:{
					type : Sequelize.STRING
				},
				UserSTAT6:{
					type : Sequelize.STRING
				},
				UserSTAT7:{
					type : Sequelize.STRING
				},
				UserSTAT8:{
					type : Sequelize.STRING
				},
				UserSTAT9:{
					type : Sequelize.STRING
				},
				UserSTAT10:{
					type : Sequelize.STRING
				},
				sCol1:{
					type : Sequelize.STRING
				},
				sCol2:{
					type : Sequelize.STRING
				},
				sCol3:{
					type : Sequelize.STRING
				},
				sCol4:{
					type : Sequelize.STRING
				},
				sCol5:{
					type : Sequelize.STRING
				},
				sCol6:{
					type : Sequelize.STRING
				},
				sCol7:{
					type : Sequelize.STRING
				},
				sCol8:{
					type : Sequelize.STRING
				},
				sCol9:{
					type : Sequelize.STRING
				},
				sCol10:{
					type : Sequelize.STRING
				},	
				HideYN:{
					type : Sequelize.STRING(1),
					allowNull : false,
					defaultValue : 'N'
				},
				DeleteYN:{
					type : Sequelize.STRING(1),
					allowNull : false,
					defaultValue : 'N'
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
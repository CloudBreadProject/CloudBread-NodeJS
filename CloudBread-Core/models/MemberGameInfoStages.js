const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('MemberGameInfoStages',{
				MemberGameInfoStagesID:{
					type : Sequelize.STRING(128),
					primaryKey : true,
					defaultValue : DataTypes.UUIDV4
				},
				MemberID:{
					type : Sequelize.STRING(256)
				},
				StageName:{
					type : Sequelize.STRING(100)
				},
				StageStatus:{
					type : Sequelize.STRING(40)
				},
				Category1:{
					type : Sequelize.STRING(80)
				},
				Category2:{
					type : Sequelize.STRING(80)
				},
				Category3:{
					type : Sequelize.STRING(80)
				},
				Mission1:{
					type : Sequelize.STRING(80)
				},
				Mission2:{
					type : Sequelize.STRING(80)
				},
				Mission3:{
					type : Sequelize.STRING(80)
				},
				Mission4:{
					type : Sequelize.STRING(80)
				},
				Mission5:{
					type : Sequelize.STRING(80)
				},
				Points:{
					type : Sequelize.STRING(50)
				},
				StageStat1:{
					type : Sequelize.STRING
				},
				StageStat2:{
					type : Sequelize.STRING
				},
				StageStat3:{
					type : Sequelize.STRING
				},
				StageStat4:{
					type : Sequelize.STRING
				},
				StageStat5:{
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
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('AdminMember',{
				AdminMemberID:{
					type : Sequelize.STRING(128),
					primaryKey : true
				},
				AdminMemberPWD:{
					type : Sequelize.STRING(128)
				},
				AdminMemberEmail:{
					type : Sequelize.STRING(128),
					unique : true
				},
				IDCreateAdminMember:{
					type : Sequelize.STRING(128)
				},
				AdminGroup:{
					type : Sequelize.STRING(40)
				},
				TimeZoneID:{
					type : Sequelize.STRING(40),
					defaultValue : '2100'
				},
				PINumber:{
					type : Sequelize.STRING(50)
				},
				Name1:{
					type : Sequelize.STRING(50)
				},
				Name2:{
					type : Sequelize.STRING(50)
				},
				Name3:{
					type : Sequelize.STRING(50)
				},
				DOB:{
					type : Sequelize.STRING(16)
				},
				LastIPaddress:{
					type : Sequelize.STRING(32)
				},
				LastLoginDT:{
					type : Sequelize.STRING(32)
				},
				LastLogoutDT:{
					type : Sequelize.STRING(32)
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
				DeleteYN:{
					type : Sequelize.STRING(1),
					allowNull : false,
					defaultValue : 'N'
				},
				HideYN:{
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
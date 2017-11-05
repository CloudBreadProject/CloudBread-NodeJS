const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('CouponMember',{
				CouponMemberId:{
					type : Sequelize.STRING(128),
					primaryKey : true
				},
				CouponID:{
					type : Sequelize.STRING(128),
					allowNull : false
				},
				MemberID:{
					type : Sequelize.STRING,
					allowNull : false
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
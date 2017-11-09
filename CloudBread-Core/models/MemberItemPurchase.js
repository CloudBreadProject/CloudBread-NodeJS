const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);


module.exports = (sequelize, DataTypes) => {
	return sequelize.define('MemberItemPurchase',{
				MemberItemPurchaseID:{
					type : Sequelize.STRING(128),
					primaryKey : true 
				},
				MemberID:{
					type : Sequelize.STRING,
					allowNull : false
				},
				ItemListID:{
					type : Sequelize.STRING(128),
					allowNull : false
				},
				PurchasePrice:{
					type : Sequelize.STRING(50)
				},
				PurchaseQuantity:{
					type : Sequelize.STRING(512)
				},
				PGinfo1:{
					type : Sequelize.STRING(512)
				},
				PGinfo2:{
					type : Sequelize.STRING(512)
				},
				PGinfo3:{
					type : Sequelize.STRING(512)
				},
				PGinfo4:{
					type : Sequelize.STRING(512)
				},
				PGinfo5:{
					type : Sequelize.STRING(512)
				},
				PurchaseDeviceID:{
					type : Sequelize.STRING(128)
				},
				PurchaseDeviceIPAddress:{
					type : Sequelize.STRING(64)
				},
				PurchaseDeviceMACAddress:{
					type : Sequelize.STRING(128)
				},
				PurchaseDT:{
					type : Sequelize.STRING(64),
					defaultValue : Sequelize.DATE
				},
				PurchaseCancelYN:{
					type : Sequelize.STRING(40),
					defaultValue : 'N'
				},
				PurchaseCancelDT:{
					type : Sequelize.STRING(64)
				},
				PurchaseCancelingStatus:{
					type : Sequelize.STRING(40)
				},
				PurchaseCancelReturnedAmount:{
					type : Sequelize.STRING(50)
				},
				PurchaseCancelDeviceID:{
					type : Sequelize.STRING(128)
				},
				PurchaseCancelDeviceIPAddress:{
					type : Sequelize.STRING(64)
				},
				PurchaseCancelDeviceMACAddress:{
					type : Sequelize.STRING(128)
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
				PurchaseCancelConfirmAdminMemberID:{
					type : Sequelize.STRING,
					allowNull : false
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
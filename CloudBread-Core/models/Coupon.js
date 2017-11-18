const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('Coupon',{
				CouponID:{
					type : Sequelize.STRING(128),
					primaryKey : true,
					defaultValue : DataTypes.UUIDV4
				},
				CouponCategory1:{
					type : Sequelize.STRING(50)
				},
				CouponCategory2:{
					type : Sequelize.STRING(50)
				},
				CouponCategory3:{
					type : Sequelize.STRING(50)
				},
				ItemListID:{
					type : Sequelize.STRING(128),
					allowNull : false
				},
				ItemCount:{
					type : Sequelize.STRING(50)
				},
				ItemStatus:{
					type : Sequelize.STRING(50)
				},
				TargetGroup:{
					type : Sequelize.STRING(50)
				},
				TargetOS:{
					type : Sequelize.STRING(40)
				},
				TargetDevice:{
					type : Sequelize.STRING(80)
				},
				Title:{
					type : Sequelize.STRING(100)
				},
				Content:{
					type : Sequelize.STRING(4000)
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
				CouponDurationFrom:{
					type : Sequelize.DATE,
					allowNull : false
				},
				CouponDurationTo:{
					type : Sequelize.DATE,
					allowNull : false
				},
				OtherNumber:{
					type : Sequelize.INTEGER,
					allowNull : false,
					defaultValue : 0
				},
				DupeYN:{
					type : Sequelize.STRING(1),
					allowNull : false,
					defaultValue : 'N'
				},
				CreateAdminID:{
					type : Sequelize.STRING(128),
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
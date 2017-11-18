const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = function(sequelize, DataTypes) {
	const Member = sequelize.define('Member', {
				MemberID:{
					type : Sequelize.STRING(256),
					primaryKey : true
				},
				MemberPWD:{
					type : Sequelize.STRING
				},
				EmailAddress:{
					type : Sequelize.STRING(450),
					unique : true
				},
				EmailConfirmedYN:{
					type : Sequelize.STRING(40),
					defaultValue : 'N'
				},
				PhoneNumber1:{
					type : Sequelize.STRING(50)
				},
				PhoneNumber2:{
					type : Sequelize.STRING(50)
				},
				PINumber:{
					type : Sequelize.STRING(100)
				},
				Name1:{
					type : Sequelize.STRING(100)
				},
				Name2:{
					type : Sequelize.STRING(100)
				},
				Name3:{
					type : Sequelize.STRING(100)
				},
				DOB:{
					type : Sequelize.STRING(50)
				},
				RecommenderID:{
					type : Sequelize.STRING
				},
				MemberGroup:{
					type : Sequelize.STRING(50)
				},
				LastDeviceID:{
					type : Sequelize.STRING(128)
				},
				LastIPaddress:{
					type : Sequelize.STRING(128)
				},
				LastLoginDT:{
					type : Sequelize.STRING(64)
				},
				LastLogoutDT:{
					type : Sequelize.STRING(64)
				},
				LastMACAddress:{
					type : Sequelize.STRING(128)
				},
				AccountBlockYN:{
					type : Sequelize.STRING(40)
				},
				AccountBlockEndDT:{
					type : Sequelize.STRING(64)
				},
				AnonymousYN:{
					type : Sequelize.STRING(40)
				},
				ThirdAuthProvider:{
					type : Sequelize.STRING(128)
				},
				ThirdAuthID:{
					type : Sequelize.STRING(256)
				},
				ThirdAuthParam:{
					type : Sequelize.STRING
				},
				PushNotificationID:{
					type : Sequelize.STRING(512)
				},
				PushNotificationProvider:{
					type : Sequelize.STRING
				},
				PushNotificationGroup:{
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
				TimeZoneID:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : '2100'
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
					type : Sequelize.DATE
//					allowNull : false,
//					defaultVale : Sequelize.NOW
				}
			},{
				freezeTableName:true,
				timestamps: true
			});
	return Member;
};
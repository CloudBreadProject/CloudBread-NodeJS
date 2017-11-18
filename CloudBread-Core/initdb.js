const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);
const db = require('./models');

	sequelize.Sequelize.Promise.all([
		db.Member.hasMany(db.MemberItems, {
			foreignKey : 'MemberID', 
			targetKey : 'MemberID'
		}),
		db.ItemList.hasMany(db.MemberItems, {
			foreignKey : 'ItemListID', 
			targetKey : 'ItemListID'
		}),
		db.Member.hasMany(db.MemberGameInfoStages, {
			foreignKey : 'MemberID', 
			targetKey : 'MemberID'
		}),
		db.ItemList.hasMany(db.GiftDepository, {
			foreignKey : 'ItemListID',
			targetKey : 'ItemListID'
		}),
		db.Member.hasMany(db.GiftDepository, {
			foreignKey : 'FromMemberID',
			targetKey : 'MemberID'	
		}),
		db.Member.hasMany(db.GiftDepository,{
			foreignKey : 'ToMemberID',
			targetKey : 'MemberID'
		}),
		db.ItemList.hasMany(db.GameEvents,{
			foreignKey : 'ItemListID',
			targetKey : 'ItemListID'
		}),
		db.ItemList.hasMany(db.Coupon,{
			foreignKey : 'ItemListID',
			targetKey : 'ItemListID'
		}),
		db.Coupon.hasMany(db.CouponMember,{
			foreignKey : 'CouponID',
			targetKey : 'CouponID'
		}),
		db.Member.hasMany(db.CouponMember,{
			foreignKey : 'MemberID',
			targetKey : 'MemberID'
		}),
		db.Member.hasMany(db.MemberAccountBlockLog,{
			foreignKey : 'MemberID',
			targetKey : 'MemberID'
		}),
		db.ItemList.hasMany(db.MemberItemPurchase, {
			foreignKey : 'ItemListID', 
			targetKey : 'ItemListID'
		}),
		db.Member.hasMany(db.MemberItemPurchase, {
			foreignKey : 'MemberID',
			targetKey : 'MemberID'
		}),
		db.Member.hasMany(db.GameEventMember,{
			foreignKey : 'MemberID',
			targetKey : 'MemberID'
		}),
		db.Member.sync(),
		db.AdminMember.sync(), 
		db.ItemList.sync(),    
		db.Notices.sync(),
		db.ServerInfo.sync(), 
		db.StatData.sync(),
		db.MemberGameInfo.sync(),
		db.MemberGameInfoStages.sync(),
		db.MemberAccountBlockLog.sync(),
		db.MemberItemPurchase.sync(),  
		db.MemberItems.sync(),
		db.GiftDepository.sync(),
		db.GameEvents.sync(),
		db.GameEventMember.sync(),  
		db.Coupon.sync(), // 2
		db.CouponMember.sync()
		])
		.catch(function(err){
			console.log(err);
		})

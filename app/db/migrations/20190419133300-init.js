'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("users",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "email": {
                  "type": Sequelize.STRING,
                  "field": "email"
              },
              "name": {
                  "type": Sequelize.STRING,
                  "field": "name"
              },
              "birth_date": {
                  "type": Sequelize.DATE,
                  "field": "birth_date"
              },
              "facebook": {
                  "type": Sequelize.STRING,
                  "field": "facebook"
              },
              "password": {
                  "type": Sequelize.STRING,
                  "field": "password"
              },
              "gender": {
                  "type": Sequelize.STRING,
                  "field": "gender"
              },
              "phone": {
                  "type": Sequelize.STRING,
                  "field": "phone"
              },
              "address": {
                  "type": Sequelize.JSON,
                  "field": "address"
              }
          }
      );

      await queryInterface.createTable("buyers",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "name": {
                  "type": Sequelize.STRING,
                  "field": "name"
              },
              "address": {
                  "type": Sequelize.JSON,
                  "field": "address"
              },
              "birth_date": {
                  "type": Sequelize.DATE,
                  "field": "birth_date"
              },
              "cpf": {
                  "type": Sequelize.STRING,
                  "field": "cpf"
              },
              "phone": {
                  "type": Sequelize.STRING,
                  "field": "phone"
              },
              "email": {
                  "type": Sequelize.STRING,
                  "field": "email"
              }
          }
      );

      await queryInterface.createTable("schedules",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "type": {
                  "type": Sequelize.STRING,
                  "field": "type"
              },
              "time": {
                  "type": Sequelize.DATE,
                  "field": "time"
              },
              "parameters": {
                  "type": Sequelize.STRING,
                  "field": "parameters"
              },
              "status": {
                  "type": Sequelize.STRING,
                  "field": "status",
                  "validate": {},
                  "defaultValue": "IN_PROGRESS"
              }
          }
      );

      await queryInterface.createTable("coupons",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "amount": {
                  "type": Sequelize.FLOAT,
                  "field": "amount"
              },
              "percentage": {
                  "type": Sequelize.FLOAT,
                  "field": "percentage",
                  "validate": {}
              },
              "available": {
                  "type": Sequelize.BOOLEAN,
                  "field": "available",
                  "defaultValue": true
              },
              "name": {
                  "type": Sequelize.STRING,
                  "field": "name",
                  "unique": true
              },
              "notes": {
                  "type": Sequelize.STRING,
                  "field": "notes"
              }
          }
      );

      await queryInterface.createTable("properties",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "key": {
                  "type": Sequelize.STRING,
                  "field": "key",
                  "unique": true
              },
              "value": {
                  "type": Sequelize.STRING,
                  "field": "value"
              }
          }
      );

      await queryInterface.createTable("best_destinations",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "active": {
                  "type": Sequelize.BOOLEAN,
                  "field": "active"
              },
              "search_url": {
                  "type": Sequelize.STRING(500),
                  "field": "search_url"
              },
              "image_url": {
                  "type": Sequelize.STRING(500),
                  "field": "image_url"
              },
              "destination": {
                  "type": Sequelize.STRING,
                  "field": "destination"
              },
              "origin": {
                  "type": Sequelize.STRING,
                  "field": "origin"
              },
              "description": {
                  "type": Sequelize.STRING,
                  "field": "description"
              }
          }
      );

      await queryInterface.createTable("testimonies",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "active": {
                  "type": Sequelize.BOOLEAN,
                  "field": "active"
              },
              "text": {
                  "type": Sequelize.STRING(180),
                  "field": "text"
              },
              "description": {
                  "type": Sequelize.STRING(30),
                  "field": "description"
              },
              "author": {
                  "type": Sequelize.STRING(30),
                  "field": "author"
              },
              "image_url": {
                  "type": Sequelize.STRING(500),
                  "field": "image_url"
              }
          }
      );

      await queryInterface.createTable("pwd_tokens",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "user_id": {
                  "type": Sequelize.INTEGER,
                  "field": "user_id",
                  "references": {
                      "model": "users",
                      "key": "id"
                  }
              },
              "expires_at": {
                  "type": Sequelize.DATE,
                  "field": "expires_at",
                  "defaultValue": Sequelize.Date
              },
              "token": {
                  "type": Sequelize.STRING,
                  "field": "token"
              },
              "retrieved": {
                  "type": Sequelize.BOOLEAN,
                  "field": "retrieved"
              }
          }
      );

      await queryInterface.createTable("searches",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "origin": {
                  "type": Sequelize.STRING,
                  "field": "origin"
              },
              "destination": {
                  "type": Sequelize.STRING,
                  "field": "destination"
              },
              "origin_desc": {
                  "type": Sequelize.STRING,
                  "field": "origin_desc"
              },
              "destination_desc": {
                  "type": Sequelize.STRING,
                  "field": "destination_desc"
              },
              "outbound_date": {
                  "type": Sequelize.DATE,
                  "field": "outbound_date"
              },
              "inbound_date": {
                  "type": Sequelize.DATE,
                  "field": "inbound_date"
              },
              "url": {
                  "type": Sequelize.TEXT('long'),
                  "field": "url"
              },
              "cabin": {
                  "type": Sequelize.STRING,
                  "field": "cabin",
                  "validate": {},
                  "defaultValue": "ECONOMICA"
              },
              "user_id": {
                  "type": Sequelize.INTEGER,
                  "field": "user_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "users",
                      "key": "id"
                  },
                  "allowNull": true
              }
          }
      );

      await queryInterface.createTable("orders",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "status": {
                  "type": Sequelize.STRING,
                  "field": "status"
              },
              "outbound_flight": {
                  "type": Sequelize.TEXT('long'),
                  "field": "outbound_flight"
              },
              "inbound_flight": {
                  "type": Sequelize.TEXT('long'),
                  "field": "inbound_flight"
              },
              "flight_tickets": {
                  "type": Sequelize.STRING,
                  "field": "flight_tickets"
              },
              "clear_sale_id": {
                  "type": Sequelize.STRING,
                  "field": "clear_sale_id",
                  "unique": true
              },
              "user_id": {
                  "type": Sequelize.INTEGER,
                  "field": "user_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "users",
                      "key": "id"
                  },
                  "allowNull": true
              },
              "search_id": {
                  "type": Sequelize.INTEGER,
                  "field": "search_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "searches",
                      "key": "id"
                  },
                  "allowNull": true
              }
          }
      );

      await queryInterface.createTable("payments",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "amount": {
                  "type": Sequelize.FLOAT,
                  "field": "amount"
              },
              "amount_miles": {
                  "type": Sequelize.INTEGER,
                  "field": "amount_miles"
              },
              "amount_luggage": {
                  "type": Sequelize.FLOAT,
                  "field": "amount_luggage"
              },
              "amount_detailed": {
                  "type": Sequelize.JSON,
                  "field": "amount_detailed"
              },
              "installments": {
                  "type": Sequelize.INTEGER,
                  "field": "installments"
              },
              "type": {
                  "type": Sequelize.STRING,
                  "field": "type",
                  "validate": {}
              },
              "status": {
                  "type": Sequelize.STRING,
                  "field": "status",
                  "validate": {},
                  "defaultValue": "WAITING"
              },
              "receipt": {
                  "type": Sequelize.STRING,
                  "field": "receipt"
              },
              "buyer_id": {
                  "type": Sequelize.INTEGER,
                  "field": "buyer_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "buyers",
                      "key": "id"
                  },
                  "allowNull": true
              },
              "order_id": {
                  "type": Sequelize.INTEGER,
                  "field": "order_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "orders",
                      "key": "id"
                  },
                  "allowNull": true
              },
              "coupon_id": {
                  "type": Sequelize.INTEGER,
                  "field": "coupon_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "coupons",
                      "key": "id"
                  },
                  "allowNull": true
              }
          }
      );

      await queryInterface.createTable("rebudgets",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "outbound_info": {
                  "type": Sequelize.JSON,
                  "field": "outbound_info"
              },
              "inbound_info": {
                  "type": Sequelize.JSON,
                  "field": "inbound_info"
              },
              "flight": {
                  "type": Sequelize.STRING,
                  "field": "flight"
              },
              "status": {
                  "type": Sequelize.STRING,
                  "field": "status",
                  "validate": {},
                  "defaultValue": "WAITING"
              },
              "order_id": {
                  "type": Sequelize.INTEGER,
                  "field": "order_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "orders",
                      "key": "id"
                  },
                  "allowNull": true
              },
              "coupon_id": {
                  "type": Sequelize.INTEGER,
                  "field": "coupon_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "coupons",
                      "key": "id"
                  },
                  "allowNull": true
              }
          }
      );

      await queryInterface.createTable("coupon_rules",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "type": {
                  "type": Sequelize.STRING,
                  "field": "type",
                  "validate": {}
              },
              "value": {
                  "type": Sequelize.STRING,
                  "field": "value"
              },
              "error_msg": {
                  "type": Sequelize.STRING,
                  "field": "error_msg"
              },
              "coupon_id": {
                  "type": Sequelize.INTEGER,
                  "field": "coupon_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "coupons",
                      "key": "id"
                  },
                  "allowNull": true
              }
          }
      );

      await queryInterface.createTable("coupon_redemptions",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "used_at": {
                  "type": Sequelize.DATE,
                  "field": "used_at",
                  "defaultValue": Sequelize.Date
              },
              "coupon_id": {
                  "type": Sequelize.INTEGER,
                  "field": "coupon_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "coupons",
                      "key": "id"
                  },
                  "allowNull": true
              },
              "user_id": {
                  "type": Sequelize.INTEGER,
                  "field": "user_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "users",
                      "key": "id"
                  },
                  "allowNull": true
              }
          }
      );

      await queryInterface.createTable("moip_payments",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "moip_id": {
                  "type": Sequelize.STRING,
                  "field": "moip_id"
              },
              "moip_order_id": {
                  "type": Sequelize.STRING,
                  "field": "moip_order_id"
              },
              "status": {
                  "type": Sequelize.STRING,
                  "field": "status"
              },
              "payment_id": {
                  "type": Sequelize.INTEGER,
                  "field": "payment_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "payments",
                      "key": "id"
                  },
                  "allowNull": true
              }
          }
      );

      await queryInterface.createTable("passengers",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "first_name": {
                  "type": Sequelize.STRING,
                  "field": "first_name"
              },
              "last_name": {
                  "type": Sequelize.STRING,
                  "field": "last_name"
              },
              "birth_date": {
                  "type": Sequelize.DATE,
                  "field": "birth_date"
              },
              "cpf": {
                  "type": Sequelize.STRING,
                  "field": "cpf"
              },
              "passport": {
                  "type": Sequelize.STRING,
                  "field": "passport"
              },
              "phone": {
                  "type": Sequelize.STRING,
                  "field": "phone"
              },
              "order_id": {
                  "type": Sequelize.INTEGER,
                  "field": "order_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "orders",
                      "key": "id"
                  },
                  "allowNull": true
              }
          }
      );

      await queryInterface.createTable("order_events",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "status": {
                  "type": Sequelize.STRING,
                  "field": "status"
              },
              "order_id": {
                  "type": Sequelize.INTEGER,
                  "field": "order_id",
                  "onUpdate": "CASCADE",
                  "onDelete": "SET NULL",
                  "references": {
                      "model": "orders",
                      "key": "id"
                  },
                  "allowNull": true
              }
          }
      );

      await queryInterface.createTable("newsletters",
          {
              "id": {
                  "type": Sequelize.INTEGER,
                  "field": "id",
                  "autoIncrement": true,
                  "primaryKey": true,
                  "allowNull": false
              },
              "email": {
                  "type": Sequelize.STRING,
                  "field": "email"
              },
          }
      );
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropAllTables();
  }
};

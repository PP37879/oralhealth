var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('dentist',{
        DEN_ID:{type: DataTypes.INTEGER,primary:true,validate:{notNull:true, notEmpty:true}},
        DEN_USERNAME:{type:DataTypes.STRING,unique:true,validate:{notNull:true}},
        DEN_PASSWORD:{type:DataTypes.STRING,validate:{notNull:true}},
        DEN_NAME:{type:DataTypes.STRING,unique:true,validate:{notNull:true}},
        DEN_EMAIL:{type:DataTypes.STRING,unique:true,validate:{notNull:true}},
    },
        {
            classMethods : {
                validatePassword : function(password,pwd,done,user){
                    bcrypt.compare(password,pwd,function(err,isMatch){
                            if(err) console.log(err);
                            if(isMatch){
                                return done(null,user);
                            }else{
                                return done(null,false);
                            }
                        }
                    );
                }
            }
        },
        {
            dialect:'mysql'
        }
    );
    User.hook('beforeCreate',function(user,fn){
        var salt = bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
            return salt;
        });
        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err) return next(err);
            user.password = hash;
            return fn(null,user)
        });
    })
    return User
}
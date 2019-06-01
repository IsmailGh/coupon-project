const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String, 
    lastName: String, 
    address: String, 
    classYear: Number, 
    email: String,
    phone: String, 
    phoneProvider: String,
    isAdmin: Boolean,
    isSuperAdmin: Boolean,
    hash: String, 
    companyName: String,
    interests: [String],
    timeSpent: Number
    },
    {
        toObject: {getter: true}, 

        timestamps: {
            createdAt: 'createdDate',
            updatedAt: 'updatedDate'
        }
    }
);

userSchema.pre('save', function(callback){
    if (this.isAdmin){
        if(!this.hash && !this.password){
            throw new Error ('missing password');
        }
        this.hash = this.hash || this.password; 
    }
    else{
        if (!this.phone){
            throw new Error('missing phone');
        }

        if (!this.phoneProvider){
            throw new Error('missing provider');
        }
    }
    callback();
});

userSchema.methods.greet = function() {
    console.log('hi');
};

userSchema.method.checkPassword = function(pw){
    return (this.hash === pw); 
};

var User = mongoose.model('User', userSchema);

module.exports = Coupon; 
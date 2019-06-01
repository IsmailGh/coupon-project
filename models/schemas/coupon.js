const moongoose = require('mongoose');
const Schema = moongoose.Schema;

var couponSchema = new Schema ({

    name: {type: String, required: true},
    url: {type: String, required: true},
    startDate: String,
    endDate: String, 
    tags: [String],
    clicks: [Date],
    views: [Date],
    redeems: [Date],
    postedBy: {type: Schema.ObjectId, required: true},  
    approvedDate: Date,

    },
    {
        toObject: {getters: true},

        timestamps: {
            createdAt: 'createdDate',
            updatedAt: 'updatedDate'
        }
    }
);

couponSchema.pre('save'), function(callback){
     

    callback();
}

var Coupon = moongoose.model('Coupon', couponSchema);

module.exports = Coupon;
const mongoose = require("mongoose")

const leadSchema = new mongoose.Schema({
    route:String,
    street_number:String,
    postal_code:String,
    locality:String,
    administrative_area_level_1_short:String,
    idev:String,
    key:String,
    cartype:String,
    afid:String,
    lid:String,
    did:String,
    vehicletype:String,
    budget:String,
    vehicle:String,
    credit:String,
    emp:String,
    income:Number,
    emp_length:Number,
    emp_length_months:Number,
    companyname:String,
    jobtitle:String,
    dlocation:String,
    formatted_address:String,
    addresslength:Number,
    addresslength_months:Number,
    rentownhome:String,
    home_monthly:Number,
    dob:Date,
    fname:String,
    lname:String,
    phone:Number,
    email:String,
    acceptCasl:String
 })

module.exports = mongoose.model("Lead", leadSchema)
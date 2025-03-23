import mongoose  from 'mongoose';

// DEFINE SCHEMA
const itemSchema = new mongoose.Schema({
    name: { type: String, default: null },
    images: { type: [ String ], default: null },
    info: { type: String, default: null },
    additionalInfo: { type: [ String ], default: null },
    checkoutUrl: { type: String, default: null },
    stock: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
})

// CREATE MODEL
const Item = mongoose.model('Item', itemSchema);

export default Item;

 
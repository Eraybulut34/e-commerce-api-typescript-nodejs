import { model, Schema, Document } from 'mongoose';
import { Cart } from '@/interfaces/cart.interface';

const cartSchema: Schema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  total: {
    type: Number,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const cartModel = model<Cart & Document>('Cart', cartSchema);

export default cartModel;

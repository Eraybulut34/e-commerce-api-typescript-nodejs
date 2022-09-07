import { model, Schema, Document } from 'mongoose';
import { Product } from '@interfaces/product.interface';

const productSchema: Schema = new Schema({
  price: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
  image: {
    type: String,
    required: true,
  }
});

const productModel = model<Product & Document>('Product', productSchema);

export default productModel;

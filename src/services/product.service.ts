import { hash } from 'bcrypt';
import { CreateProductDto } from '@dtos/product.dto.';
import { HttpException } from '@exceptions/HttpException';
import { Product } from '@interfaces/product.interface';
import productModel from '@models/product.model';
import { isEmpty } from '@utils/util';

class ProductService {
  public products = productModel;

  public async findAllProducts(): Promise<Product[]> {
    const products: Product[] = await this.products.find();
    return products;
  }

  public async findProductById(productId: string): Promise<Product> {
    if (isEmpty(productId)) throw new HttpException(400, "ProductId is empty");

    const findProduct: Product = await this.products.findOne({ _id: productId });
    if (!findProduct) throw new HttpException(409, "Product doesn't exist");

    return findProduct;
  }

  public async findProductByCategoryId(categoryId: string): Promise<Product[]> {
    if (isEmpty(categoryId)) throw new
      HttpException(400, "CategoryId is empty");

    const findProductByCategoryId: Product[] = await this.products.find({ category: categoryId });
    if (!findProductByCategoryId) throw new HttpException(409, "Product doesn't exist");

    return findProductByCategoryId;
  }

  public async createProduct(productData: CreateProductDto): Promise<Product> {
    if (isEmpty(productData)) throw new HttpException(400, "productData is empty");
    // const hashedPassword = await hash(productData.password, 10);
    const createProductData: Product = await this.products.create({ ...productData });
    return createProductData;
  }

  public async updateProduct(productId: string, productData: CreateProductDto): Promise<Product> {
    if (isEmpty(productData)) throw new HttpException(400, "productData is empty");


    const updateProductById: Product = await this.products.findByIdAndUpdate(productId, { productData });
    if (!updateProductById) throw new HttpException(409, "Product doesn't exist");

    return updateProductById;
  }

  public async deleteProduct(productId: string): Promise<Product> {
    const deleteProductById: Product = await this.products.findByIdAndDelete(productId);
    if (!deleteProductById) throw new HttpException(409, "Product doesn't exist");

    return deleteProductById;
  }
}

export default ProductService;

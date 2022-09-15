import { hash } from 'bcrypt';
import { CreateCartDto } from '@dtos/cart.dto';
import { HttpException } from '@exceptions/HttpException';
import { Cart } from '@interfaces/cart.interface';
import cartModel from '@models/cart.model';
import { isEmpty } from '@utils/util';

class CartService {
  public carts = cartModel;

  public async findAllCarts(): Promise<Cart[]> {
    console.log("findAllCarts");
    const carts: Cart[] = await this.carts.find();
    return carts;
  }

  public async findCartById(cartId: string): Promise<Cart> {
    if (isEmpty(cartId)) throw new HttpException(400, "CartId is empty");

    const findCart: Cart = await this.carts.findOne({ _id: cartId });
    if (!findCart) throw new HttpException(409, "Cart doesn't exist");

    return findCart;
  }

  public async createCart(cartData: CreateCartDto): Promise<Cart> {
    if (isEmpty(cartData)) throw new HttpException(400, "cartData is empty");
    console.log("createCart");
    // const hashedPassword = await hash(cartData.password, 10);
    const createCartData: Cart = await this.carts.create({ ...cartData });
    return createCartData;
  }

  public async updateCart(cartId: string, cartData: CreateCartDto): Promise<Cart> {
    if (isEmpty(cartData)) throw new HttpException(400, "cartData is empty");


    const updateCartById: Cart = await this.carts.findByIdAndUpdate(cartId, { cartData });
    if (!updateCartById) throw new HttpException(409, "Cart doesn't exist");

    return updateCartById;
  }

  public async deleteCart(cartId: string): Promise<Cart> {
    const deleteCartById: Cart = await this.carts.findByIdAndDelete(cartId);
    if (!deleteCartById) throw new HttpException(409, "Cart doesn't exist");

    return deleteCartById;
  }

  public async getCartByUserId(userId: string): Promise<Cart[]> {
    const findCart: Cart[] = await this.carts.find({ user: userId });
    if (!findCart) throw new HttpException(409, "Cart doesn't exist");

    return findCart;
  }
}

export default CartService;

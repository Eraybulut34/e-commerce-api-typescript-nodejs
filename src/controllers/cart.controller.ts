import { NextFunction, Request, Response } from 'express';
import { CreateCartDto } from '@dtos/cart.dto';
import { Cart } from '@interfaces/cart.interface';
import cartService from '@services/cart.service';

class Carts {
  public cartService = new cartService();

  public getCarts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCartsData: Cart[] = await this.cartService.findAllCarts();

      res.status(200).json({ data: findAllCartsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCartById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cartId: string = req.params.id;
      const findOneCartData: Cart = await this.cartService.findCartById(cartId);

      res.status(200).json({ data: findOneCartData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cartData: CreateCartDto = req.body;
      const createCartData: Cart = await this.cartService.createCart(cartData);
      res.status(201).json({ data: createCartData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cartId: string = req.params.id;
      const cartData: CreateCartDto = req.body;
      const updateCartData: Cart = await this.cartService.updateCart(cartId, cartData);

      res.status(200).json({ data: updateCartData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cartId: string = req.params.id;
      const deleteCartData: Cart = await this.cartService.deleteCart(cartId);

      res.status(200).json({ data: deleteCartData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };

  public getCartByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.userId;
      const findCartData: Cart[] = await this.cartService.getCartByUserId(userId);
      res.status(200).json({ data: findCartData, message: 'Get Cart Success' });
    } catch (error) {
      next(error);
    }
  }
}

export default Carts;

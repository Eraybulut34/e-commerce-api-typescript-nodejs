import { Router } from 'express';
import CartsController from '@controllers/cart.controller';
import { CreateCartDto } from '@dtos/cart.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class CartsRoute implements Routes {
  public path = '/carts';
  public router = Router();
  public cartController = new CartsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.cartController.getCarts);
    this.router.get(`${this.path}/:id`, this.cartController.getCartById);
    this.router.post(`${this.path}`, validationMiddleware(CreateCartDto, 'body'), this.cartController.createCart);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateCartDto, 'body', true), this.cartController.updateCart);
    this.router.delete(`${this.path}/:id`, this.cartController.deleteCart);
    this.router.get(`${this.path}/:userId`, this.cartController.getCartByUserId);
  }
}

export default CartsRoute;

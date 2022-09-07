import { Router } from 'express';
import CategorysController from '@controllers/category.controller';
import { CreateCategoryDto } from '@dtos/category.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class CategorysRoute implements Routes {
  public path = '/categories';
  public router = Router();
  public categoryController = new CategorysController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.categoryController.getCategories);
    this.router.get(`${this.path}/:id`, this.categoryController.getCategoryById);
    this.router.post(`${this.path}`, validationMiddleware(CreateCategoryDto, 'body'), this.categoryController.createCategory);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateCategoryDto, 'body', true), this.categoryController.updateCategory);
    this.router.delete(`${this.path}/:id`, this.categoryController.deleteCategory);
  }
}

export default CategorysRoute;

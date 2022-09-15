import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import ProductRoute from '@routes/product.route';
import CategoryRoute from '@routes/category.route';
import CartsRoute from '@routes/cart.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(),new ProductRoute(),new CategoryRoute(), new CartsRoute()]);

app.listen();
 
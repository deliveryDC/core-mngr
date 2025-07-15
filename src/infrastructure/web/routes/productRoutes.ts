import { Router } from 'express';
import { PostgresProductRepository } from '../../db/PostgresProductRepository';
import { GetAllProducts } from '../../../application/usecases/product/GetAllProducts';
import { ProductController } from '../controllers/ProductController';

const router = Router();
const productRepo = new PostgresProductRepository();
const getAllProducts = new GetAllProducts(productRepo);
const productController = new ProductController(getAllProducts);

router.get('/products', productController.getAll.bind(productController));

export default router;
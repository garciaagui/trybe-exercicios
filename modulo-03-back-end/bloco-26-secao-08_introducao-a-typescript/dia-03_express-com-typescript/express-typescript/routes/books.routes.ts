import { Router } from 'express';
import BookController from '../controllers/book.controller';
// import validationBook from '../middlewares/books.middleware';

const router = Router();

const bookController = new BookController();

const booksSlashId = '/books/:id';

router.get('/books', bookController.getAll);
router.get(booksSlashId, bookController.getById);
router.post('/books', bookController.create);
router.put(booksSlashId, bookController.update);
router.delete(booksSlashId, bookController.remove);

export default router;
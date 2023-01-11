import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import { BadRequestError, NotFoundError } from 'restify-errors';

const properties = ['name', 'email', 'password'];

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  // // os próximos três métodos serão nossas validações
  // static validateProperties(book: Book): [boolean, string | null] {
  //   for (let i = 0; i < properties.length; i += 1) {
  //     if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
  //       return [false, properties[i]];
  //     }
  //   }
  //   return [true, null];
  // }

  // static validateValues(book: Book): [boolean, string | null] {
  //   const entries = Object.entries(book);
  //   for (let i = 0; i < entries.length; i += 1) {
  //     const [property, value] = entries[i];
  //     if (!value) {
  //       return [false, property];
  //     }
  //   }
  //   return [true, null];
  // }

  // static validationBook(book: Book): void | string {
  //   let [valid, property] = BookService.validateProperties(book);

  //   if (!valid) {
  //     return `O campo ${property} é obrigatório.`;
  //   }
  //   [valid, property] = BookService.validateValues(book);

  //   if (!valid) {
  //     return `O campo ${property} não pode ser nulo ou vazio.`;
  //   }
  // }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  // public async getById(id: number): Promise<Book> {
  //   const book = await this.model.getById(id);
  //   return book;
  // }

  // public create(book: Book): Promise<Book> {
  //   // chamamos o método validationBook
  //   const isValidBook = BookService.validationBook(book);

  //   if (typeof isValidBook === 'string') {
  //     // aqui estamos jogando o erro para o nosso middleware de erro fazer o tratamento e dar a resposta da requisição
  //     throw new BadRequestError(isValidBook);
  //   }
  //   // depois de todas as verificações chamamos a camada de model
  //   return this.model.create(book);
  // }

  // public async update(id: number, book: Book): Promise<void> {
  //   const isValidBook = BookService.validationBook(book);

  //   if (typeof isValidBook === 'string') {
  //     throw new BadRequestError(isValidBook);
  //   }

  //   const bookFound = await this.model.getById(id);

  //   if (!bookFound) {
  //     throw new NotFoundError('Book not found!');
  //   }

  //   return this.model.update(id, book);
  // }

  // public async remove(id: number): Promise<void> {
  //   const bookFound = await this.model.getById(id);
  //   if (!bookFound) {
  //     throw new NotFoundError('Book not found!');
  //   }

  //   this.model.remove(id);
  // }
}

export default UserService;
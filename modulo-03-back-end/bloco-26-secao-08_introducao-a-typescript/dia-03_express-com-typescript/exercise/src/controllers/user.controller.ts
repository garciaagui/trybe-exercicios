import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(statusCodes.OK).json(users);
  };

  // public getById = async (req: Request, res: Response) => {
  //   const id = parseInt(req.params.id, 10);
  //   const book = await this.userService.getById(id);

  //   if (!book) {
  //     return res.status(statusCodes.NOT_FOUND)
  //       .json({ message: 'Book not found!' });
  //   }

  //   res.status(statusCodes.OK).json(book);
  // }

  // public create = async (req: Request, res: Response) => {
  //   const book = req.body;

  //   const bookCreated = await this.userService.create(book);
  //   res.status(statusCodes.CREATED).json(bookCreated);
  // };

  // public update = async (req: Request, res: Response) => {
  //   const id = Number(req.params.id);
  //   const book = req.body;
  //   await this.userService.update(id, book);

  //   res.status(statusCodes.NO_CONTENT).end();
  // };

  // public remove = async (req: Request, res: Response) => {
  //   const id = Number(req.params.id);
  //   await this.userService.remove(id);

  //   res.status(statusCodes.NO_CONTENT).end();
  // };
}

export default UserController;
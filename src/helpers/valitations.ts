import { NotFoundException } from '@nestjs/common';
export const existFindOne = (row: object): void => {
  if (!row) throw new NotFoundException('No se econtro el registro');
};

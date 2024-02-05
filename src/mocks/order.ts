import { clients } from './client';

export const orders = [
  {
    id: 1,
    quantity: 2,
    dispatched: true,
    combo: '',
    clientId: clients[0].id,
  },
  {
    id: 2,
    quantity: 1,
    dispatched: false,
    combo: '', // TODO: complete this
    clientId: clients[1].id,
  },
  {
    id: 3,
    quantity: 1,
    dispatched: false,
    combo: '', // TODO: complete this
    clientId: clients[2].id,
  },
];

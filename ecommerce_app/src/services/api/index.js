/* Basic CRUD:
index  <- GET all items
single <- GET single item by id
create <- POST an item
update <- PUT data to an item
remove <- DELETE an item
Specific:
singleByEmail
removeAll */

import { get, post, put, destroy } from 'config/api';
export const Users = {
  index: () =>
    get('/users'),
  single: (id) =>
    get(`/users/${id}`),
  singleByEmail: (email) =>
    get(`/users?email=${email}`),
  create: (params) =>
    post('/users', params),
  update: (id, params) =>
    put(`/users/${id}`, params),
  remove: (id) =>
    destroy(`/users/${id}`),
}
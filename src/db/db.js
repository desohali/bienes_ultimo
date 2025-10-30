import Dexie from 'dexie';

export const db = new Dexie('homero');
db.version(1).stores({
  bienes: "++id, codigoInterno, codigoPatrimonial",// INDICES PARA BUSQUEDAS
});

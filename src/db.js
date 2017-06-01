import Dexie from 'dexie';

const db = new Dexie('carrot-admin-panel');
db.version(1).stores({
  profiles: "++id,name,carrots"
});

export default db;
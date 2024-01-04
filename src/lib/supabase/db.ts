import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.log('🔴 데이터베이스 URL이 존재하지 않습니다.');
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });
const migrateDb = async () => {
  try {
    console.log('🟠 클라이언트 마이그레이션하는중');
    await migrate(db, { migrationsFolder: 'migrations' });
    console.log('🟢 성공적으로 마이그레이션되었습니다.');
  } catch (error) {
    console.log('🔴 클라이언트 마이그레이션 중 에러 발생');
  }
};
migrateDb();
export default db;

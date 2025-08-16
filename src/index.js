import dotenv from 'dotenv';
import {connectToDatabase} from '../src/db/db_connection.js'; 


dotenv.config();


connectToDatabase();

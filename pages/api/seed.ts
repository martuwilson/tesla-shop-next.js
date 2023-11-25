import { db, seedDatabase } from '@/database'
import { Product } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if( process.env.NODE_ENV === 'production' ) {
        return res.status(400).json({ message: 'No se puede ejecutar en producción' })
    } 


    await db.connect();
    await Product.deleteMany({}); // delete all products from database
    await Product.insertMany(seedDatabase.initialData.products); // insert products from products.ts

    await db.disconnect();

    res.status(200).json({ message: 'Proceso realizado correctamente' })
}
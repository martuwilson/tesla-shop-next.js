import { db } from '@/database'
import { IProduct } from '@/interfaces'
import { Product } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
| {message: string}
| {products: IProduct[]}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    switch (req.method) {
        case 'GET':
            return getProducts(req, res)
        default:
            return res.status(405).json({ message: 'Method not allowed' })
    }

}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    await db.connect();
    const products: IProduct[] = await Product.find({})
                                                .select('title images price inStock slug -_id')
                                                .lean();
    await db.disconnect();

    res.status(200).json({ products });
};

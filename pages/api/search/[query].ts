import { db } from '@/database'
import { IProduct } from '@/interfaces'
import { Product } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
|   {message: string}
|   {products: IProduct[]}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    

    switch (req.method) {
        case 'GET':
            return searchProducts(req, res)
        default:
            return res.status(405).json({ message: 'Method not allowed' })
    }


}


const searchProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    try {
        let {query = ''} = req.query

    if(query.length === 0) {
        return res.status(400).json({message: 'Invalid query'})
    }

    query = query.toString().toLowerCase()

    await db.connect()

    const products: IProduct = await Product.find({
            $text: { $search: query }
        })
        .select('title images price inStock slug -_id')
        .lean();

    await db.disconnect()

    return res.status(200).json({ products: [products] });

    }
    catch (err) {
        console.error('Error fetching products by query:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
    
}


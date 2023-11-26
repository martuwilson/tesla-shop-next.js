import { db } from '@/database';
import { IProduct } from '@/interfaces';
import { Product } from '@/models';
import type {NextApiRequest, NextApiResponse} from 'next';

type Data =
| {message: string}
| {product: IProduct[]}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
   
    switch (req.method) {
        case 'GET':
            return getProductsBySlug(req, res)
        default:
            return res.status(405).json({message: 'Method not allowed'})
    }

}

async function getProductsBySlug(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        await db.connect();
        const { slug } = req.query;

        const product: IProduct | null = await Product.findOne({ slug }).lean();

        await db.disconnect();

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.json({ product: [product] });
    } catch (error) {
        console.error('Error fetching product by slug:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


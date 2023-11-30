import type { NextApiRequest, NextApiResponse } from 'next'
import { get_xFURY_USD_Price } from '../../../services/pool'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
    let price = await get_xFURY_USD_Price()
    res.status(200).json({ 'fury-xfury': { 'usd': price } })
}
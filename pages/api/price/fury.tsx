import type { NextApiRequest, NextApiResponse } from 'next'
import { get_FURY_USD_Price } from '../../../services/pool'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
    let price = await get_FURY_USD_Price()
    res.status(200).json({ 'fury': { 'usd': price } })
}
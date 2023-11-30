import poolData from 'public/pools_list.mainnet.json'
import { rpc } from 'public/chain_info.mainnet.json'
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate"

const STABLECOIN_POOLS = ['FURY-USK']

export async function getPoolRatio(pool_id: string): Promise<number> {
    const pool = poolData.pools.find(p => p.pool_id == pool_id)
    if (!pool) {
        return 0
    }

    let client = await CosmWasmClient.connect(rpc)
    const swap_info = await client.queryContractSmart(pool.swap_address, { info: {} })
    client.disconnect()

    if (swap_info.token1_reserve != 0) {
        const t = Number(swap_info.token2_reserve) / Number(swap_info.token1_reserve)
        return Number(t.toPrecision(6))
    }
    return 0
}

export async function get_FURY_USD_Price(): Promise<number> {
    let sum = 0
    for (let i = 0;i < STABLECOIN_POOLS.length;i++) {
        sum += await getPoolRatio(STABLECOIN_POOLS[i])
    }
    return sum / STABLECOIN_POOLS.length
}

export async function get_xFURY_USD_Price(): Promise<number> {
    const ratio = await getPoolRatio('FURY-xFURY')
    if (ratio == 0) {
        return 0
    }
    const fury_usd_price = await get_FURY_USD_Price()
    const xfury_price = (fury_usd_price / ratio).toPrecision(6)
    return Number(xfury_price)
}
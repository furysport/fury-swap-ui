import { TokenInfo } from 'queries/usePoolsListQuery'

import { fetchDollarPriceByTokenIds, fetchDollarPriceFromFurySwapPool } from './fetchDollarPriceByTokenIds'
// import { pricingServiceIsDownAlert } from './pricingServiceIsDownAlert'

export async function tokenDollarValueQuery(tokenIds: Array<TokenInfo['id']>) {
  if (!tokenIds?.length) {
    throw new Error('Provide token ids in order to query their price')
  }

  try {
    let prices = await fetchDollarPriceByTokenIds(tokenIds)

    // todo: usd prices for fury tokens are hardcoded for test purpose since they are not registered on coingecko
    if (tokenIds.findIndex((tokenId) => tokenId === 'fury') != -1) {
      let fury_price = await fetchDollarPriceFromFurySwapPool('fury');
      prices = { ...prices, ...fury_price }
    }

    if (tokenIds.findIndex((tokenId) => tokenId === 'fury-xfury') != -1) {
      let xfury_price = await fetchDollarPriceFromFurySwapPool('fury-xfury');
      prices = { ...prices, ...xfury_price }
    }

    // console.log(prices)
    return tokenIds.map((id): number => prices[id]?.usd || 0)
  } catch (e) {
    // pricingServiceIsDownAlert()

    throw e
  }
}

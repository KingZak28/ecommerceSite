import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopItemSets = createSelector(
  [selectShop],
  (shop) => shop.itemSets
);

export const selectShopItemSetsForPreview = createSelector(
  [selectShopItemSets],
  (itemSets) => Object.keys(itemSets).map((key) => itemSets[key])
);

export const selectItemSetType = memoize((itemSetUrlParam) =>
  createSelector([selectShopItemSets], (itemSet) => itemSet[itemSetUrlParam])
);

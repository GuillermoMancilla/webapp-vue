const url = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url}/assets?limit=10`)
    .then(res => res.json())
    .then(res => res.data);
}

function getAsset(id) {
  return fetch(`${url}/assets/${id}`)
    .then(res => res.json())
    .then(res => res.data)
}

function getAssetHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data)
}

export default {
  getAssets,
  getAssetHistory,
  getAsset
};

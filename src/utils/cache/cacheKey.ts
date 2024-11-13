const SYSTEM_CACHE_NAME = "playlet";

/** 缓存数据时用到的 Key */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class CacheKey {
  static readonly TOKEN = `${SYSTEM_CACHE_NAME}-token`;
}

export default CacheKey;

import gcoord from 'gcoord'

export interface MapCoordinates {
  lng: number
  lat: number
}

/**
 * @description 84坐标系转百度坐标系
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Array<number, number>} 经度/纬度
 */
export const wgs84tobd09 = (lng: number, lat: number) => {
  if (!lng || !lat) {
    return [lng, lat]
  }

  const data = gcoord.transform([lng, lat], gcoord.WGS84, gcoord.BD09)
  if (Array.isArray(data)) {
    return [Number(data[0]), Number(data[1])]
  }
  return [lng, lat]
}

/**
 * @description 84坐标系转高德坐标系
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Array<number, number>} 经度/纬度
 */
export const wgs84togcj02 = (lng: number, lat: number) => {
  if (!lng || !lat) {
    return [lng, lat]
  }

  const data = gcoord.transform([lng, lat], gcoord.WGS84, gcoord.GCJ02)
  if (Array.isArray(data)) {
    return [Number(data[0]), Number(data[1])]
  }

  return [lng, lat]
}

/**
 * @description 高德坐标系转84坐标系
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Array<number, number>} 经度/纬度
 */
export const gcj02towgs84 = (lng: number, lat: number) => {
  if (!lng || !lat) {
    return [lng, lat]
  }

  const data = gcoord.transform([lng, lat], gcoord.GCJ02, gcoord.WGS84)
  if (Array.isArray(data)) {
    return [Number(data[0]), Number(data[1])]
  }

  return [lng, lat]
}

/**
 * @description 将经纬度格式转换为度分秒格式
 * @param value 经/纬度
 * @returns 
 */
export const formatDegree = (value: number) => {
  value = Math.abs(value)
  const v1 = Math.floor(value) // 度
  const v2 = Math.floor((value - v1) * 60) // 分
  const v3 = Math.round(((value - v1) * 3600) % 60) // 秒
  return v1 + '°' + v2 + "'" + v3 + '"'
}

/**
 * @description 获取两点之间的中间点
 * @param point1 
 * @param point2 
 * @returns 
 */
export const getIntermediatePoint = (point1: MapCoordinates, point2: MapCoordinates) => {
  const lngca = (Math.max(point1.lng, point2.lng) - Math.min(point1.lng, point2.lng)) / 2
  const latca = (Math.max(point1.lat, point2.lat) - Math.min(point1.lat, point2.lat)) / 2
  const lngcenter = Math.min(point1.lng, point2.lng) + lngca
  const latcenter = Math.min(point1.lat, point2.lat) + latca
  return {
    lng: lngcenter,
    lat: latcenter
  }
}

/**
 * @description 在字符串指定位置插入新字符串
 * @param source 源字符串
 * @param start 插入位置
 * @param newStr 规定要插入的新字符
 * @returns 
 */
export const insertStr = (source: string, start: number, newStr: string) => {
  return source.slice(0, start) + newStr + source.slice(start)
}

/**
 * @description 在经纬度数值最后7位前添加小数点
 * @param lng 
 * @param lat 
 * @returns 
 */
export const handleLatLngValue = (lng: number, lat: number) => {
  const lngStr = lng + ''
  const latStr = lat + ''
  return {
    lng: parseFloat(insertStr(lngStr, lngStr.length - 7, '.')),
    lat: parseFloat(insertStr(latStr, latStr.length - 7, '.'))
  }
}

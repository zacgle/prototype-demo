import request from '@/utils/request-prototype'

export function getTopology() {
  return request({
    url: '/topo/',
    method: 'get'
  })
}
export function startNet() {
  return request({
    url: '/net/',
    method: 'get'
  })
}
export function endNet() {
  return request({
    url: '/end/',
    method: 'get'
  })
}
export function sendPkg() {
  return request({
    url: '/newsend/',
    method: 'get'
  })
}
export function getDrlPath() {
  return request({
    url: '/path/',
    method: 'get'
  })
}
export function netOnOff() {
  return request({
    url: '/netstatus/',
    method: 'get'
  })
}
export function getGlobalDelay() {
  return request({
    url: '/delay/',
    method: 'get'
  })
}
export function fault(params) {
  return request({
    url: '/fault/',
    method: 'get',
    params
  })
}
export function deleteItem(params) {
  return request({
    url: '/test/',
    method: 'get',
    params
  })
}
export function addItem(params) {
  return request({
    url: '/test/',
    method: 'get',
    params
  })
}

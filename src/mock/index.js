import Mock from 'mockjs'
import TableAPI from './table'
import ProfileAPI from './profile'
import LoginAPI from './login'
import Company from './company'

Mock.setup({
  //timeout: '1000'
})

Mock.mock(/\/table\/list\.*/, 'get', TableAPI.list)
Mock.mock(/\/frame\/profile/, 'post', ProfileAPI.profile)
Mock.mock(/\/frame\/login/, 'post', LoginAPI.login)
//模拟请求其企业数据
//Mock.mock(/\/company\/+/, 'get', Company.sassDetail) //根据id查询
//Mock.mock(/\/company/, 'get', Company.list) //访问企业列表


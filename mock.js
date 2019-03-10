var Mock = require('mockjs')
var fs = require('fs')

var data = new Mock.mock({
	'bannar|4': [
		{
			'id|+1': 1,
			'bannar_img': '@image(375x140, @color)'
		}
	],
	'categories|10': [
		{
			'id|+1': 1,
			'name': '@cword(3, 5)',
			'category_img': '@image(320x76, @color)',
			'color': '@color',
			// 子分类
			'cids|4': [
				{
					'name': '@cword(2,6)'
				}
			],
			// 保存分类对应的商品数据
			'products': []
		}
	],
	'products|300-400': [
		{
			'id|+1': 1,
			'categoryId|1-10': 10,
			'cidIndex|0-3': 10,
			// 商品的图片
			'imgs': {
				'min': '@image(80x80, @color, @cname)',
				'big': '@image(300x300, @color, @cname)'
			},
			'name': '@cword(3,10)',
			'price|1-100.1': 10,
			// 商品的单位
			'unit|10-1000': 10,
			// 商品的品牌
			'brand': '@cword(2, 4)',
			// 保质期
			'expiration_date|1-3.1': 10,
			// 数量
			'num': 0,
			// 商品详情
			'details': '@cparagraph()'
		}
	],
	// 目前支持送货的城市列表
  // "citys": ["北京市", "上海市", "广州市", "深圳市", "杭州市"],
  "citys": [
    {
      "city": "北京市",
      "title": "天安门广场",
      "address": "北京市东城区东长安街",
      "longitude": 116.397827,
      "latitude": 39.90374
    },
    {
      "city": "深圳市",
      "title": "腾讯大厦",
      "address": "广东省深圳市南山区深南大道10000号",
      "longitude": 113.934528,
      "latitude": 22.540503
    },
    {
      "city": "广州市",
      "name": "恒大中心",
      "address": "广东省广州市天河区黄埔大道西78",
      "longitude": 113.32728,
      "latitude": 23.12665
    },
    {
      "city": "上海市",
      "name": "外滩",
      "address": "上海市黄浦区中山东一路(临黄浦江)",
      "longitude": 121.493706,
      "latitude": 31.23182
    },
    {
      "city": "杭州市",
      "name": "西湖风景名胜区",
      "address": "浙江省杭州市西湖区风景名胜区龙井路1号",
      "longitude": 120.125068,
      "latitude": 30.225363
    }
	],
	
  // 用户信息表
  /* 
    {
      id,
      phone,
      selectSite, 当前选择的地址(obj)
    }
  */
	'users': [],
	
  // 存储所有用户的购物车表
  /* 
    {
      id: 商品在购物中表的编号(自动生成)
      product_id: 商品的id 
      userId: 用户id ,
      num: 商品的数量,
      product_img: 商品的图片,
      product_name: 商品的名称,
      product_price: 商品的价格,
      checked: 是否选择
    }
  */
	'carts': [],
	
  // 存储所有用户的地址信息
  /* 
    {
      id: 地址在地址表中的编号
      userId: 用户id，地址所属的用户
      linkman: 联系人，
      sex: 性别，
      phone: 手机号码，
      city: 城市,
      site: 地区，
      detailSite: 详细地址,->百度地图
      longitude: 坐标数据x
      latitude: 坐标数据y
    }
  */
	'addresses': [],
	
  // 存储所有用户的收藏列表
  /* 
    {
      id: 商品在收藏表中的编号
      userId: 用户id, 收藏的商品所属的用户 
      product_id: 商品的id
      img(小图): 商品图片 
      name: 商品名称
      unit: 商品的单位 
      price: 商品的价格 
    }
  */
  'favorites': [],
  // 存储所有用户的订单信息
  /* 
    {
      id: 编号
      userId: 用户id, 收藏的商品所属的用户 
      products: 购买的商品列表
      orderNo: 订单编号
      receive_info: 收货信息
    }
  */
  'orders': []
})

fs.writeFile('db.json', JSON.stringify(data, null, 2), function () {
	console.log('写入成功')
})
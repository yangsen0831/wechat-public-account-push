/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'push-plus',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '四川',
  CITY: '泸州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'cacf6a30d76a46709242111504f8c0ea',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1998', date: '07-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '奥利奥', year: '2018', date: '04-01',
        },
        {
          type: '生日', name: '柠檬茶', year: '2022', date: '01-15',
        },
        {
          type: '节日', name: '相识纪念日', year: '2017', date: '08-31',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-08-31' },
        // 奥利奥在世天数
        { keyword: 'aoliao_day', date: '2018-04-01' },
        // 陪伴了奥利奥的天数
        { keyword: 'accompany_aoliao_day', date: '2018-05-29' },
        // 柠檬茶在世天数
        { keyword: 'ningmengcha_day', date: '2022-01-15' },
        // 陪伴了柠檬茶的天数
        { keyword: 'accompany_ningmengcha_day', date: '2022-05-10' }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0001',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'f2c4ddde45da4eddb9772669ba0fb190',
    }
  ],

}

module.exports = USER_CONFIG


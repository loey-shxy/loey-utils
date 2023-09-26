import * as mqtt from 'mqtt'

export default class Mqtt {
  client: mqtt.MqttClient | null = null
  connectUrl: string = ''
  topics: {[prop: string]: string | string[]} = {}

  private options: mqtt.IClientOptions = {
    clean: true, // true: 清除会话，false: 保留会话
    connectTimeout: 4000, // 超时时间
    // 认证信息
    clientId: 'mqtt' + Math.floor(Math.random() * 9000 + 1000),
    username: '',
    password: ''
  }

  constructor(connectUrl: string, topics: {[prop: string]: string | string[]}) {
    this.connectUrl = connectUrl
    this.topics = topics
    this.connect()
  }

  // mqtt 连接
  async connect() {
    if (this.client) {
      console.warn('MQTT: 客户端已存在')
    }
    this.client = mqtt.connect(this.connectUrl, this.topics)
    this._addBasicEventListener()
  }

  private _addBasicEventListener() {
    this.client!.on('connect', this._onConnect)
    this.client!.on('reconnect', this._onReconnect)
    this.client!.on('error', this._onError)

  }

  private _onConnect(packet: mqtt.IConnackPacket) {
    console.log('MQTT: 连接信息', packet)
  }

  private _onReconnect() {
    console.log('MQTT: 正在重连')
  }

  private _onError(err: Error) {
    console.log('MQTT: 错误信息', err)
  }

  /**
   * @description 关闭mqtt
   * @returns 
   */
  end(): Promise<any> {
    return new Promise((resolve) => {
      this.client?.end(true, {}, () => {
        console.log('MQTT: 关闭成功')
        this.client = null
        resolve(null)
      })
    })
  }

  /**
   * @description 消息订阅
   * @param param topic的可变部分
   * @param type 订阅类型
   * @param cb 订阅回调
   * @returns void
   */
  subscribe(
    param: string | string[],
    type: string,
    cb?: mqtt.ClientSubscribeCallback
  ) {
    if (!this.client) {
      const error = new Error('client is undefined')
      cb && cb(error, [])
      return
    }

    let topic: string | string[] = ''
    const [prefix, suffix] = this.topics[type]
    if (Array.isArray(param)) {
      topic = param.map((item) => `/${prefix}/${item}/${suffix ? '/' + suffix : ''}`)
    } else {
      topic = `/${prefix}/${param}${suffix ? '/' + suffix : ''}`
    }
    this.client.subscribe(topic, cb)
  }

  /**
   * @description 取消订阅
   * @param param 
   * @param type 
   * @param cb 
   * @returns 
   */
  unSubstribe(
    param: string | string[],
    type: string,
    cb?: mqtt.PacketCallback
  ) {
    if (!this.client) {
      const error = new Error('client is undefined')
      cb && cb(error)
      return
    }

    let topic: string | string[] = ''
    const [prefix, suffix] = this.topics[type]
    if (Array.isArray(param)) {
      topic = param.map((item) => `/${prefix}/${item}/${suffix ? '/' + suffix : ''}`)
    } else {
      topic = `/${prefix}/${param}${suffix ? '/' + suffix : ''}`
    }
    this.client.unsubscribe(topic, {} as mqtt.IClientSubscribeOptions, cb)
  }
}
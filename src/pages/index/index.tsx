import { FC } from 'react'
import { navigateTo, scanCode } from '@tarojs/taro';
import { View, Text, Image, ITouchEvent } from '@tarojs/components';
import btn01 from './images/button-01.png';
import btn02 from './images/button-02.png';
import btn03 from './images/button-03.png';
import btn04 from './images/button-04.png';
import btn05 from './images/button-05.png';
import btn06 from './images/button-06.png';
import btn07 from './images/button-07.png';
import './index.less'

const Index: FC<{}> = () => {

  const toSelfClick = (event: ITouchEvent) => {
    event.preventDefault();
    navigateTo({
      url: '../self/self'
    })
  }

  const onScanClick = async (event: ITouchEvent) => {

    event.preventDefault();

    try {
      await scanCode({
        onlyFromCamera: true,
        complete: () => {
          navigateTo({
            url: '../scan/scan'
          });
        }
      });
    } catch (error) {
      navigateTo({
        url: '../scan/scan'
      });
    }
  };

  return <View className='index'>
    <View className="caption">
      <Text>北京健康宝</Text>
    </View>
    <View className="alert">
      <Text>北京健康宝更新，升级优化了</Text>
      <View className="origin-ico">!</View>
    </View>
    <View className="fn-button">
      <Image className="ico" style={{ width: '60rpx', height: '60rpx' }} src={btn01} />
      <Text className="text">崔玥</Text>
    </View>
    <View onClick={onScanClick} className="fn-button">
      <Image className="ico" style={{ width: '60rpx', height: '60rpx' }} src={btn02} />
      <Text className="text">本人信息扫码登记</Text></View>
    <View onClick={toSelfClick} className="fn-button">
      <Image className="ico" style={{ width: '60rpx', height: '60rpx' }} src={btn03} />
      <Text className="text">本人健康码自查询</Text></View>
    <View className="fn-button">
      <Image className="ico" style={{ width: '60rpx', height: '60rpx' }} src={btn04} />
      <Text className="text">老幼健康码助查询</Text></View>
    <View className="fn-button">
      <Image className="ico" style={{ width: '60rpx', height: '60rpx' }} src={btn05} />
      <Text className="text">他人健康码代查询</Text></View>
    <View className="fn-button">
      <Image className="ico" style={{ width: '60rpx', height: '60rpx' }} src={btn06} />
      <Text className="text">核酸疫苗服务查询</Text></View>
    <View className="fn-button">
      <Image className="ico" style={{ width: '60rpx', height: '60rpx' }} src={btn07} />
      <Text className="text">到访人信息登记薄</Text></View>
    <View className="fn-button">
      <Image className="ico" style={{ width: '60rpx', height: '60rpx' }} src={btn01} />
      <Text className="text">京&nbsp;&nbsp;&nbsp;&nbsp;心&nbsp;&nbsp;&nbsp;&nbsp;相&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;助</Text>
    </View>
    <View className="b-text">
      北京市大数据中心
    </View>
  </View>
}

export default Index;
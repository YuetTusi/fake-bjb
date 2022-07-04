import dayjs from 'dayjs';
import { navigateBack, useDidShow } from '@tarojs/taro';
import { FC, useEffect, useState } from 'react';
import { View, Image, Text, Button, Label, ITouchEvent } from '@tarojs/components';
import handsome from '../../images/handsome.jpg';
import bao from '../../images/button-01.png';
import qrIcon from './images/qr-01.png';
import greenCode from './images/green-code.png';
import crossIco from './images/cross-ico.png';
import neddleIco from './images/neddle-ico.png';
import './self.less'

var tick: NodeJS.Timer | null = null;

const Self: FC<{}> = () => {

    const [time, setTime] = useState<string>('00:00:00');

    useEffect(() => {
        tick = setInterval(() => {
            setTime(dayjs().format('HH:mm:ss'))
        }, 1000);

        return () => {
            if (tick !== null) {
                clearInterval(tick);
            }
        }
    }, []);

    useDidShow(() => {
        // const { router } = getCurrentInstance();
        // if (router) {
        //     setType(router.params.type!);
        // }
    });

    const onReturnClick = (event: ITouchEvent) => {
        event.preventDefault();
        navigateBack();
    }

    return <View className="result">
        <View className="app-caption">北京健康宝</View>
        <View className="panel">
            <View className="info-bar">
                <View className="bao-ico"><Image style={{ width: '24px', height: '24px' }} src={bao} /></View>
                <View className="time-box">
                    <View>{dayjs().format('YYYY年MM月DD日')}</View>
                    <View>{time}</View>
                </View>
                <View className="qr-ico">
                    <Image src={qrIcon} style={{ width: '40px', height: '25px' }} />
                </View>
            </View>
            <View className="photo">
                <View className="top" />
                <View className="right" />
                <View className="bottom" />
                <View className="left" />
                <Image style={{ width: '100%', height: '100%' }} src={handsome} />
            </View>
            <View className="code-box">
                <Image style={{ width: '36px', height: '36px' }} src={greenCode} />
                <Text className="text">未见异常</Text>
            </View>
            <View className="count-box">
                <View className="row">
                    <View className="left">
                        <Image style={{ width: '24px', height: '24px' }} src={crossIco} />
                        <Text className="text">核酸</Text>
                    </View>
                    <View className="center">
                        <Text className="blue">阴性</Text>
                    </View>
                    <View className="right">
                        <Text className="gray">时间</Text>
                        <Text className="blue warn">2</Text>
                        <Text className="gray">天</Text>
                    </View>
                </View>
                <View className="split" />
                <View style={{ padding: "4px 0" }} className="row">
                    <View className="left">
                        <Image style={{ width: '24px', height: '24px' }} src={neddleIco} />
                        <Text className="text">疫苗</Text>
                    </View>
                    <View className="center" />
                    <View className="right">
                        <Text className="blue">完成基础免疫</Text>
                    </View>
                </View>
            </View>
        </View>
        <View className="panel">
            <View className="private">
                <View className="item">
                    <Label className="label">姓名</Label>
                    <Text>崔*</Text>
                </View>
                <View className="item">
                    <Label className="label">身份证号</Label>
                    <Text>11**************19</Text>
                </View>
                <View className="item">
                    <Label className="label">查询时间</Label>
                    <Text>{dayjs().format('MM-DD HH:mm')}</Text>
                </View>
                <View className="item">
                    <Label className="label">失效时间</Label>
                    <Text style="color:#d93045">{dayjs().format('MM-DD 24:00')}</Text>
                </View>
            </View>
        </View>
        <View className="return-box">
            <Button onClick={onReturnClick} className="return-button" type="primary" >
                返回首页
            </Button>
        </View>
    </View>
}

export default Self;
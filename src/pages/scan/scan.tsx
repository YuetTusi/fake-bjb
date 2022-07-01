import dayjs from 'dayjs';
import { FC, useEffect, useState } from 'react';
import { View, Image, Text } from '@tarojs/components';
import test from './images/button-01.png';
import qrIcon from './images/qr-01.png';
import greenCode from './images/green-code.png';
import './scan.less'

var tick: NodeJS.Timer | null = null;

const Scan: FC<{}> = () => {

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

    return <View className="result">
        <View className="panel">
            <View className="info-bar">
                <View className="bao-ico"><Image style={{ width: '24px', height: '24px' }} src={test} /></View>
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
                <Image style={{ width: '100%', height: '100%' }} src={test} />
            </View>
            <View className="code-box">
                <Image style={{ width: '36px', height: '36px' }} src={greenCode} />
                <Text className="text">未见异常</Text>
            </View>
        </View>

    </View>
}

export default Scan;
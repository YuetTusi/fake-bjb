import dayjs from 'dayjs';
import { navigateBack, useDidShow, createInnerAudioContext, InnerAudioContext } from '@tarojs/taro';
import { FC, useEffect, useState } from 'react';
import { View, Image, Text, Button, ITouchEvent, Icon } from '@tarojs/components';
import handsome from '../../images/handsome.jpg';
import borderSvg from './images/border.svg';
import bao from '../../images/button-01.png';
import qrIcon from './images/qr.png';
import greenCode from './images/green-code.png';
import voice from '../../audio/181d74bb408_4cb.m4a';
import './scan.less';

var audioCtx: InnerAudioContext;
var tick: NodeJS.Timer | null = null;

const Scan: FC<{}> = () => {

    const [time, setTime] = useState<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'));

    useEffect(() => {
        (() => {
            if (new Date().getDate() === 28) {
                audioCtx = createInnerAudioContext();
                audioCtx.autoplay = true;
                audioCtx.src = voice;
            }
        })();
    }, []);

    useEffect(() => {
        tick = setInterval(() => {
            setTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
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
                <View className="bao-ico">
                    <Image style={{ width: '24px', height: '24px' }} src={bao} />
                </View>
                <View className="id-box">
                    <View>崔*</View>
                    <View>11*************19</View>
                </View>
                <View className="qr-ico">
                    <Image src={qrIcon} style={{ width: '25px', height: '25px' }} />
                </View>
            </View>
            <View className="border-view">
                <View className="photo-panel">
                    <Image src={borderSvg} style={{ width: '200px', height: '200px' }} />
                    <Image className="handsome" src={handsome} />
                </View>
            </View>
            <View className="code-box">
                <Image style={{ width: '36px', height: '36px' }} src={greenCode} />
                <Text className="flash-text">扫码未见异常</Text>
                <Icon size='20' type="info_circle" color="#fff" style={{ marginLeft: '1rpx' }} />
            </View>
            <View className="time-box">
                {time}
            </View>
            <View className="split" />
            <View className="count-box">
                <View className="left">
                    <View className="pur-box">
                        <View className="pos">
                            <View className="bg-ico hs"></View>
                        </View>
                        <View className="text-box">
                            <View className="hor">
                                <Text className="blue warn-left">阴性</Text>
                                <View style={{ position: 'relative', display: 'inline' }}>
                                    <Text className="blue warn">1</Text>
                                </View>
                                <Text className="blue warn-right">天</Text>
                            </View>
                            <View className="line" />
                            <View className="gray">
                                <Text>核酸</Text>
                                <Icon size='20' type="info_circle" color="gray" style={{ marginLeft: '4rpx' }} />
                            </View>
                        </View>
                    </View>
                </View>
                <View className="right">
                    <View className="pur-box">
                        <View className="pos">
                            <View className="bg-ico ym"></View>
                        </View>
                        <View className="text-box">
                            <View className="hor">
                                <Text className="blue">完成基础免疫</Text>
                            </View>
                            <View className="line" />
                            <View className="gray">
                                <Text>疫苗</Text>
                                <Icon size='20' type="info_circle" color="gray" style={{ marginLeft: '4rpx' }} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <View className="return-box">
            <Button onClick={onReturnClick} type="default" >
                返回首页
            </Button>
        </View>
        <View className="copyright-box">
            <Text>北京市大数据中心</Text>
        </View>
    </View>
}

export default Scan;
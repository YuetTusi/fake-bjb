import { FC, useEffect } from 'react';
import { View } from '@tarojs/components';
import './border.less';

const DotBorder: FC<{ pos: string }> = ({ pos }) => {

    let style: Record<string, any> = {};

    useEffect(() => {

        switch (pos) {
            case 'top':
                style.top = '0';
                style.left = '30px';
                style.width = '400px';
                break;
            case 'bottom':
                style.bottom = '0';
                style.left = '40px';
                style.width = '400px';
                break;
            case 'left':
                style.left = '0';
                style.top = '40px';
                style.height = '400px';
                break;
            case 'right':
                style.right = '0';
                style.top = '40px';
                style.height = '400px';
                break;
        }
    }, [pos]);

    return <View className={`dot-border ${pos}`} >
        <View className="dot" />
        <View className="dot" />
        <View className="dot" />
        <View className="dot" />
        <View className="dot" />
        <View className="dot" />
        <View className="dot" />
        <View className="dot" />
        <View className="dot" />
        <View className="dot" />
        <View className="dot" />
    </View>
}

export default DotBorder;
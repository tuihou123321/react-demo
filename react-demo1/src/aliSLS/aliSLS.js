import React, {Component} from 'react';
import SlsWebLogger from 'js-sls-logger'

const opts = {
    host: 'cn-hangzhou.log.aliyuncs.com',
    project: 'xz-test',
    logstore: 'test',
    time: 10,
    count: 10,
}

export default class Page extends Component {
    state = {}

    componentDidMount() {
        const logger = new SlsWebLogger(opts)
        logger.send({
            customer: 'zhangsan',
            product: 'iphone 12',
            price: 7998,
            url: 'www.baidu.com',

        })
    }

    render() {
        const {project, host, logstore}=opts;
        return (
            <div>
                89
                <img className="img-responsive"
                     src={`http://${project}.${host}/logstores/${logstore}/track.gif?APIVersion=0.6.0&key1=val1&key2=val2`}/>
            </div>
        );
    }
}

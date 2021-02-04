import React, {Component} from 'react';
import sendTrackData from '../util/js/track'

export default class Page extends Component {
    state = {}
    clickBtn(){
        sendTrackData(
            {a:200}
        )
    }
    componentDidMount() {
        // sendTrackData(
        //     {
        //         a:100
        //     }
        // )
    }

    render() {

        return (
            <div>
                <button onClick={this.clickBtn}>点击发送</button>
            </div>
        );
    }
}

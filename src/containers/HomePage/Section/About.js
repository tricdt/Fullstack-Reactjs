import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về Channel Hỏi Dân IT
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/GlehwgU0Ivo"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        >
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Like, Comment, Share & Subscribe!!
                            ⇢喜欢的请分享和订阅本频道!!
                            🔔Email:jiajuncai47@gmail.com
                            If any producer or label has an issue with this song or picture, please get in contact with us
                            and we will delete it immediately.
                            歌曲跟版权音乐为歌手本人及其音乐公司所有，若喜欢他们的音乐请支持正版，如版权方认为影片有侵权，请与我们联络，我们将彻底删除影片
                            Copyright by:Zed music (Do not Reup)
                        </p>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

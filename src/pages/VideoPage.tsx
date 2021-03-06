import React, { useState } from 'react'
import { TwitchPlayer, TwitchPlayerOptions } from '../components/TwitchPlayer'
import DeathKill from '../components/DeathKill'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import Table from '../components/Table'
import AutoSkip from '../components/AutoSkip'

type VideoPage = {
    timeline: any;//Events;
    twitchPlayer: TwitchPlayerOptions;
}

const VideoPage = ({ twitchPlayer, videos, deathKillTimers }: { videos: any; twitchPlayer: any; deathKillTimers: any[] }) => {
    const [videoHandler, setVideoHandler] = useState(false);
    return (
        <div className="video_page">
            <TwitchPlayer options={{ ...twitchPlayer, setVideoHandler } as any} />
            <DeathKill videoHandler={videoHandler} deathKillTimers={deathKillTimers} />
            <AutoSkip videoHandler={videoHandler} deathKillTimers={deathKillTimers} />
            <h3>Other broacats</h3>
            <Table classNameProp="side" videos={videos} />
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videos: state.mainReducer.videos,
        deathKillTimers: state.mainReducer.deathKillTimers,
        twitchPlayer: state.mainReducer.twitchPlayer
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoPage)

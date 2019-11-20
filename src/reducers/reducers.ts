import { handleActions } from 'redux-actions'
import { pic8bitFaces } from '../constants'
import {
    addVideosById,
    addClipsById,
    addVideosSorted,
    addClipsSorted,
    addPlayersById,
    addStreamersById,
    addLatestVideos,
    setCurrentPlayer,
    setCurrentSearch
} from '../actions'
const DEFAULT_STATE = {
    deathKillTimers: [],
    timeline: {},
    twitchPlayer: {},
    currentPlayer: {},
    streamersById: {},
    latestVideosById: {},
    latestVideos: [],
    videos: [],
    featuredStreamers: pic8bitFaces,
    playersById: {},
    videosById: {},
    clipsById: {},
    videosSorted: [],
    clipsSorted: [],
    search: {} as { [key: string]: any }
}
export type State = typeof DEFAULT_STATE

const addVideosByIdReducer = (state: State, addVideos: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.videosById = addVideos.payload
    return newState
}

const addClipsByIdReducer = (state: State, addClips: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.clipsById = addClips.payload
    return newState
}

const addVideosSortedReducer = (state: State, addVideosSorted: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.videosSorted = addVideosSorted.payload
    return newState
}

const addClipsSortedReducer = (state: State, addClipsSorted: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.clipsSorted = addClipsSorted.payload
    return newState
}

const addPlayersByIdReducer = (state: State, addPlayersById: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.playersById = addPlayersById.payload
    return newState
}

const addStreamersByIdReducer = (state: State, addStreamersById: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.streamersById = addStreamersById.payload
    return newState
}

const addLatestVideosReducer = (state: State, addLatestVideos: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.latestVideosById = addLatestVideos.payload.latestVideosById
    newState.latestVideos = addLatestVideos.payload.latestVideos
    return newState
}

const setCurrentPlayerReducer = (state: State, currentPlayer: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.currentPlayer = currentPlayer.payload
    return newState
}

const setCurrentSearchReducer = (state: State, action: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.search[action.payload.query] = action.payload.data
    return newState
}
export const mainReducer = handleActions({
    [addVideosById as any]: addVideosByIdReducer,
    [addClipsById as any]: addClipsByIdReducer,
    [addVideosSorted as any]: addVideosSortedReducer,
    [addClipsSorted as any]: addClipsSortedReducer,
    [addPlayersById as any]: addPlayersByIdReducer,
    [setCurrentPlayer as any]: setCurrentPlayerReducer,
    [addStreamersById as any]: addStreamersByIdReducer,
    [setCurrentSearch as any]: setCurrentSearchReducer,
    [addLatestVideos as any]: addLatestVideosReducer,
},
    DEFAULT_STATE
)
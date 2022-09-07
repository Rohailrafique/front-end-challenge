import React from 'react'
import {useSelector} from "react-redux"


function ChannelOption() {

    const listOfChannels = useSelector((state) => state.channels.channelsList)
    console.log(listOfChannels)
  return (
    listOfChannels.map((channel) => {
        return  <div>{channel}</div>
    }
        )
  )
}

export default ChannelOption
package io.github.krizzu.reactnativeutube

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.pierfrancescosoffritti.androidyoutubeplayer.player.YouTubePlayer
import com.pierfrancescosoffritti.androidyoutubeplayer.player.YouTubePlayerView

class RNUtubeView : SimpleViewManager<YouTubePlayerView>() {

    override fun getName() = "RNUtubeView"

    private var ytPlayerView: YouTubePlayer? = null
    private var videoId: String? = null

    @ReactProp(name = "videoId")
    fun setVideoId(view: YouTubePlayerView, newId: String?) {
        if (newId == null || newId == videoId) return
        videoId = newId
        ytPlayerView?.loadVideo(newId, 0f)
    }

    // create view
    override fun createViewInstance(reactContext: ThemedReactContext?): YouTubePlayerView {
        val player = YouTubePlayerView(reactContext)

        player.initialize({
            ytPlayerView = it
        }, false)

        return player
    }

}
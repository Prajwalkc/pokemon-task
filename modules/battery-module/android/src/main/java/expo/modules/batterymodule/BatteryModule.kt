package expo.modules.batterymodule

import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.exception.CodedException
import java.net.URL

class BatteryModule : Module() {
  private val context: Context
    get() = appContext.reactContext ?: throw IllegalStateException("React context is not available")

  override fun definition() = ModuleDefinition {
    Name("BatteryModule")

    // Get battery level asynchronously
    AsyncFunction("getBatteryLevelAsync") {
      val batteryLevel = getBatteryLevel()
      
      // Return 0 if battery level is unavailable (negative value)
      if (batteryLevel < 0) {
        0
      } else {
        batteryLevel
      }
    }

    // Defines constant property on the module.
    Constant("PI") {
      Math.PI
    }

    // Defines event names that the module can send to JavaScript.
    Events("onChange")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      "Hello world! 👋"
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("setValueAsync") { value: String ->
      // Send an event to JavaScript.
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    // Enables the module to be used as a native view. Definition components that are accepted as part of
    // the view definition: Prop, Events.
    View(BatteryModuleView::class) {
      // Defines a setter for the `url` prop.
      Prop("url") { view: BatteryModuleView, url: URL ->
        view.webView.loadUrl(url.toString())
      }
      // Defines an event that the view can send to JavaScript.
      Events("onLoad")
    }
  }

  private fun getBatteryLevel(): Int {
    val batteryStatus: Intent? = IntentFilter(Intent.ACTION_BATTERY_CHANGED).let { ifilter ->
      context.registerReceiver(null, ifilter)
    }

    return batteryStatus?.let { intent ->
      val level: Int = intent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1)
      val scale: Int = intent.getIntExtra(BatteryManager.EXTRA_SCALE, -1)
      
      if (level < 0 || scale <= 0) {
        -1
      } else {
        (level * 100 / scale.toFloat()).toInt()
      }
    } ?: -1
  }
}

class BatteryUnavailableException : CodedException(
  "Battery level is unavailable. Unable to retrieve battery information from the device."
)

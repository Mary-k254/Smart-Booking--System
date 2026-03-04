package com.sacco.driver

import android.app.Service
import android.content.Intent
import android.location.Location
import android.os.IBinder
import com.google.android.gms.location.LocationServices

class GpsService : Service() {
    private lateinit var fusedClient: com.google.android.gms.location.FusedLocationProviderClient

    override fun onCreate() {
        super.onCreate()
        fusedClient = LocationServices.getFusedLocationProviderClient(this)
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        // Get Location and Send to Backend
        fusedClient.lastLocation.addOnSuccessListener { location: Location? ->
            location?.let {
                sendLocationToBackend(it.longitude, it.latitude)
            }
        }
        return START_STICKY
    }

    private fun sendLocationToBackend(lng: Double, lat: Double) {
        // API Call to /api/gps/update
        // Include Driver JWT Token
    }

    override fun onBind(intent: Intent?): IBinder? = null
}
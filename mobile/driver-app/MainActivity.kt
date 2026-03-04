package com.sacco.driver

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.content.Intent

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // Start GPS Service
        val gpsIntent = Intent(this, GpsService::class.java)
        startService(gpsIntent)
        
        // Handle Booking Requests UI Logic Here
        // Check for new bookings via API polling or WebSocket
    }
}
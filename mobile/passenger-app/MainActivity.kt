package com.sacco.passenger

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.content.Intent

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // Navigate to Booking Activity
        val bookingIntent = Intent(this, BookingActivity::class.java)
        startActivity(bookingIntent)
    }
}
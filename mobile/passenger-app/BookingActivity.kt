package com.sacco.passenger

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.widget.Button
import android.widget.TextView

class BookingActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_booking)

        val btnBook = findViewById<Button>(R.id.btnBook)
        val txtFare = findViewById<TextView>(R.id.txtFare)

        // Calculate Fare Logic
        // Call API /api/trips/calculate-fare
        // Display result in txtFare

        btnBook.setOnClickListener {
            // Create Booking via API /api/bookings/create
            // Initiate Payment via M-Pesa
        }
    }
}
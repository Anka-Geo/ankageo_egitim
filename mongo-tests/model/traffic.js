const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TrafficSchema = new Schema(
	{
		surface_type: {
			type: String,
		},
		collision_type: {
			type: String,
		},
		severity: {
			type: String,
		},
		surface_condition: {
			type: String,
		},
		num_driver_casualties: {
			type: Number,
		},
		lat: {
			type: String,
		},
		lon: {
			type: String,
		},
		traffic_control: {
			type: String,
		},
		num_vehicles: {
			type: Number,
		},
		num_passenger_casualties: {
			type: Number,
		},
		num_pedestrian_casualties: {
			type: Number,
		},
		record_date: {
			type: Date,
		},
		main_cause: {
			type: String,
		},
		geom: {
			type: String,
		},
	},
	{ timestamps: true } // optional, maybe used for logging.
)

// model of the designed schema
const Traffic = mongoose.model("traffic", TrafficSchema)

module.exports = Traffic

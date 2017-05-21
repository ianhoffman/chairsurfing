@bookings.each do |booking|
  json.set! booking.id do
    json.startDate booking.start_date
    json.endDate booking.end_date
    json.chair do
      json.extract! booking.chair, :description, :address
    end
  end
end

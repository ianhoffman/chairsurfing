@bookings.each do |booking|
  json.set! booking.id do
    json.id booking.id
    json.startDate booking.start_date
    json.endDate booking.end_date
    json.status booking.status
    json.chair do
      json.extract! booking.chair, :id, :description, :address
    end
    json.user do
      json.id booking.user.id
      json.firstName booking.user.first_name
      json.lastName booking.user.last_name
    end
  end
end

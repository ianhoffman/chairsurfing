@reviews.each do |review|
  json.set! review.id do
    json.body review.body
    json.rating review.rating
    json.user do
      json.firstName review.user.firstName
      json.lastName review.user.lastName
    end
  end
end

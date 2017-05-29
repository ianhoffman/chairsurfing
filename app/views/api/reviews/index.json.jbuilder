unless @reviews == nil
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rating
      json.userId review.user_id
      json.user do
        json.firstName review.user.first_name
        json.lastName review.user.last_name
      end
    end
  end
end

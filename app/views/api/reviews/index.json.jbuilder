unless @reviews == nil
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :user_id
      json.user do
        json.firstName review.user.firstName
        json.lastName review.user.lastName
      end
    end
  end
end

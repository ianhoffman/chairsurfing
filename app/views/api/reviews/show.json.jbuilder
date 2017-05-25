json.id @review.id
json.body @review.body
json.rating @review.rating
json.userId @review.user_id
json.user do
  json.firstName @review.user.first_name
  json.lastName @review.user.last_name
end

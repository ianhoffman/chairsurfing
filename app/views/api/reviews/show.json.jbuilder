json.id @review.id
json.body @review.body
json.rating @review.rating
json.userId @review.user_id
json.user do
  json.firstName @review.user.firstName
  json.lastName @review.user.lastName
end

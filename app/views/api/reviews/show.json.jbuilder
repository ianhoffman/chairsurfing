json.id @review.id
json.body @review.body
json.rating @review.rating
json.user do
  json.firstName @review.user.firstName
  json.lastName @review.user.lastName
end

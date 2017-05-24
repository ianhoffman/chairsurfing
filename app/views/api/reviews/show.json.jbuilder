json.id @review.id
json.body @review.body
json.rating @review.rating
json.user do |user|
  json.firstName user.firstName
  json.lastName user.lastName
end

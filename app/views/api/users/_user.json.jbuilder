json.extract! user, :id, :email, :first_name, :last_name
if user.chair
  json.chair_id user.chair.id
else
  json.chair_id 'null'
end

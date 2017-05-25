
export const signup = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: {
      user: {
        first_name: user.firstName,
        last_name: user.lastName,
        password: user.password,
        emai: user.email
      }
    }
  })
);


export const login = (user) =>(
  $.ajax({
    method:"POST",
    url:"/api/session",
    data: {user}
  })
);

export const logout = ()=>{
  return $.ajax({
    method:"DELETE",
    url:"/api/session"
  });
};

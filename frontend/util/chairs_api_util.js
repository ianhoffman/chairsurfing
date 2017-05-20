export const fetchAllChairs = filters => {
  return $.ajax({
    url: '/api/chairs',
    method: 'GET',
    data: { filters },
    error: err => console.log(err)
  });
};

export const createChair = chair => {
  return $.ajax({
    url: '/api/chairs',
    method: 'POST',
    data: { chair },
    error: err => console.log(err)
  });
};

export const fetchSingleChair = id => {
  return $.ajax({
    url: `/api/chairs/${id}`,
    method: 'GET',
    error: err => console.log(err)
  });
};

export const updateChair = chair => {
  return $.ajax({
    url: `/api/chairs/${chair.id}`,
    method: 'PATCH',
    data: { chair },
    error: err => console.log(err)
  });
};

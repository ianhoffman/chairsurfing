export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review },
    error: err => console.log(err)
  })
);

export const updateReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review },
    error: err => console.log(err)
  })
);

export const fetchAllReviews = id => (
  $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: { id },
    error: err => console.log(err)
  })
);

export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
    error: err => console.log(err)
  })
);

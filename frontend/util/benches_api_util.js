export const fetchAllBenches = () => (
  $.ajax({
    url: '/api/benches',
    method: 'GET',
    error: err => console.log(err)
  })
);

export const createBench = bench => (
  $.ajax({
    url: '/api/benches',
    method: 'POST',
    data: { bench }
  })
);

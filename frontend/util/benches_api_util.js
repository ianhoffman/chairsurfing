export const fetchAllBenches = filters => {
  return $.ajax({
    url: '/api/benches',
    method: 'GET',
    data: { bounds: filters },
    error: err => console.log(err)
  })
};

export const createBench = bench => (
  $.ajax({
    url: '/api/benches',
    method: 'POST',
    data: { bench }
  })
);

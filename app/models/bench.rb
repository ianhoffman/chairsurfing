class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  validates :seating, numericality: { greater_than: 0 }

  def self.in_bounds(bounds)
    northEast = bounds["northEast"]
    southWest = bounds["southWest"]

    benches = Bench
      .where("lat < ? AND lat > ?", northEast['lat'], southWest['lat'])
      .where("lng < ? AND lng > ?", northEast['lng'], southWest['lng'])

    if(bounds[:max_seating])
      benches = benches.where('seating <= ?', params[:max_seating])
    end

    if(bounds[:min_seating])
      benches = benches.where('seating >= ?', bounds(:min_seating))
    end

    return benches
  end

end

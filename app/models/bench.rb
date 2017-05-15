class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  validates :seating, numericality: { greater_than: 0 }

  def self.in_bounds(bounds)
    northEast = bounds["northEast"]
    southWest = bounds["southWest"]

    benches = Bench
      .where("lat < ? AND lat > ?", northEast['lat'], southWest['lat'])
      .where("lng < ? AND lng > ?", northEast['lng'], southWest['lng'])

    return benches
  end

end
